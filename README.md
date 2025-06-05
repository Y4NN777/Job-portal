# Job Portal Application

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for job listings and applications management.

## Project Overview

This project is a job portal platform where employers can post job opportunities and job seekers can apply for positions. The backend is built with Node.js and Express, while the frontend will be implemented using React with TypeScript.

### Current Implementation Status
- ✅ Backend API (Complete)
- 🚧 Frontend (Planned - React + TypeScript)

## Backend Features

### User Management
- User registration and authentication
- JWT-based authorization
- Role-based access control (Job Seekers & Employers)

### Job Management
- Create, read, update, and delete job listings
- Advanced job search and filtering
- Job categories and tags

### Applications
- Submit job applications
- Track application status
- Application management for employers

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- JWT for authentication
- Express middleware for error handling

### Planned Frontend
- React
- TypeScript
- Modern UI components
- State management (to be determined)

## Project Structure

```
job-portal-api/
├── config/
│   └── database.js
├── controllers/
│   ├── applicationController.js
│   ├── jobController.js
│   └── userController.js
├── middlewares/
│   ├── auth.js
│   └── errorHandler.js
├── models/
│   ├── Application.js
│   ├── Job.js
│   └── User.js
├── routes/
│   ├── applicationRoutes.js
│   ├── jobRoutes.js
│   └── userRoutes.js
└── utils/
    └── generateToken.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd job-portal-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Users
- POST /api/users/register - Register a new user
- POST /api/users/login - User login
- GET /api/users/profile - Get user profile

### Jobs
- GET /api/jobs - Get all jobs
- POST /api/jobs - Create a new job
- GET /api/jobs/:id - Get job by ID
- PUT /api/jobs/:id - Update job
- DELETE /api/jobs/:id - Delete job

### Applications
- POST /api/applications - Submit application (Requires: candidate)
- GET /api/applications/my - Get user applications (Requires: candidate)
- GET /api/applications/job/:jobId - Get applications for job (Requires: recruiter/admin)
- GET /api/applications/:id - Get application by ID (Requires: recruiter/admin)
- PUT /api/applications/:id - Update application status (Requires: recruiter/admin)

## Upcoming Features (Frontend)
- Modern, responsive UI built with React and TypeScript
- User dashboard for managing applications/job postings
- Real-time notifications
- Advanced search and filtering interface
- Interactive application process

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

