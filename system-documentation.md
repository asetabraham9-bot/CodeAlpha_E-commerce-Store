# Simple E-Commerce Store

# 1. Project Overview

This introduces the project by explaining its purpose, objectives, scope, users, and technologies.

## 1.1. Project Tittle
Simple E-commerce Store

## 1.2. Project Description

The Simple E-commerce Store is a web-based application designed to provide customers with an easy and convenient online shopping experience. The system enables users to browse available products, view detailed product information, add products to a shopping cart, place orders, and complete payments through a secure checkout process.

The application also provides an administrative interface that allows administrators to manage products, monitor customer orders, manage user accounts, and oversee payment information. The system stores all essential business data, including products, users, shopping carts, orders, and payment records, within a MongoDB Atlas database.

The project follows a modern full-stack architecture using React for the frontend, Express.js for the backend, and MongoDB Atlas as the database, enabling efficient communication between the client and server through RESTful APIs.

## 1.3. Problem Statement

Traditional shopping requires customers to visit physical stores, making the purchasing process time-consuming and less convenient. Additionally, manual product and order management can lead to inefficiencies, inaccurate inventory records, and poor customer experience.

Many small businesses also lack affordable online platforms to showcase products, process customer orders, and manage sales efficiently. Therefore, there is a need for a simple, secure, and user-friendly e-commerce system that enables customers to purchase products online while allowing administrators to manage products, orders, and users effectively.

## 1.4. Purpose of the Project

The purpose of this project is to develop a simple web-based e-commerce application that enables customers to purchase products online while providing administrators with tools to manage products, customer accounts, orders, and payments through an easy-to-use management system.

## 1.5. Objectives

General Objective

To develop a simple, secure, and user-friendly e-commerce web application that supports online product browsing, shopping cart management, order processing, payment handling, and administrative management.

Specific Objectives

- [Develop a secure user registration and login system.]
- [Allow customers to browse and search available products]
- [Display detailed information for each product]
- [Enable customers to add, update, and remove products from their shopping cart.]
- [Implement a secure checkout and payment process.]
- [Allow customers to place and track their orders.]
- [Enable administrators to perform product management (Create, Read, Update, Delete).]
- [Allow administrators to manage customer orders and update order status]
- [Store products, users, payments, and order information securely in MongoDB Atlas]
- [Provide a responsive (for Desktop, Tablet, Mobile) and user-friendly interface using React and Tailwind CSS.]

## 1.6. Scope of the project

The Simple E-commerce Store focuses on providing the essential functionalities required for online shopping.

The system allows customers to create accounts, log in securely, browse products, search for products, view product details, manage shopping carts, place orders, complete payments, and review their order history.

Administrators can manage products, categories (optional), customer accounts, orders, and payment records through an administrative dashboard.

The project does not include advanced enterprise features such as multi-vendor support, warehouse management, live chat, AI-based recommendations, coupon systems, shipment tracking, product reviews, multilingual support, or mobile applications.

## 1.7. Target Users

The system is designed for two primary user groups:

Customer

Customers browse products, manage shopping carts, place orders, complete payments, and monitor their purchase history.

Administrator

Administrators manage products, customer accounts, orders, payments, and monitor overall system operations.

## 1.8. Development Tools and Technologies
| Component            | Technology           |
| -------------------- | -------------------- |
| Frontend Framework   | React 18.3.1         |
| Programming Language | JavaScript           |
| Routing              | React Router 7.13.0  |
| Styling              | Tailwind CSS 4.1.12  |
| Icons                | Lucide React         |
| Notifications        | Sonner               |
| State Management     | React Context API    |
| Backend Framework    | Express.js (Node.js) |
| Database             | MongoDB Atlas|
| API Style            | RESTful API          |
| Version Control      | Git & GitHub         |
| Code Editor          | Any prefered one     |


## 2. System Requirements

## 2.1. Introduction

This section specifies the functional and non-functional requirements of the Simple E-commerce Store. These requirements describe the expected behavior of the system, the services it provides to users, and the quality attributes necessary for reliable operation.

## 2.2. Functional Requirements

Functional requirements describe the services and operations that the system must provide.

### A. User Authentication

- [The system shall allow users to register by providing their personal information.]
- [The system shall allow registered users to log in using their email address and password.]
- [The system shall allow authenticated users to log out securely]
- [The system shall allow users to update their profile information.]
- [The system shall securely store encrypted passwords]
- [The system shall prevent unauthorized access to protected resources]

### B. Product Management

- [The system shall display a list of available products.]
- [The system shall organize products into categories.]
- [The system shall allow customers to search products by name]
- [The system shall allow customers to filter products by category]
- [The system shall display detailed product information, including:
    - [Product image]
    - [Product Name]
    - [Description]
    - [Category]
    - [Price]
    - [Available stock]
    ]
- [The administrator shall be able to:
    - [Add new products]
    - [Update product information]
    - [Delete products]
    - [Upload product images]
]

### C. Shopping Cart Management

The system shall allow customers to:

- [Add products to the shopping cart.]
- [View cart contents.]
- [Increase or decrease product quantity.]
- [Remove products from the cart.]
- [Clear the shopping cart.]
- [View the total price before checkout.]

### D. Checkout

The system shall allow customers to:

- [Proceed to checkout.]
- [Enter shipping information.]
- [Review their order summary.]
- [Confirm the purchase.]

The system shall calculate:

- [Product subtotal]
- [Shipping cost (fixed or free)]
- [Total amount]

### E. Payment Management

- [The system shall allow customers to complete payment for their orders]
- [The system shall record payment information.]
- [The system shall update payment status after successful payment.]

For this project, payment processing may be simulated instead of integrating with a real payment gateway.

### F. Order Management

The system shall:

- [Generate a new order after successful checkout.]
- [Assign a unique order number.]
- [Save ordered products.]
- [Store shipping information]
- [Store payment information.]

Customers shall be able to:

- [View their order history.]
- [View order details.]
- [Check order status.]

Administrators shall be able to:

- [View all customer orders.]
- [Update order status.]

Example order statuses include:

- [Pending]
- [Processing]
- [Shipped]
- [Delivered]
- [Cancelled]

### G. User Management

The administrator shall be able to:

- [View all registered users.]
- [View user details.]
- [Disable or enable user accounts (optional).]

Customers shall only access their own information.

### H. NOtifications 

The system shall display success or error notifications for operations such as:

- [Registration]
- [Login]
- [Product added to cart]
- [Product removed from cart]
- [Order placed successfully]
- [Payment completed]

Notifications will be displayed using Sonner.

## 2.3. Non-Functional Requirements

Non-functional requirements define the quality attributes of the system

### A. Performance

- [The system should load pages quickly]
- [Product information should be retrieved efficiently.]
- [API responses should be delivered within an acceptable time under normal usage.]

### B. Security
The system shall:

- [Encrypt user passwords]
- [Authenticate users using JSON Web Tokens (JWT).]
- [Restrict access based on user roles.]
- [Protect private routes.]
- [Validate all user inputs.]
- [Prevent unauthorized API access.]

### C. Usability

The system should:

- [Provide an intuitive user interface.]
- [Be easy to navigate]
- [Display clear error messages.]
- [Be responsive on desktop, tablet, and mobile devices.]

### D. Reliability

The system should:

- [Handle invalid inputs gracefully.]
- [Prevent application crashes due to user errors.]
- [Preserve data consistency.]

### E. Maintainability

The application should:

- [Follow a modular architecture]
- [Separate frontend and backend responsibilities.]
- [Use reusable React components.]
- [Follow RESTful API principles.]
- [Be easy to extend with additional features.]

### F. Scalability

The system should support future enhancements such as:

- [Product reviews]
- [Wishlist]
- [Coupons]
- [Multiple payment gateways]
- [Shipment tracking]
- [Multi-vendor support]

without requiring major architectural changes.

## 2.4. User Roles and Permissions

The system contains tho user roles.

| Function             | Customer | Administrator |
| -------------------- | :------: | :-----------: |
| Register Account     |     ✅    |       ❌       |
| Login                |     ✅    |       ✅       |
| Browse Products      |     ✅    |       ✅       |
| Search Products      |     ✅    |       ✅       |
| View Product Details |     ✅    |       ✅       |
| Add to Cart          |     ✅    |       ❌       |
| Manage Cart          |     ✅    |       ❌       |
| Checkout             |     ✅    |       ❌       |
| Make Payment         |     ✅    |       ❌       |
| View Own Orders      |     ✅    |       ❌       |
| Manage Products      |     ❌    |       ✅       |
| Manage Orders        |     ❌    |       ✅       |
| Manage Users         |     ❌    |       ✅       |
| View Dashboard       |     ❌    |       ✅       |

## 3. System Analysis and Design

## 3.1. System Architecture

The Simple E-commerce Store follows a three-tier architecture consisting of the Presentation Layer, Application Layer, and Database Layer.

### Presentation Layer (Frontend)

Built using React, this layer provides the user interface for customers and administrators. It allows users to browse products, manage shopping carts, place orders, and manage products through the admin dashboard.

### Application Layer (Backend)

Built using Express.js, this layer processes user requests, applies business logic, performs authentication, and communicates with the database through REST APIs.

### Database Layer

MongoDB Atlas stores all application data, including users, products, shopping carts, orders, and payments.

## 3.2 System Modules

The system is divided into six functional modules.

### 1. Authentication Module

This module manages user registration, login, logout, and profile management.

- [**Functions:**  Register, Login, Logout, Update Profile]

### 2. Product Module

This module manages products available in the store.
- [**Customer Functions:** View products, Search Products, View Product Details]

- [**Adminstrator Functions:** Add Product, Edit Product, Delete Product]

### 3. Shopping Cart Module

This module allows customers to manage selected products before purchasing.

- [**Functions:** Add to Cart, Update Quantity, Remove Product, Clear Cart, View Cart]

### 4. Order Module

- **Customer Functions:** Checkout, Place Order, View Orders, View Order Details
- **Adminstrator Functions:** View all orders, Update Order status

### 5. Payment Module

This module records payment information after checkout.

- **Functions:** Make Payment, Save Payment Record, Update Payment Status

Note: Payment will be simulated for this internship project rather than integrated with a live payment gateway.

### 6. Admin Module
This module provides administrative control over the system.
- **Functions:** Manage Products, Manage Orders, View Users, View Dashboard Summary

## 3.3 System WorkFlow

### Customer Workflow

- [Register or Login]
- [Browse Products]
- [View Product Details]
- [Add Products to Cart]
- [Review Shopping Cart]
- [Checkout]
- [Make Payment]
- [Place Order]
- [View Order History]

### Adminstrator

- [Login]
- [Access Dashboard]
- [Manage Products]
- [View Orders]
- [Update Order Status]
- [View Users]

## 3.4 System Features Summary

| Module         | Main Features                      |
| -------------- | ---------------------------------- |
| Authentication | Register, Login, Logout            |
| Products       | Browse, Search, Product Details    |
| Shopping Cart  | Add, Update, Remove Items          |
| Orders         | Checkout, Place Order, View Orders |
| Payments       | Record Payment                     |
| Administration | Manage Products, Orders, Users     |


## 3.5 Assumptions and Limitations

**Assumptions***

Users have internet access.
Users register before placing orders.
Products are managed by the administrator.
Payment confirmation is simulated.
**Limitations**
No online payment gateway integration.
No product reviews or ratings.
No wishlist feature.
No shipment tracking.
Single administrator account.

I skipped about Use Case Diagram

## 4. Database Design 

## 4.1 Introduction

The Simple E-commerce Store uses MongoDB Atlas as its database. The database stores information about users, products, shopping carts, orders, and payments. Each collection is designed to support the core functionalities of the system while keeping the data structure simple and scalable.

## 4.2 Database collections

The system consists of five main collections.

| Collection | Description                                            |
| ---------- | ------------------------------------------------------ |
| Users      | Stores customer and administrator information.         |
| Products   | Stores product details.                                |
| Cart       | Stores products selected by customers before checkout. |
| Orders     | Stores customer orders.                                |
| Payments   | Stores payment information.                            |


## 4.3 Entity Relationship Overview

User
 │
 ├───────────────┐
 │               │
 │               │
Cart          Orders
 │               │
 │               │
Products     Payments

Relationship Summary

- [One User can have one Cart.]
- [One Cart contains many Products.]
- [One User can place many Orders.]
- [One Order contains many Products.]
- [One Order has one Payment.]

## 4.4 Collection Structure

Users Collection

| Field     | Type     | Description        |
| --------- | -------- | ------------------ |
| _id       | ObjectId | Unique user ID     |
| fullName  | String   | Customer name      |
| email     | String   | Email address      |
| password  | String   | Encrypted password |
| role      | String   | customer / admin   |
| createdAt | Date     | Registration date  |


Products Collection

| Field       | Type     | Description         |
| ----------- | -------- | ------------------- |
| _id         | ObjectId | Product ID          |
| name        | String   | Product name        |
| description | String   | Product description |
| category    | String   | Product category    |
| price       | Number   | Product price       |
| stock       | Number   | Available quantity  |
| image       | String   | Product image URL   |
| createdAt   | Date     | Date added          |


Cart Collection

| Field      | Type     | Description               |
| ---------- | -------- | ------------------------- |
| _id        | ObjectId | Cart ID                   |
| userId     | ObjectId | Customer ID               |
| items      | Array    | List of selected products |
| totalPrice | Number   | Total cart price          |


Cart Item

| Field     | Type     |
| --------- | -------- |
| productId | ObjectId |
| quantity  | Number   |
| price     | Number   |

Orders Collection

| Field           | Type     | Description                    |
| --------------- | -------- | ------------------------------ |
| _id             | ObjectId | Order ID                       |
| userId          | ObjectId | Customer ID                    |
| items           | Array    | Purchased products             |
| totalAmount     | Number   | Total order amount             |
| shippingAddress | String   | Delivery address               |
| orderStatus     | String   | Pending, Processing, Delivered |
| paymentStatus   | String   | Paid / Unpaid                  |
| createdAt       | Date     | Order date                     |

Payment Collection

| Field         | Type     | Description                         |
| ------------- | -------- | ----------------------------------- |
| _id           | ObjectId | Payment ID                          |
| orderId       | ObjectId | Related order                       |
| amount        | Number   | Paid amount                         |
| paymentMethod | String   | Example: Card, Telebirr (simulated) |
| paymentStatus | String   | Success / Failed                    |
| paymentDate   | Date     | Payment date                        |

## 6. API Design (REST Endpoints)

## 6.1. Introduction 

The backend exposes RESTful APIs that allow the React frontend to communicate with the Express.js server. These APIs handle authentication, product management, shopping cart operations, orders, and payments

Authentication APIs
| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |
| GET    | `/api/auth/profile`  | Get logged-in user  |
| PUT    | `/api/auth/profile`  | Update profile      |

Product APIs
| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | `/api/products`     | Get all products    |
| GET    | `/api/products/:id` | Get product details |
| POST   | `/api/products`     | Add product (Admin) |
| PUT    | `/api/products/:id` | Update product      |
| DELETE | `/api/products/:id` | Delete product      |

Cart APIs
| Method | Endpoint               | Description        |
| ------ | ---------------------- | ------------------ |
| GET    | `/api/cart`            | View shopping cart |
| POST   | `/api/cart`            | Add item to cart   |
| PUT    | `/api/cart/:productId` | Update quantity    |
| DELETE | `/api/cart/:productId` | Remove item        |
| DELETE | `/api/cart`            | Clear cart         |

Ordetr APIs
| Method | Endpoint                 | Description                 |
| ------ | ------------------------ | --------------------------- |
| POST   | `/api/orders`            | Place an order              |
| GET    | `/api/orders`            | Get customer orders         |
| GET    | `/api/orders/:id`        | View order details          |
| PUT    | `/api/orders/:id/status` | Update order status (Admin) |

Payment APIs
| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| POST   | `/api/payments`     | Process payment      |
| GET    | `/api/payments/:id` | View payment details |


## 7. Project Folder Structure

## 7.1 Frontend Structure (React)

client/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── context/
│   ├── hooks/
│   ├── services/
│   ├── routes/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js

Purpose of Each folders

| Folder     | Purpose                                       |
| ---------- | --------------------------------------------- |
| assets     | Images and static files                       |
| components | Reusable UI components                        |
| pages      | Application pages                             |
| layouts    | Shared layouts (Navbar, Footer, Admin Layout) |
| context    | React Context API                             |
| hooks      | Custom React hooks                            |
| services   | API requests using Axios/Fetch                |
| routes     | React Router configuration                    |
| utils      | Helper functions                              |


## 7.2. Backend Structure (Express.js)

server/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── README.md

**Purpose of each Folder**

| Folder      | Purpose                               |
| ----------- | ------------------------------------- |
| config      | Database connection and configuration |
| controllers | Handle request and response logic     |
| middleware  | Authentication and error handling     |
| models      | Mongoose schemas                      |
| routes      | API route definitions                 |
| services    | Business logic                        |
| utils       | Utility/helper functions              |

