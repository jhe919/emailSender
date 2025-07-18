# Email Sender System

This project is a full-stack web application that allows users to enter their name and email, which is then stored in a MySQL database and also triggers a confirmation email to be sent to them. The frontend is built with Angular, the backend is built using Node.js with Express and MySQL. Nodemailer is used to send emails, and Mailtrap is used as a development SMTP sandbox for email testing.

---

## Features

- Angular 17 form with name and email fields.
- RESTful API built with Express.
- Data persistence using MySQL.
- Confirmation email sent to submitted email via Mailtrap.
- All user submissions saved into a MySQL table (`users`).

---

## Prerequisites

- Node.js (v18 or higher)
- npm
- MySQL server installed and running locally
- Mailtrap account for dev email testing
- Angular CLI (v17+): `npm install -g @angular/cli`
- install required packages with this command: `npm install express cors mysql nodemailer body-parser`


---

## Step-by-step Setup

### 1. Clone the repository

### 2. MySQL Database Setup

1. Open MySQL terminal
2. Run the following SQL lines:

CREATE DATABASE email_db;
USE email_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255)
);

### 3. Backend Setup

1.  update the MySQL connection config to match your system in db.js:

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // your root password
  database: 'email_db'
});

### 4. Email Configuration
- I used mailtrap to test email sending.
Go to your Inbox → SMTP Settings → Integration → Nodemailer

Copy the host, port, user, and pass fields.

In backend/routes/email.js, replace the placeholder with your Mailtrap credentials:

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'your-mailtrap-username',
    pass: 'your-mailtrap-password'
  }
});

### 5. Backend Setup (continued)
from the backend directory, run the following command:
cd backend
npm install
node server.js
This starts the backend server on http://localhost:3000
### 6. Frontend Setup
From the email-system/frontend directory run these commands:
cd ../frontend
npm install
ng serve

This will run the Angular frontend on http://localhost:4200

When you open the page, you’ll see a form asking for a name and email. On submission, it sends a POST request to the backend, stores the data in MySQL, and sends a confirmation email using Mailtrap.

### 7. Testing
Go to http://localhost:4200 and fill out the form.
Log into Mailtrap to confirm the email was sent.

Log into MySQL and run:

USE email_db;
SELECT * FROM users;
You should see the new record.

