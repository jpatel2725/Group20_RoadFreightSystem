Road Freight System
Project Overview
This project focuses on creating a management system for a Road Freight Transportation company. It is designed to handle trucks, employees, shipments, and trips efficiently, tracking essential details for streamlined operations. The system includes a complete database, CRUD functionalities, testing, and containerization.

Features
Truck Management: Maintain details like brand, load capacity, year of manufacture, and repair history.
Employee Management: Manage employee information such as name, surname, seniority, and roles (drivers or mechanics).
Shipment Tracking: Record shipment data including customer information, weights, values, origin, and destination.
Trip Records: Log truck trips, including routes, participating drivers, and transferred shipments.
Repair Logs: Track repair work, including responsible mechanics and estimated repair durations.
Technical Requirements
Programming Language: TypeScript
Database: Fully relational, complete with required tables and columns.
ORM (Object-Relational Mapping): Simplify database interactions.
Containerization: Designed to operate in a containerized setup.
Testing: Comprehensive unit and integration tests to ensure CRUD operations function correctly.
Implementation Details
Database
Tables:

Trucks
Employees (Drivers and Mechanics)
Shipments
Truck Trips
Repairs
Attributes:

Trucks: Includes brand, load, capacity, year, and total repairs.
Employees: Tracks name, surname, seniority, and role (driver or mechanic).
Drivers: Details driving license category.
Mechanics: Records specialized vehicle brands.
Shipments: Stores weight, value, customer information (name, address, and two phone numbers), origin, and destination.
Truck Trips: Captures route (start and end points), drivers involved, and shipments carried.
Repairs: Logs the mechanic in charge and estimated repair duration (in days).
Core Features
CRUD Operations: Support for creating, reading, updating, and deleting records across all tables.
Unit Testing: Ensures individual CRUD functionalities are thoroughly tested.
Integration Testing: Validates the system's end-to-end performance.
Database Seeding: A migration script prepopulates each table with at least three rows of data.
Additional Requirements
Entity Relationship Diagram (ERD): A diagrammatic representation showing how the database tables are interconnected.
Containerization: Ensures compatibility with Docker for seamless deployment.
Setup and Usage
Prerequisites
Node.js & NPM:
Verify installation with:


node -v  
npm -v  
Docker:
Install Docker and Docker Compose.

Installation
Clone the repository:

git clone <repository_url>  
cd road-freight-system  
Install dependencies:


npm install  
Run database migrations:


npm run migrate  
Development
Start the development server:


npm start  
Run unit tests:


npm run test:unit  

Run integration tests:


npm run test:integration  
Docker Usage
Build the Docker image:


docker-compose build  
Start the container:


docker-compose up -d  
Build and start the container in one step:


docker-compose up -d --build  
Testing
Run Unit Tests:


npm run test:unit  
Run Integration Tests:


npm run test:integration 