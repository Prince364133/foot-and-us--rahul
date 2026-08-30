# 🍽️ Food&Us

A modern, high-end culinary and recipe platform crafted with a React + Vite frontend and a Node.js + Express + MySQL backend.

---

## 📁 Project Structure

```
FoodandUs/
├── Frontend/                 # React 19 + Vite Client Application
│   ├── public/              # Static assets & icons
│   ├── src/                 # React components, pages, routes, and styles
│   │   ├── components/      # UI components (Header, Footer, Recipe Cards, etc.)
│   │   ├── pages/           # Home, Recipes, Contact, NotFound
│   │   ├── data/            # Local data models & recipe content
│   │   ├── App.jsx          # Root component & routing
│   │   └── main.jsx         # App entry point
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   └── package.json         # Frontend dependencies & scripts
│
├── Backend/                  # Node.js + Express REST API Server
│   ├── config/              # Database connection pool (MySQL2)
│   ├── controllers/         # Request handling & validation logic
│   ├── database/            # Database schema & SQL initialization
│   ├── routes/              # Express API route definitions
│   ├── server.js            # Server entry point
│   └── package.json         # Backend dependencies & scripts
│
├── .gitignore               # Global Git ignore rules
└── README.md                # Project documentation
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js** (v18+ recommended)
- **npm** or **pnpm**
- **MySQL Database** (local or cloud instance)

---

### 2. Backend Setup

1. Open a terminal in the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Update your database credentials in `.env`:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=foodandus_db
   DB_PORT=3306
   ```

4. Initialize the MySQL database:
   Run the SQL statements in `database/schema.sql` in your MySQL database:
   ```sql
   CREATE DATABASE IF NOT EXISTS foodandus_db;
   USE foodandus_db;
   CREATE TABLE IF NOT EXISTS contacts (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(150) NOT NULL,
     email VARCHAR(150) NOT NULL,
     subject VARCHAR(200) DEFAULT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. Start the backend server:
   ```bash
   # Production mode
   npm start

   # Development mode with nodemon
   npm run dev
   ```
   The backend API will run on `http://localhost:5000`.

---

### 3. Frontend Setup

1. Open a terminal in the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure environment variables:
   Create a `.env` file from `.env.example` if you need to point to a custom API URL:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend web application will run at `http://localhost:5173`.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, React Router v7, Modern CSS
- **Backend**: Node.js, Express.js, MySQL2 (Promise Pool), CORS, Dotenv
- **Database**: MySQL
