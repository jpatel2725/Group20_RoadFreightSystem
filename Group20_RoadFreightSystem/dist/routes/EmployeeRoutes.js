"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EmployeeRepository_1 = require("../repositories/EmployeeRepository");
const router = express_1.default.Router();
// CREATE an Employee
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = EmployeeRepository_1.EmployeeRepository.create(req.body);
        const result = yield EmployeeRepository_1.EmployeeRepository.save(employee);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Error creating employee" });
    }
}));
// GET all Employees
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield EmployeeRepository_1.EmployeeRepository.find();
        res.json(employees);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching employees" });
    }
}));
// GET Employee by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield EmployeeRepository_1.EmployeeRepository.findOneBy({ id: parseInt(req.params.id) });
        if (employee) {
            res.json(employee);
        }
        else {
            res.status(404).json({ error: "Employee not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching employee" });
    }
}));
// UPDATE an Employee
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const employee = yield EmployeeRepository_1.EmployeeRepository.findOneBy({ id });
        if (employee) {
            EmployeeRepository_1.EmployeeRepository.merge(employee, req.body);
            const result = yield EmployeeRepository_1.EmployeeRepository.save(employee);
            res.json(result);
        }
        else {
            res.status(404).json({ error: "Employee not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error updating employee" });
    }
}));
// DELETE an Employee
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield EmployeeRepository_1.EmployeeRepository.delete(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting employee" });
    }
}));
exports.default = router;
