# 📦 SwiftSend – Parcel Delivery Management System

SwiftSend is a modern parcel delivery management system designed to simplify sending, tracking, and managing parcels.  
It provides a role-based dashboard for **Senders, Receivers, and Admins** to manage parcels efficiently with real-time statistics, analytics, and user-friendly UI.

---

## 🚀 Live Demo
🔗 [Visit Live Website](https://swiftsend-nine.vercel.app)

---

## 🖼️ Project Overview
SwiftSend is a full-featured parcel management platform with:
- 📊 **Analytics Dashboard** for admins, senders, and receivers  
- ✅ **Role-based Access Control** (Sender, Receiver, Admin)  
- 📦 **Parcel Tracking** with multiple statuses: Pending, In Transit, Delivered, Cancelled, Flagged  
- 👥 **User Management** (Senders, Receivers, Admins)  
- 📈 **Charts & Insights** for shipment trends and delivery distribution  
- ⚡ **Production-grade UI** using **ShadCN UI** + **Lucide Icons**  
- 🔐 **Authentication & Authorization** with JWT and secure cookie handling  

---

## 🛠️ Technology Stack

**Frontend:**
- [TypeScript](https://www.typescriptlang.org/)  
- [React](https://react.dev/)  
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)  
- [ShadCN UI](https://ui.shadcn.com/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Lucide React Icons](https://lucide.dev/)  

**Backend (separate repo):**
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/)  
- [Mongoose](https://mongoosejs.com/)  
- [JWT Authentication](https://jwt.io/)  

**Deployment:**
- Frontend: [Vercel](https://vercel.com/)  
- Backend: [Render](https://render.com/)  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/abubakrsiddikl/Parcel-Delivery-System-Frontend.git
cd Parcel-Delivery-System-Frontend
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Setup Environment Variables
Create a .env.local file in the root directory and configure:

env
Copy code
NEXT_PUBLIC_API_BASE_URL=your_backend_api_url
4️⃣ Run the Development Server
bash
Copy code
npm run dev
Now open http://localhost:3000 to see your app.

📂 Folder Structure (Frontend)
php
Copy code
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── redux/          # Redux Toolkit store & APIs
│   ├── pages/          # Next.js pages
│   ├── app/            # App router (if using Next.js 13+)
│   └── utils/          # Helper functions
├── package.json
└── README.md
🌟 Features in Detail
🔹 Authentication & Role Management

🔹 Parcel CRUD Operations

🔹 Dashboard Analytics with Charts

🔹 Responsive UI with Tailwind + ShadCN

🔹 Secure Cookie-based JWT Auth

🔹 Real-time Insights with Redux RTK Query

📌 Notes
Make sure the backend server is running and accessible at the API URL configured in .env.local.

Some analytics features require valid user roles (Sender/Receiver/Admin).

Designed with production-ready best practices for scalability.

👨‍💻 Author
Abu Bakr Siddik
Junior Web Developer – MERN Stack
🔗 GitHub Profile

