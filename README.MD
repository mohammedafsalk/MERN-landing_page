# Landing Page - MERN

This project is a simple MERN App which consist of a signup, login and a landing page.

## Tech Stack

- **Server Side:**

  - Node.js
  - Express
  - MongoDB
  - JWT

- **Client Side:**
  - React
  - Vite
  - Tailwind css

## Features

- User authentication and authorization using JWT.
- Dynamic data of user in client side which is fetched from server.
- Server built with Node.js and Express.
- Client built with React and Vite for a fast development experience.

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/mohammedafsalk/MERN-landing_page.git
   ```
2. **Install Dependencies for server:**
   ```bash
     cd server
     npm install
   ```
2. **Add ENV for server:**
   ```bash
     create .env

     MONGO_URL=<your url>
     JWT_SECRET=<your secret>
   ```
3. **Install Dependencies for client:**
   ```bash
     cd client
     npm install
   ```
4. **Starting server:**
   ```bash
     cd server
     npm start
   ```
5. **Starting client:**
   ```bash
     cd client
     npm run dev
   ```
