# ALX_Capstone_Project

Personal Finance Tracker
Project Overview
This is a personal finance tracker application. It helps users track their income and expenses, categorize their spending, and set budgets. The goal of this project is to build a full-stack application from the ground up.

Features
User Management
Secure user registration and login.

Token-based authentication.

Passwords are hashed for security.

Financial Data Management
Full CRUD (Create, Read, Update, Delete) functionality for transactions and categories.

Each transaction is linked to a category.

Users can add, view, edit, and delete their financial records.

Budgeting and Visualization
Backend logic for setting and managing budgets.

Visual dashboards to display financial data.

A pie chart shows spending by category.

A line chart shows spending over time.

Displays budget progress.

Technical Stack
This project is built as a full-stack application.

Backend (API)
Technology: Python with Django

Database: SQLite

API Type: RESTful API

Key Endpoints:

POST /api/register

POST /api/login

GET /api/dashboard

GET /api/transactions

Frontend
Technology: HTML,

Styling: Plain CSS

Charting Library: Chart.js

Installation


Data Models
User

id: Unique identifier

username: Unique username

email: User's email address

password_hash: Hashed password

date_joined: Timestamp

Category

id: Unique identifier

name: e.g. "Groceries", "Salary"

type: "income" or "expense"

user: Foreign key linking to the User model

Transaction

id: Unique identifier

amount: The monetary value

description: A short description of the transaction

type: "income" or "expense"

date: The date of the transaction

category: Foreign key linking to the Category model

user: Foreign key linking to the User model

Budget

id: Unique identifier

amount: The budget amount

category: Foreign key linking to the Category model

user: Foreign key linking to the User model

API Endpoints
Authentication
POST /api/register

Description: Creates a new user account.

Request Body: username, email, password.

POST /api/login

Description: Authenticates a user.

Request Body: username, password.

Response: Returns an authentication token.

Transactions
GET /api/transactions

Description: Retrieves a list of all transactions for the authenticated user.

Query Parameters: category, start_date, end_date.

POST /api/transactions

Description: Creates a new transaction.

Request Body: amount, description, type, date, category_id.

GET /api/transactions/{id}

Description: Retrieves a specific transaction by its ID.

PUT /api/transactions/{id}

Description: Updates an existing transaction.

Request Body: amount, description, type, date, category_id.

DELETE /api/transactions/{id}

Description: Deletes a specific transaction.

Categories
GET /api/categories

Description: Lists all categories for the authenticated user.

POST /api/categories

Description: Creates a new category.

Request Body: name, type.

Budgets
GET /api/budgets

Description: Retrieves a list of all budgets for the authenticated user.

POST /api/budgets

Description: Creates a new budget.

Request Body: amount, category_id.

PUT /api/budgets/{id}

Description: Updates an existing budget.

Request Body: amount.

Dashboard Summary
GET /api/dashboard

Description: Fetches summary data for the dashboard.

Response: Returns total income, total expenses, a list of latest transactions, and budget progress.
