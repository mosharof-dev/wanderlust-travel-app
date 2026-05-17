# 🌍 Wanderlust Travel App — Frontend

A modern full-stack travel booking web application built with **Next.js 16** and **React 19**. Users can explore travel destinations, book trips, manage their bookings, and admins can manage destination content through a protected dashboard.

## 🔗 Live Demo

> 🚀 [Deployed on Vercel](https://wanderlust-travel-app.vercel.app)

---

## ✨ Features

- 🏖️ Browse travel destinations with details
- 📅 Book trips with a simple booking flow
- 📋 View and cancel your own bookings
- 🔐 Secure authentication (Sign Up / Login) via **better-auth**
- 👑 Admin dashboard for destination management (CRUD)
- 🛡️ Role-based access control (Admin vs Regular User)
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React Framework (App Router) |
| [React 19](https://react.dev/) | UI Library |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS |
| [DaisyUI v5](https://daisyui.com/) | Tailwind Component Library |
| [HeroUI](https://heroui.com/) | Additional UI Components |
| [better-auth](https://www.better-auth.com/) | Authentication |
| [React Hook Form](https://react-hook-form.com/) | Form Management |
| [Swiper.js](https://swiperjs.com/) | Touch Slider / Carousel |
| [Sonner](https://sonner.emilkowal.ski/) | Toast Notifications |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon Library |
| [MongoDB](https://www.mongodb.com/) | Database (via better-auth adapter) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                  # Home Page
│   ├── layout.js                # Root Layout
│   ├── loading.jsx              # Loading UI
│   ├── not-found.jsx            # 404 Page
│   ├── globals.css              # Global Styles
│   ├── admin/                   # Admin Dashboard (role-protected)
│   ├── destinations/            # All Destinations & Detail pages
│   ├── login/                   # Login Page
│   ├── sign-up/                 # Sign Up Page
│   ├── profile/                 # User Profile Page
│   ├── my-booking/              # My Bookings Page
│   └── api/
│       └── auth/                # better-auth API routes
│
├── components/
│   ├── shared/
│   │   ├── NavBer.jsx           # Navbar (role-aware)
│   │   └── Footer.jsx           # Footer
│   └── home/
│       ├── Banne.jsx            # Hero Banner
│       ├── FeaturedDestinations.jsx
│       ├── DestinationsList.jsx
│       ├── DestinationCard.jsx
│       ├── EditModal.jsx        # Admin edit modal
│       ├── Delete.jsx           # Admin delete action
│       ├── BookingCard.jsx
│       ├── BookingDelete.jsx
│       ├── MyBookingCard.jsx
│       ├── Testimonials.jsx
│       ├── WhyChooseUs.jsx
│       └── CTASection.jsx
│
└── lib/
    ├── auth.js                  # better-auth server config
    └── auth-client.js           # better-auth client config
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB Atlas account
- Backend server running (see [wanderlust-travel-app-server](../wanderlust-travel-app-server))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/wanderlust-travel-app.git
cd wanderlust-travel-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**

Create a `.env.local` file in the root:

```env
# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000

# better-auth secret
BETTER_AUTH_SECRET=your_secret_key_here

# MongoDB connection
MONGODB_URI=your_mongodb_connection_string

# (Optional) Social auth providers
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Authentication & Authorization

This project uses **[better-auth](https://www.better-auth.com/)** for authentication.

- Users can **Sign Up / Login** with email & password
- Session tokens are issued as **JWTs** and verified by the backend via **JWKS**
- The **Navbar** conditionally shows the `Admin` link based on the user's role
- The `/admin` route is protected — non-admin users see an **Access Denied** page
- Route protection is handled via `src/proxy.js`

### Roles
| Role | Access |
|---|---|
| `user` | Browse destinations, book trips, manage own bookings |
| `admin` | All of the above + full destination CRUD via Admin Dashboard |

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

This app is deployed on **[Vercel](https://vercel.com/)**.

Make sure to add all `.env` variables to your Vercel project settings under **Environment Variables**.

---

## 🤝 Related Repository

- 🔧 **Backend:** [wanderlust-travel-app-server](https://github.com/your-username/wanderlust-travel-app-server)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
