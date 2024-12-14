import express from "express";
import { TruckRepository } from "../repositories/TruckRepository";

const router = express.Router();

// Create a Truck
router.post("/", async (req, res) => {
  const truck = TruckRepository.create(req.body);
  const result = await TruckRepository.save(truck);
  res.status(201).json(result);
});

// Get all Trucks
router.get("/", async (req, res) => {
  const trucks = await TruckRepository.find();
  res.json(trucks);
});

// Get a Truck by ID
router.get("/:id", async (req, res) => {
  const truck = await TruckRepository.findOneBy({ id: parseInt(req.params.id) });
  if (truck) res.json(truck);
  else res.status(404).json({ error: "Truck not found" });
});

// Update a Truck
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const truck = await TruckRepository.findOneBy({ id });
  if (truck) {
    TruckRepository.merge(truck, req.body);
    const result = await TruckRepository.save(truck);
    res.json(result);
  } else res.status(404).json({ error: "Truck not found" });
});

// Delete a Truck
router.delete("/:id", async (req, res) => {
  const result = await TruckRepository.delete(parseInt(req.params.id));
  res.json(result);
});

export default router;
