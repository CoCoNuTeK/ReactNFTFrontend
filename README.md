# Assignment: React Developer - User Management App

## Overview
This is a **Next.js** application built using **TypeScript**, **Redux Toolkit**, and **SCSS**. It allows users to **view, add, update, and delete users** fetched from a public API.

## ⏳ Development Time
**Total Time:** ~2-3 hours
This project was developed with a focus on demonstrating state management, component structuring, and styling while maintaining a clean and modular approach.

---

## 🚀 Getting Started
### **1️⃣ Clone the Repository**
```bash
git clone <repo-url>
cd <repo-folder>
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the Development Server**
```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application.

---

## 🔧 Environment & Versions
This project was developed and tested with the following versions:

- **Node.js:** v20.17.0
- **npm:** 10.8.2
- **npx:** 10.8.2
- **Next.js:** 15.1.6
- **React:** 19.0.0

Ensure you have these versions or compatible ones before running the project.

---

## 📡 API & Data Structure
This application fetches user data from the public API: **[JSONPlaceholder Users](https://jsonplaceholder.typicode.com/users)**.

Each user object in the API contains multiple fields, but we only use the following:

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org"
}
```

---

## 🏗️ Features Implemented
### ✅ **Setup & Initialization**
- Created a **Next.js** application with TypeScript.
- Integrated **SCSS** for styling.
- Configured **Redux Toolkit** for state management.

### ✅ **API Integration**
- Used **Axios** to fetch users from **JSONPlaceholder API**.
- Displayed the users in a responsive card layout.

### ✅ **CRUD Operations**
- **Create:** Users can be added via the `UserForm` component.
- **Read:** Users are displayed in `UserList` using Redux state.
- **Update:** Users can be edited inline and updated in Redux state.
- **Delete:** Users can be removed from Redux state via the `UserCard` component.

### ✅ **State Management**
- Managed the application state using **Redux Toolkit**.
- Implemented actions for adding, updating, and deleting users.

### ✅ **Responsive Design**
- Styled using **SCSS modules**.
- Applied **flexbox and grid layouts** for responsiveness.

---

## 🗂️ Project Structure
```
src
├── components
│   ├── UserCard       # Displays individual user details with Edit/Delete functionality
│   │   ├── UserCard.tsx
│   │   ├── UserCard.module.scss
│   ├── UserForm       # Allows adding a new user
│   │   ├── UserForm.tsx
│   │   ├── UserForm.module.scss
│   ├── UserList       # Renders a list of users from Redux state
│   │   ├── UserList.tsx
│   │   ├── UserList.module.scss
│
├── pages
│   ├── index.tsx      # Main entry page, renders UserList & UserForm
│   ├── _app.tsx       # Next.js root component, wraps Redux Provider
│   ├── _document.tsx  # Custom HTML structure
│
├── store
│   ├── store.ts       # Configures Redux store
│   ├── slices
│   │   ├── userSlice.ts  # Redux logic for user state (Add, Update, Delete)
│
├── styles
│   ├── globals.scss   # Global styles (resets, layout, typography)
│   ├── _mixins.scss   # SCSS mixins for reusable styles
│   ├── _variables.scss # Global SCSS variables (colors, spacing)
│
├── types
│   ├── user.ts        # Type definitions for the User model
│
├── utils
│   ├── api.ts         # Axios API call for fetching users
```

---

## ℹ️ Additional Notes
- **SCSS modules** are used for component-scoped styling.
- **Global styles** (`globals.scss`) manage layout and typography.
- **Basic validation** (e.g., required name/email) is implemented.
- **More advanced input validation** (like regex for emails) was omitted to prioritize quick functionality testing.

---
