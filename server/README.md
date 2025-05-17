# Artisan Leather - Server

This is the backend API for the Artisan Leather e-commerce website, built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Product management
- RESTful API design
- MongoDB integration
- Error handling

## Technology Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Create a `.env` file in the server directory based on `.env.example`:

```
PORT=5000
MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/artisan_leather
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The API will be available at http://localhost:5000

## API Endpoints

### Authentication

- `POST /api/auth/signup`: Register a new user
- `POST /api/auth/signin`: Login a user
- `GET /api/auth/me`: Get current user (protected)

### Products

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a single product
- `POST /api/products`: Create a new product (admin only)
- `PUT /api/products/:id`: Update a product (admin only)
- `DELETE /api/products/:id`: Delete a product (admin only)

## Deployment

### Deploying to Railway

1. Push your code to a GitHub repository
2. Import the project in Railway
3. Set the following environment variables:
   - PORT=5000
   - MONGODB_URI=(your MongoDB connection string)
   - JWT_SECRET=(your JWT secret)
   - NODE_ENV=production
4. Railway will automatically detect that this is a Node.js application and deploy it

## Project Structure

- `/src`: Source code
  - `/controllers`: Route handlers
  - `/middleware`: Custom middleware
  - `/models`: Mongoose models
  - `/routes`: API routes
  - `/utils`: Utility functions
  - `index.js`: Application entry point

## Available Scripts

- `npm run dev`: Start development server with nodemon
- `npm start`: Start production server