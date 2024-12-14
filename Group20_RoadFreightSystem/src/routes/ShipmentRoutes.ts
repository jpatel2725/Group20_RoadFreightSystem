import express from "express";
import { ShipmentRepository } from "../repositories/ShipmentRepository";

const router = express.Router();

// CREATE a Shipment
router.post("/", async (req, res) => {
  try {
    const shipment = ShipmentRepository.create(req.body);
    const result = await ShipmentRepository.save(shipment);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Error creating shipment" });
  }
});

// GET all Shipments
router.get("/", async (req, res) => {
  try {
    const shipments = await ShipmentRepository.find();
    res.json(shipments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching shipments" });
  }
});

// GET Shipment by ID
router.get("/:id", async (req, res) => {
  try {
    const shipment = await ShipmentRepository.findOneBy({ id: parseInt(req.params.id) });
    if (shipment) {
      res.json(shipment);
    } else {
      res.status(404).json({ error: "Shipment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching shipment" });
  }
});

// UPDATE a Shipment
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const shipment = await ShipmentRepository.findOneBy({ id });
    if (shipment) {
      ShipmentRepository.merge(shipment, req.body);
      const result = await ShipmentRepository.save(shipment);
      res.json(result);
    } else {
      res.status(404).json({ error: "Shipment not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating shipment" });
  }
});

// DELETE a Shipment
router.delete("/:id", async (req, res) => {
  try {
    const result = await ShipmentRepository.delete(parseInt(req.params.id));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error deleting shipment" });
  }
});

export default router;
