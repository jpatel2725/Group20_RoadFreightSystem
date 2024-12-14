import express from "express";
import { TripRepository } from "../repositories/TripRepository";

const router = express.Router();

// CREATE a Trip
router.post("/", async (req, res) => {
  try {
    const trip = TripRepository.create(req.body);
    const result = await TripRepository.save(trip);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Error creating trip" });
  }
});

// GET all Trips
router.get("/", async (req, res) => {
  try {
    const trips = await TripRepository.find({ relations: ["truck", "driver", "shipments"] });
    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: "Error fetching trips" });
  }
});

// GET Trip by ID
router.get("/:id", async (req, res) => {
  try {
    const trip = await TripRepository.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ["truck", "driver", "shipments"]
    });
    if (trip) {
      res.json(trip);
    } else {
      res.status(404).json({ error: "Trip not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching trip" });
  }
});

// UPDATE a Trip
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const trip = await TripRepository.findOne({ where: { id } });
    if (trip) {
      TripRepository.merge(trip, req.body);
      const result = await TripRepository.save(trip);
      res.json(result);
    } else {
      res.status(404).json({ error: "Trip not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating trip" });
  }
});

// DELETE a Trip
router.delete("/:id", async (req, res) => {
  try {
    const result = await TripRepository.delete(parseInt(req.params.id));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error deleting trip" });
  }
});

export default router;
