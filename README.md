# Simple E-Commerce Store

A full-stack e-commerce web application built with React, Express.js, and MongoDB Atlas.

## Features

- **Customer**: Register, login, browse/search products, shopping cart, checkout, order tracking
- **Admin**: Dashboard, product CRUD, order management, user management
- JWT authentication with role-based access control
- Responsive UI with Tailwind CSS
- Toast notifications with Sonner

## Tech Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | React 18, Vite, Tailwind CSS 4, React Router 7 |
| Backend  | Express.js, Node.js                 |
| Database | MongoDB Atlas                       |
| Auth     | JWT + bcrypt                        |

## Project Structure

```
Simple E-Commerce Store/
├── client/          # React frontend
├── server/          # Express backend
└── system-documentation.md
```

## Prerequisites

- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

## Setup

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
```

Edit `server/.env` with your MongoDB connection string and JWT secret:

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/simple-ecommerce
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Seed the database with sample products and admin account:

```bash
npm run seed
```

Start the server:

```bash
npm run dev
```

Server runs at `http://localhost:5000`

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

## Default Admin Account

After running seed:

- **Email**: admin@store.com
- **Password**: admin123

## API Endpoints

| Method | Endpoint                 | Description              |
| ------ | ------------------------ | ------------------------ |
| POST   | /api/auth/register       | Register customer        |
| POST   | /api/auth/login          | Login                    |
| GET    | /api/products            | List products            |
| POST   | /api/cart                | Add to cart              |
| POST   | /api/orders              | Place order              |
| PUT    | /api/orders/:id/status   | Update order (admin)     |

See `system-documentation.md` for the full API reference.

## Scripts

**Server**
- `npm run dev` — Start with hot reload
- `npm start` — Production start
- `npm run seed` — Seed database

**Client**
- `npm run dev` — Development server
- `npm run build` — Production build
