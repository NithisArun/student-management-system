# Student Course Management System

A full-stack application for managing students, courses, and enrollments using **Spring Boot** (backend) and **React** (frontend).

---

## Features
- **Student Management**: Add, view, and manage student records.
- **Course Management**: Create and manage courses.
- **Enrollment Management**: Enroll students into courses.
- **Dashboard**: View statistics (total students, courses, enrollments).

---

## Technologies Used
- **Backend**: Java Spring Boot, MongoDB
- **Frontend**: React.js, Axios, Bootstrap
- **Database**: MongoDB
- **Tools**: Maven, Git

---

## Prerequisites
- Java 17+
- Node.js 16+
- MongoDB 6.0+
- Maven 3.8+
- Git

---

## Installation

### 1. Clone the Repository
git clone https://github.com/NithisArun/student-management-system.git
cd student-management-system 

## Backend Setup
bash
cd student-management-backend-1

# Build the project
mvn clean install

# Start the Spring Boot application
mvn spring-boot:run

## Frontend Setup
bash
cd student-management-frontend

# Install dependencies
npm install

# Start the React app
npm start

-- Access the Application
Backend API Docs: http://localhost:8080/swagger-ui.html

Frontend: http://localhost:3000

MongoDB: Ensure MongoDB is running locally on mongodb://localhost:27017.
