# MERN Stack Authorization System with NextAuth

This project demonstrates a complete authorization system built using the MERN stack integrated with NextAuth for handling authentication. Users can register, log in, and access protected routes based on their roles and permissions.

## Table of Contents
- [MERN Stack Authorization System with NextAuth](#mern-stack-authorization-system-with-nextauth)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)
  - [Project Structure](#project-structure)
  - [Database Configuration](#database-configuration)
  - [API Routes](#api-routes)
    - [Authentication Routes](#authentication-routes)
  - [Authentication with NextAuth](#authentication-with-nextauth)
  - [Authorization Middleware](#authorization-middleware)
  - [Frontend Integration](#frontend-integration)
  - [Conclusion](#conclusion)

## Introduction

This project demonstrates a complete authorization system built using the MERN stack integrated with NextAuth for handling authentication. Users can register, log in, and access protected routes based on their roles and permissions.

## Technologies Used

- **MongoDB**: NoSQL database for storing user data and sessions.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side code.
- **NextAuth**: Authentication library for Next.js applications.

## Setup and Installation

### Prerequisites

- Node.js and npm installed
- MongoDB instance running

### Installation Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/nabinkhair42/auth-system.git
    cd authorization-system

    ```

2. **Install server dependencies:**
    ```sh
    npm install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the root directory and add your MongoDB connection string, JWT secret, and other necessary environment variables.

    ```env
    MONGODB_URI=mongodb://localhost:27017/yourdbname
    JWT_SECRET=yourjwtsecret
    NEXTAUTH_SECRET=yourNextAuthSecret
    NEXTAUTH_URL=http://localhost:3000
    ```

4. **Start the development server:**
    ```sh
    npm run dev
    ```

## Project Structure

```Auth.
│   .env
│   .eslintrc.json
│   .gitignore
│   components.json
│   next-env.d.ts
│   next.config.mjs
│   package-lock.json
│   package.json
│   postcss.config.mjs
│   README.md
│   tailwind.config.ts
│   tsconfig.json
│
├───emails
│       VerificationEmail.tsx
│
├───public
│       next.svg
│       vercel.svg
│
└───src
    │   middleware.ts
    │
    ├───app
    │   │   favicon.ico
    │   │   globals.css
    │   │   layout.tsx
    │   │   page.tsx
    │   │
    │   ├───(app)
    │   │   └───dashboard
    │   │           page.tsx
    │   │
    │   ├───(auth)
    │   │   ├───sign-in
    │   │   │       page.tsx
    │   │   │
    │   │   ├───sign-up
    │   │   │       page.tsx
    │   │   │
    │   │   └───verify
    │   │       └───[username]
    │   │               page.tsx
    │   │
    │   └───api
    │       ├───auth
    │       │   └───[...nextauth]
    │       │           options.ts
    │       │           route.ts
    │       │
    │       ├───check-username-unique
    │       │       route.ts
    │       │
    │       ├───sign-up
    │       │       route.ts
    │       │
    │       └───verify-code
    │               route.ts
    │
    ├───components
    │   └───ui
    │           button.tsx
    │           form.tsx
    │           input.tsx
    │           label.tsx
    │           toast.tsx
    │           toaster.tsx
    │           use-toast.ts
    │
    ├───context
    │       AuthProvider.tsx
    │
    ├───helpers
    │       sendVerificationEmail.ts
    │
    ├───lib
    │       dbConnect.ts
    │       resend.ts
    │       utils.ts
    │
    ├───model
    │       User.ts
    │
    ├───schemas
    │       acceptMessageSchema.ts
    │       messageSchema.ts
    │       signInSchema.ts
    │       signUpSchema.ts
    │       verifySchema.ts
    │
    └───types
            ApiResponse.ts
            next-auth.d.ts
```
## Database Configuration

- MongoDB is used to store user information and sessions.
- A `User` model is defined in `model/User.ts` with fields for username, password, role, etc.

## API Routes

### Authentication Routes

- **Register User**: `POST /api/sign-up`
- **Login User**: `POST /api/auth/[...nextauth]`
- **Verify Code**: `POST /api/verify-code`
- **Check Username**: `GET /api/check-username-unique`
- **Protected Route**: `GET /app/(app)/dashboard`

## Authentication with NextAuth

NextAuth handles the authentication flow, including OAuth providers, session management, and token issuance. The configuration is done in `app/api/auth/[...nextauth]/options.ts`.

## Authorization Middleware

Middleware is used to protect routes based on user roles. Example middleware can be found in `middleware.ts`.

## Frontend Integration

Frontend components and pages for login, sign-up, and dashboard are implemented using React and Next.js. The UI components are located in the `components/ui` directory.

## Conclusion

This document provides a high-level overview of the authorization system built using the MERN stack and NextAuth. For detailed implementation, refer to the source code and comments within the project files.
