const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
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
// Connect to MongoDB
const run = async () => {
  try {
    // Send a ping to confirm a successful connection
    await client.connect();

    const admin = client.db("wanderlust-database");
    const adminCollection = admin.collection("admin");
    const bookingCollection = admin.collection("booking");

    app.post("/bookings", async (req, res) => {
      const data = req.body;
      console.log(data, "data");
      const result = await bookingCollection.insertOne(data);
      console.log(result, "result");
      res.send(result);
    });

    //  DESTINATION API
    app.get("/destinations", async (req, res) => {
      const result = await adminCollection.find().toArray();

      res.send(result);
    });
    // Details API
    app.get("/destinations/:id", async (req, res) => {
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
