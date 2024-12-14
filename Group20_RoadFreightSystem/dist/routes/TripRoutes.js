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
const TripRepository_1 = require("../repositories/TripRepository");
const router = express_1.default.Router();
// CREATE a Trip
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trip = TripRepository_1.TripRepository.create(req.body);
        const result = yield TripRepository_1.TripRepository.save(trip);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Error creating trip" });
    }
}));
// GET all Trips
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trips = yield TripRepository_1.TripRepository.find({ relations: ["truck", "driver", "shipments"] });
        res.json(trips);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching trips" });
    }
}));
// GET Trip by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trip = yield TripRepository_1.TripRepository.findOne({
            where: { id: parseInt(req.params.id) },
            relations: ["truck", "driver", "shipments"]
        });
        if (trip) {
            res.json(trip);
        }
        else {
            res.status(404).json({ error: "Trip not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching trip" });
    }
}));
// UPDATE a Trip
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const trip = yield TripRepository_1.TripRepository.findOne({ where: { id } });
        if (trip) {
            TripRepository_1.TripRepository.merge(trip, req.body);
            const result = yield TripRepository_1.TripRepository.save(trip);
            res.json(result);
        }
        else {
            res.status(404).json({ error: "Trip not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error updating trip" });
    }
}));
// DELETE a Trip
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield TripRepository_1.TripRepository.delete(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting trip" });
    }
}));
exports.default = router;
