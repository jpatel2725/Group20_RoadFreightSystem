import express from "express";
import { RepairsRepository } from "../repositories/RepairsRepository";

const router = express.Router();

// CREATE a Repair
router.post("/", async (req, res) => {
  try {
    const repair = RepairsRepository.create(req.body);
    const result = await RepairsRepository.save(repair);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Error creating repair" });
  }
});

// GET all Repairs
router.get("/", async (req, res) => {
  try {
    const repairs = await RepairsRepository.find({ relations: ["truck", "mechanic"] });
    res.json(repairs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching repairs" });
  }
});

// GET Repair by ID
router.get("/:id", async (req, res) => {
  try {
    const repair = await RepairsRepository.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ["truck", "mechanic"]
    });
    if (repair) {
      res.json(repair);
    } else {
      res.status(404).json({ error: "Repair not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching repair" });
  }
});

// UPDATE a Repair
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const repair = await RepairsRepository.findOne({ where: { id } });
    if (repair) {
      RepairsRepository.merge(repair, req.body);
      const result = await RepairsRepository.save(repair);
      res.json(result);
    } else {
      res.status(404).json({ error: "Repair not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating repair" });
  }
});

// DELETE a Repair
router.delete("/:id", async (req, res) => {
  try {
    const result = await RepairsRepository.delete(parseInt(req.params.id));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error deleting repair" });
  }
});

export default router;
