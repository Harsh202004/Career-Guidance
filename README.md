Career Guidance Platform 🚀
A comprehensive MERN stack application designed to assist users in making informed career decisions through personalized guidance and resource exploration.

📖 Table of Contents
About the Project

Key Features

Technologies Used

Getting Started

Prerequisites

Installation & Setup

Usage

Project Structure

Contact

🎯 About the Project
This Career Guidance Platform is a full-stack web application built to address the common challenge of choosing a suitable career path. The application provides a seamless, interactive experience for users to explore various career options, understand the requirements for different fields, and connect with relevant resources. The backend is powered by Node.js and Express.js, handling API requests and business logic, while the frontend is a dynamic single-page application built with React.

✨ Key Features
User Authentication: Secure JWT-based authentication for user registration and login.

Career Exploration: Browse a comprehensive list of career paths and fields of interest.

Interactive Frontend: A responsive and user-friendly interface built with React for a smooth user experience.

RESTful API: A well-structured backend API to manage data for careers, users, and resources.

Scalable Database: Utilizes MongoDB for flexible and scalable data storage.

💻 Technologies Used
This project is built using the MERN stack and other modern web technologies.

Frontend: React, React Router

Backend: Node.js, Express.js

Database: MongoDB (with Mongoose)

Authentication: JSON Web Tokens (JWT), bcryptjs

Development Tools: Concurrently (for running front and back-end servers simultaneously)

🚀 Getting Started
Follow these instructions to get a local copy of the project up and running.

Prerequisites
Ensure you have the following installed on your local machine:

Node.js (which includes npm)

MongoDB (or a MongoDB Atlas account)

Git

Installation & Setup
Clone the repository:

```bash

git clone https://github.com/Harsh202004/Career-Guidance.git
Navigate to the project directory:
```
```Bash

cd Career-Guidance
Install backend dependencies:
Navigate to the server directory and install the required npm packages.
```
```Bash

cd server
npm install
Install frontend dependencies:
Navigate to the client directory and install its dependencies.
```
```Bash

cd ../client
npm install
Configure Environment Variables:
In the server directory, create a .env file and add the following variables. Replace the placeholder values with your actual configuration.

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
🏃‍♀️ Usage
You can run both the frontend and backend servers concurrently from the root directory of the project using the pre-configured npm script.

Navigate to the root Career-Guidance directory.

Run the application:
This command will start both the backend server (on http://localhost:5000) and the frontend React development server (on http://localhost:3000).
```
```Bash

npm run dev
Open your browser and go to http://localhost:3000 to see the application.

📂 Project Structure
The project is organized into two main folders: client for the frontend and server for the backend.

/Career-Guidance
|-- /client              # React Frontend
|   |-- /public
|   |-- /src
|   |-- package.json
|-- /server              # Node.js & Express Backend
|   |-- /controllers
|   |-- /middleware
|   |-- /models
|   |-- /routes
|   |-- .env             # (You need to create this)
|   |-- server.js
|-- .gitignore
|-- package.json         # (For running both client and server)
|-- README.md
