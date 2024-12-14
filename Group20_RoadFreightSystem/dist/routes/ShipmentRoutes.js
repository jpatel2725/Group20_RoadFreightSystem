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
const ShipmentRepository_1 = require("../repositories/ShipmentRepository");
const router = express_1.default.Router();
// CREATE a Shipment
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shipment = ShipmentRepository_1.ShipmentRepository.create(req.body);
        const result = yield ShipmentRepository_1.ShipmentRepository.save(shipment);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Error creating shipment" });
    }
}));
// GET all Shipments
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shipments = yield ShipmentRepository_1.ShipmentRepository.find();
        res.json(shipments);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching shipments" });
    }
}));
// GET Shipment by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shipment = yield ShipmentRepository_1.ShipmentRepository.findOneBy({ id: parseInt(req.params.id) });
        if (shipment) {
            res.json(shipment);
        }
        else {
            res.status(404).json({ error: "Shipment not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching shipment" });
    }
}));
// UPDATE a Shipment
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const shipment = yield ShipmentRepository_1.ShipmentRepository.findOneBy({ id });
        if (shipment) {
            ShipmentRepository_1.ShipmentRepository.merge(shipment, req.body);
            const result = yield ShipmentRepository_1.ShipmentRepository.save(shipment);
            res.json(result);
        }
        else {
            res.status(404).json({ error: "Shipment not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error updating shipment" });
    }
}));
// DELETE a Shipment
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield ShipmentRepository_1.ShipmentRepository.delete(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting shipment" });
    }
}));
exports.default = router;
