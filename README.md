# ⚡ Zaptro – Modern E-commerce Frontend Platform

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-563D7C?style=for-the-badge&logo=vite&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-blue?style=for-the-badge&logo=clerk) ![React Router](https://img.shields.io/badge/React--Router-D63AFF?style=for-the-badge&logo=reactrouter) ![Axios](https://img.shields.io/badge/Axios-005571?style=for-the-badge&logo=axios&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide%20Icons-000000?style=for-the-badge&logo=lucide&logoColor=white) ![React Toastify](https://img.shields.io/badge/React--Toastify-FF912B?style=for-the-badge&logo=react&logoColor=white) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

---

 **Zaptro** is a modern, blazing-fast, feature-rich e-commerce frontend built using the latest technologies such as **React**, **Vite**, **Tailwind CSS**, and **Clerk Authentication**. Designed for scalability and great UX, it provides a professional shopping experience with optimized performance and modular architecture.

---



## 🧩 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## ✨ Features

### 🛍 Functional Highlights
- Dynamic Product Listings with filters
- Persistent Shopping Cart using React Context
- Clerk Authentication for signup/signin
- Protected Routes
- Toast Notifications for user interactions

### 🎨 UI/UX Excellence
- Fully responsive layout
- Tailwind utility-first styling
- Smooth loading skeletons
- Image sliders using React Slick
- Accessible and intuitive interface

#### Key Features
- 🚀 **Lightning-Fast Performance** – Powered by Vite for instant development feedback and fast builds.
- 📱 **Responsive Modern UI** – Tailwind CSS ensures consistent design across all screen sizes.
- 🔐 **Secure Auth Flow** – Seamless sign-up, sign-in, and session handling with Clerk.
- 🛒 **Persistent Shopping Cart** – Intuitive cart experience with context-based state management.
- 🧠 **React Context API** – Clean, centralized, and scalable state flow architecture.
- 🎯 **Dynamic Product Filters** – Smart filtering by category, brand, and price range.
- 🧱 **Skeleton Loaders** – Better UX with smooth loading indicators.
- 🔔 **Real-Time Notifications** – Action-based feedback using toast alerts.
- 🔒 **Protected Routes** – Page-level authentication guards.
- 🧭 **Professional Code Structure** – Modular, maintainable, and ready for team collaboration.

---

## 🛠️ Tech Stack

| Purpose          | Tech Used |
|------------------|-----------|
| **Frontend**     | [React](https://reactjs.org/), [Vite](https://vitejs.dev/) |
| **Styling**      | [Tailwind CSS](https://tailwindcss.com/) |
| **Routing**      | [React Router DOM](https://reactrouter.com/) |
| **Authentication** | [Clerk](https://clerk.dev/) |
| **HTTP Client**  | [Axios](https://axios-http.com/) |
| **Carousel**     | [React Slick](https://react-slick.neostack.com/) |
| **Icons**        | [Lucide](https://lucide.dev/), [React Icons](https://react-icons.github.io/) |
| **Notifications**| [React Toastify](https://fkhadra.github.io/react-toastify/) |

---

## 🏗️ Architecture & Principles

- **Component-Based UI**: Clean, reusable UI components
- **Feature-First File Structure**: Easier navigation and scalability
- **Context API for Global State**: Simple, lightweight state management
- **Modular Codebase**: Built with future extension in mind (admin, payments, etc.)
- **Performance First**: Vite ensures fast HMR and build speeds

---

## 🚀 Installation & Setup

### ✅ Prerequisites

- Node.js `v18.x` or later
- npm or yarn

### ⚙️ Steps

```bash
# Clone the repo
git clone https://github.com/your-username/zaptro-ecommerce-frontend.git
cd zaptro-ecommerce-frontend

# Install dependencies
npm install
````

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Get your key from the [Clerk Dashboard](https://dashboard.clerk.com/).



---
## 🧪 Run the Project


npm run dev
```

Open `http://localhost:5173` in your browser.


```
## 📁 Folder Structure

```
/src
├── assets/         # Static images, logos
├── Context/        # Global state (cart, data)
│   ├── CartContext.jsx
│   └── DataContext.jsx
├── MyComponents/   # UI Components (Navbar, Footer, etc.)
├── Pages/          # Route-specific components
├── App.jsx         # Route definitions
├── main.jsx        # App entry point
└── index.css       # Tailwind base styles
```

---

## 🤝 Contributing

Your contributions are always welcome! ❤️

### 📌 How to Contribute

1. Fork this repository
2. Create your branch:
   `git checkout -b feature/your-feature`
3. Commit your changes:
   `git commit -m "✨ Added new feature"`
4. Push to the branch:
   `git push origin feature/your-feature`
5. Open a Pull Request and let's review it together!

> Please open an issue before starting major changes.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE). See the full license below or in the `LICENSE` file.

---

## 👨‍💻 Author

**Pranav Thorat**
📧 Email: [Click Here](mailto:pranavthorat95@gmail.com)
🔗 GitHub: [Click Here](https://github.com/PranavThorat1432)
🔗 LinkedIn: [Click Here](https://www.linkedin.com/in/curiouspranavthorat/)
🔗 Live Preview: [Click Here]()

> Built with focus, love, and dedication to modern web development.

