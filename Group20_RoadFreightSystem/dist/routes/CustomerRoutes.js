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
const CustomerRepository_1 = require("../repositories/CustomerRepository");
const router = express_1.default.Router();
// CREATE a Customer
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = CustomerRepository_1.CustomerRepository.create(req.body);
        const result = yield CustomerRepository_1.CustomerRepository.save(customer);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Error creating customer" });
    }
}));
// GET all Customers
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield CustomerRepository_1.CustomerRepository.find();
        res.json(customers);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching customers" });
    }
}));
// GET Customer by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield CustomerRepository_1.CustomerRepository.findOneBy({ id: parseInt(req.params.id) });
        if (customer) {
            res.json(customer);
        }
        else {
            res.status(404).json({ error: "Customer not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching customer" });
    }
}));
// UPDATE a Customer
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const customer = yield CustomerRepository_1.CustomerRepository.findOneBy({ id });
        if (customer) {
            CustomerRepository_1.CustomerRepository.merge(customer, req.body);
            const result = yield CustomerRepository_1.CustomerRepository.save(customer);
            res.json(result);
        }
        else {
            res.status(404).json({ error: "Customer not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error updating customer" });
    }
}));
// DELETE a Customer
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield CustomerRepository_1.CustomerRepository.delete(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting customer" });
    }
}));
exports.default = router;
