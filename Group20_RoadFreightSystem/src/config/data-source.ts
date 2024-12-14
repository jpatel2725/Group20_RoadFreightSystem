import { DataSource } from "typeorm";
import { Employee } from "../entities/Employee";
import { Customer } from "../entities/Customer";
import { Shipment } from "../entities/Shipment";
import { Trip } from "../entities/Trip";
import { Repairs } from "../entities/Repairs";
// Import your entities here

export const AppDataSource = new DataSource({
  type: "postgres", // or another database type
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "password",
  database: "postgres",
  synchronize: false, // Should be false in production, set to true in dev
  logging: false,
  entities: [Employee, Customer, Shipment, Trip, Repairs], // Add all entities here
  migrations: ["src/migrations/*.ts"], // Path to migrations
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DataSource has been initialized!");
  })
  .catch((err) => {
    console.error("Error during DataSource initialization:", err);
  });
