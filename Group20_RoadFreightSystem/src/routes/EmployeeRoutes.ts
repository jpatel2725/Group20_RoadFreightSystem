import express from "express";
import { EmployeeRepository } from "../repositories/EmployeeRepository";

const router = express.Router();

// CREATE an Employee
router.post("/", async (req, res) => {
  try {
    const employee = EmployeeRepository.create(req.body);
    const result = await EmployeeRepository.save(employee);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Error creating employee" });
  }
});

// GET all Employees
router.get("/", async (req, res) => {
  try {
    const employees = await EmployeeRepository.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Error fetching employees" });
  }
});

// GET Employee by ID
router.get("/:id", async (req, res) => {
  try {
    const employee = await EmployeeRepository.findOneBy({ id: parseInt(req.params.id) });
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching employee" });
  }
});

// UPDATE an Employee
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const employee = await EmployeeRepository.findOneBy({ id });
    if (employee) {
      EmployeeRepository.merge(employee, req.body);
      const result = await EmployeeRepository.save(employee);
      res.json(result);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating employee" });
  }
});

// DELETE an Employee
router.delete("/:id", async (req, res) => {
  try {
    const result = await EmployeeRepository.delete(parseInt(req.params.id));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error deleting employee" });
  }
});

export default router;
