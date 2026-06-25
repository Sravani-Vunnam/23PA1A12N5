# Notification App – Stage 1

## Overview

This project is a React-based notification application developed as part of the Frontend Evaluation. Stage 1 focuses on fetching notifications from the API, prioritizing them, and displaying them in a user-friendly interface while integrating the required reusable logging middleware.

---

## Features Completed

* Reusable logging middleware integration
* Fetch notifications from the Evaluation API
* Display notifications in a clean interface
* Filter notifications by:

  * All
  * Placement
  * Result
  * Event
* Priority-based notification sorting:

  * Placement
  * Result
  * Event
* Sort notifications by latest timestamp within the same priority
* Pagination support
* Material UI based responsive interface
* API request logging

---

## Tech Stack

* React (Vite)
* JavaScript
* Material UI
* Fetch API
* Reusable Logging Middleware

---

## Project Structure

```
notification-app-fe/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js

logging-middleware/
│
├── logger.js
├── index.js
└── package.json
```

---

## Installation

```bash
npm install
```

---

## Run the Application

```bash
npm run dev
```

---

## Logging Middleware

A reusable logging middleware package is included separately and is used throughout the application to log API activities as required by the evaluation.

---

## Stage 1 Status

✅ Reusable Logging Middleware

✅ Notification API Integration

✅ Notification Priority Handling

✅ Notification Filtering

✅ Pagination

✅ Notification Display

---

## Author

**Vunnam Sravani**

Roll No: **23PA1A12N5**
