import express from "express";
import { CustomerRepository } from "../repositories/CustomerRepository";

const router = express.Router();

// CREATE a Customer
router.post("/", async (req, res) => {
  try {
    const customer = CustomerRepository.create(req.body);
    const result = await CustomerRepository.save(customer);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Error creating customer" });
  }
});

// GET all Customers
router.get("/", async (req, res) => {
  try {
    const customers = await CustomerRepository.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "Error fetching customers" });
  }
});

// GET Customer by ID
router.get("/:id", async (req, res) => {
  try {
    const customer = await CustomerRepository.findOneBy({ id: parseInt(req.params.id) });
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching customer" });
  }
});

// UPDATE a Customer
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const customer = await CustomerRepository.findOneBy({ id });
    if (customer) {
      CustomerRepository.merge(customer, req.body);
      const result = await CustomerRepository.save(customer);
      res.json(result);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating customer" });
  }
});

// DELETE a Customer
router.delete("/:id", async (req, res) => {
  try {
    const result = await CustomerRepository.delete(parseInt(req.params.id));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error deleting customer" });
  }
});

export default router;
