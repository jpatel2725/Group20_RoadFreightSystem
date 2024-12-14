import express from "express";
import TruckRoutes from "./routes/TruckRoutes";
import { AppDataSource } from "./config/data-source";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/trucks", TruckRoutes);

// Start Server
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to initialize database", err);
  });
