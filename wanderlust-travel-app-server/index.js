const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");


const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// port
const port = process.env.PORT;

// MongoDB Connection String
const uri = process.env.MONGODB_URI;

// Create a MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const JWKS = createRemoteJWKSet(
  new URL('http://localhost:3000/api/auth/jwks')
)
// Verify Token Middleware
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const { payload } = await jwtVerify(token, JWKS)
    console.log(payload);
    next()
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  //   if (err) {
  //     return res.status(403).send({ message: "Forbidden" });
  //   }
  //   req.user = decoded;
  //   next();
  // });

  // You must call next() so the request can continue!
  next();
};
// Connect to MongoDB
const run = async () => {
  try {
    // Send a ping to confirm a successful connection
    await client.connect();

    const admin = client.db("wanderlust-database");
    const adminCollection = admin.collection("admin");
    const bookingCollection = admin.collection("booking");

    //  BOOKING API
    app.post("/bookings", async (req, res) => {
      const data = req.body;
      console.log(data, "data");
      const result = await bookingCollection.insertOne(data);
      console.log(result, "result");
      res.send(result);
    });
    //  MY BOOKINGS API
    app.get("/bookings/:userId", async (req, res) => {
      const { userId } = req.params;
      const query = { userId: userId };
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });

    // Delete booking
    app.delete("/bookings/:id", async (req, res) => {
      const { id } = req.params;
      const result = await bookingCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });
    //  DESTINATION API
    app.get("/destinations", async (req, res) => {
      const result = await adminCollection.find().toArray();

      res.send(result);
    });
    // Details API
    app.get("/destinations/:id", verifyToken, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await adminCollection.findOne(query);
      res.send(result);
    });
    // Update API
    app.patch("/destinations/:id", async (req, res) => {
      const { id } = req.params;
      const updateData = req.body;
      console.log(updateData, "updateData");
      const result = await adminCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData },
      );
      res.send(result);
    });
    // Delete API
    app.delete("/destinations/:id", async (req, res) => {
      const id = req.params.id;
      const result = await adminCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    //  ADMIN CRUD
    app.post("/destinations", async (req, res) => {
      const data = req.body;
      console.log(data, "data");
      const result = await adminCollection.insertOne(data);
      console.log(result, "result");
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
};
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("This is Wanderlust Travel App Server");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
