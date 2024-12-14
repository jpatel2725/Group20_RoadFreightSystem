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
const TruckRepository_1 = require("../repositories/TruckRepository");
const router = express_1.default.Router();
// Create a Truck
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const truck = TruckRepository_1.TruckRepository.create(req.body);
    const result = yield TruckRepository_1.TruckRepository.save(truck);
    res.status(201).json(result);
}));
// Get all Trucks
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trucks = yield TruckRepository_1.TruckRepository.find();
    res.json(trucks);
}));
// Get a Truck by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const truck = yield TruckRepository_1.TruckRepository.findOneBy({ id: parseInt(req.params.id) });
    if (truck)
        res.json(truck);
    else
        res.status(404).json({ error: "Truck not found" });
}));
// Update a Truck
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const truck = yield TruckRepository_1.TruckRepository.findOneBy({ id });
    if (truck) {
        TruckRepository_1.TruckRepository.merge(truck, req.body);
        const result = yield TruckRepository_1.TruckRepository.save(truck);
        res.json(result);
    }
    else
        res.status(404).json({ error: "Truck not found" });
}));
// Delete a Truck
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield TruckRepository_1.TruckRepository.delete(parseInt(req.params.id));
    res.json(result);
}));
exports.default = router;
