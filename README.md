
# Liftify Back End

Liftify is a wellness application designed to simplify the process of tracking daily workout routines, exercises, and training progress. Whether you’re a beginner or an advanced fitness enthusiast, Liftify offers an intuitive interface to record and monitor your fitness journey with ease.

## 🚀 Overview

This repository contains the backend service for **Liftify**, built with Node.js and Express. It provides a RESTful API for managing application data, handling authentication, and powering the frontend client.

## ✨ Features
- RESTful API built with Express  
- Authentication & authorization  
- CRUD operations for core resources  
- Environment-based configuration  
- JSON Web token configuration and handling 
- Modular routing and controller structure  

## 🛠 Tech Stack
- Node.js  
- Express.js  
- Database (MongoDB)  
- JWT authentication
- bcrypt, jsonwebtoken, Mongoose

## 📁 Project Structure
```
/controllers
/models
middleware
server.js
.env.example
package.json
```

## ⚙️ Setup & Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/sreyesg/liftify-back-end.git
   ```
2. Install dependencies  
   ```bash
   npm install
   ```
3. Create an `.env` file based on `.env.example`  
4. Start the development server  
   ```bash
   npm run dev
   ```

## 📡 API Endpoints 

| HTTP Verb | Endpoint | Description |
|---|---|---|
| **POST** | `/users/signup` | Register a new user account with username, password, and email. |
| **POST** | `/users/signin` | Authenticate user and return JWT access token|
| **GET** | `/routines` | List workouts for the authenticated user|
| **POST** | `/routines` | Create a new workout |
| **PUT** | `/routines/:routineId` | Update workout |
| **DELETE** | `/routines/:routineId` | Delete a specific workout. |

## Front End Client
[Liftify front-end GitHub repository](https://github.com/sreyesg/liftify-front-end.git)
