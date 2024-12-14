"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Employee_1 = require("../entities/Employee");
const Customer_1 = require("../entities/Customer");
const Shipment_1 = require("../entities/Shipment");
const Trip_1 = require("../entities/Trip");
const Repairs_1 = require("../entities/Repairs");
// Import your entities here
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres", // or another database type
    host: "localhost",
    port: 5432,
    username: "your_username",
    password: "your_password",
    database: "your_database_name",
    synchronize: false, // Should be false in production, set to true in dev
    logging: false,
    entities: [Employee_1.Employee, Customer_1.Customer, Shipment_1.Shipment, Trip_1.Trip, Repairs_1.Repairs], // Add all entities here
    migrations: ["src/migrations/*.ts"], // Path to migrations
    subscribers: [],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("DataSource has been initialized!");
})
    .catch((err) => {
    console.error("Error during DataSource initialization:", err);
});
