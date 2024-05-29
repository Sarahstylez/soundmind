# SoundMind App

## Overview

**SoundMind** is _a mobile app that helps users track mood and ADHD-related symptoms_. It allows users to create, read, update, and delete daily entries, providing insights through data visualization and personalized analytics. SoundMind supports both those seeking a diagnosis and those with an existing one, helping all users better understand and manage their condition.

---

### Problem

> SoundMind _helps users recognize behavior patterns, prompting undiagnosed individuals to seek professional evaluation and aiding diagnosed users in better managing their condition_. This fosters self-awareness, reduces stigma, and promotes a positive approach to managing ADHD symptoms for improved well-being. SoundMind aims to support late-diagnosed adults with ADHD in becoming more productive in communal workspaces, helping them manage their symptoms in a way that maintains the normal functioning, harmony, and comfort of shared environments.

---

### User Profile

Primary Users:

- Undiagnosed adults suspecting ADHD
- Diagnosed adults with ADHD

Secondary Users:

- Healthcare professionals
- Family members/caregivers

---

### Features

User Authentication:

- Simple registration and login system.

Mood and Symptom Tracking:

- Basic functionality for logging daily mood and ADHD-related symptoms.
- Predefined symptom checklists.

Data Visualization:

- Simple charts and graphs to visualize mood and symptom trends.

Data Export:

- Option to export data in a PDF format for sharing with healthcare professionals.

---

## Implementation

### Tech Stack

- Figma (UI/Component Builds)
- Sass
- React
- TypeScript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

---

### APIs

- Google Drive
- Image-Charts
- Traitify

---

### Sitemap

- Home Page

  - Welcome message
  - Features Overview
  - CTA sign-up/login

- User Authentication

  - Registration (New Users)
  - Login (Existing Users)

- Dashboard

  - Overview of mood/symptom trends
  - Quick access to logging and visualization

- Mood/Symptom Tracking

  - Daily log
  - Symptom Checklists

- Data Visualization
  - Trends/Reports
- User Profile
  - Settings
  - Notifications

---

### Mockups

(insert here)

---

### Data

Users Table

- id: Unique identifier for each user.
- username: The user's username.
- email: The user's email address, must be unique.
- password_hash: Hashed password for secure authentication.
- created_at: Timestamp of when the user was created.
- updated_at: Timestamp of when the user information was last updated.

| Users         |                  |
| ------------- | ---------------- |
| id            | UUID (PK)        |
| username      | VARCHAR          |
| email         | VARCHAR (Unique) |
| password_hash | VARCHAR          |
| created_at    | TIMESTAMP        |
| updated_at    | TIMESTAMP        |

---

Entries Table

- id: Unique identifier for each entry.
- user_id: Identifier linking the entry to a specific user.
- date: The date of the entry.
- mood: User's mood for the day.
- created_at: Timestamp of when the entry was created.
- updated_at: Timestamp of when the entry was last updated.

| Entries    |           |
| ---------- | --------- |
| id         | UUID (PK) |
| user_id    | UUID (FK) |
| date       | DATE      |
| mood       | VARCHAR   |
| created_at | TIMESTAMP |
| updated_at | TIMESTAMP |

---

Symptoms Table

- id: Unique identifier for each symptom.
- name: Name of the symptom.
- description: Optional description of the symptom.
- Entry_Symptoms Table
- entry_id: Identifier linking the entry to a specific symptom.
- symptom_id: Identifier linking the symptom to a specific entry.

| Symptoms    |                 |
| ----------- | --------------- |
| id          | UUID (PK)       |
| name        | VARCHAR         |
| description | TEXT (Optional) |

---

| Entry_Symptoms |           |
| -------------- | --------- |
| entry_id       | UUID (FK) |
| symptom_id     | UUID (FK) |

---

### Endpoints

User Authentication:

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/reset-password (Optional)

Mood and Symptom Tracking:

- POST /api/entries
- GET /api/entries
- PUT /api/entries/:id
- DELETE /api/entries/:id

Predefined Symptom Checklists:

- GET /api/symptoms

Data Visualization:

- GET /api/visualization/trends

Data Export:

- POST /api/export

---

### Auth

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

---

## Roadmap

1. Initialize Repository
   1. Set up Git and initialize project directory.
   2. Set Up Development Environment
   3. Set up front-end and back-end directories.
   4. Configure package managers and install dependencies.
   5. Initialize TypeScript projects if applicable.
   6. Project Configuration
   7. Configure Prettier.
   8. Set up environment variables.

---

2. Front-End Development

- React Application
- Create a React app.
- Install necessary libraries: react, react-router-dom, axios, redux, material-ui.

---

3. User Authentication

- Registration: _Create form, validate, and implement API calls._
- Login: _Create form, validate, and implement API calls._
- State Management: _Use Redux/Context API and implement protected routes._

---

4. Mood and Symptom Tracking

- Daily Log: _Create form and implement CRUD API calls._
- Symptom Checklists: _Create component and integrate logging._

---

5. Data Visualization

- Integrate charts from Image-Charts and create visualization components.

---

6. Data Export

- Implement export button and use jsPDF for PDF generation.

---

7. Back-End Development

- Express Server
- Create an Express.js application.
- Install necessary libraries: express, knex, bcrypt, jsonwebtoken, cors.

---

8. Database Configuration

- Set up MySQL database and create schemas.
- Configure Knex, create migration and seed files.

---

9. User Authentication

- Registration: _Implement endpoint and hash passwords with bcrypt._
- Login: _Implement endpoint and generate JWT tokens._
- Middleware: _Create JWT token protection middleware._

---

10. Mood and Symptom Tracking

- Implement CRUD endpoints for mood and symptom entries.
- Create endpoint to fetch symptom checklists.

---

11. Data Visualization

- Implement data retrieval and aggregation endpoints.

---

12. Data Export

- Implement endpoint for data export and format data for PDF generation.

---

13. Integration and Testing

- Connect front-end to back-end API endpoints and ensure proper data flow.

---

## Nice-to-haves

Educational Content:

- Basic tips on ADHD and symptom management.

Reminders:

- Basic notifications to remind users to log their mood and symptoms.
