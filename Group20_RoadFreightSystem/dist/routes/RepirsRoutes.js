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
const RepairsRepository_1 = require("../repositories/RepairsRepository");
const router = express_1.default.Router();
// CREATE a Repair
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const repair = RepairsRepository_1.RepairsRepository.create(req.body);
        const result = yield RepairsRepository_1.RepairsRepository.save(repair);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Error creating repair" });
    }
}));
// GET all Repairs
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const repairs = yield RepairsRepository_1.RepairsRepository.find({ relations: ["truck", "mechanic"] });
        res.json(repairs);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching repairs" });
    }
}));
// GET Repair by ID
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const repair = yield RepairsRepository_1.RepairsRepository.findOne({
            where: { id: parseInt(req.params.id) },
            relations: ["truck", "mechanic"]
        });
        if (repair) {
            res.json(repair);
        }
        else {
            res.status(404).json({ error: "Repair not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching repair" });
    }
}));
// UPDATE a Repair
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const repair = yield RepairsRepository_1.RepairsRepository.findOne({ where: { id } });
        if (repair) {
            RepairsRepository_1.RepairsRepository.merge(repair, req.body);
            const result = yield RepairsRepository_1.RepairsRepository.save(repair);
            res.json(result);
        }
        else {
            res.status(404).json({ error: "Repair not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Error updating repair" });
    }
}));
// DELETE a Repair
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield RepairsRepository_1.RepairsRepository.delete(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting repair" });
    }
}));
exports.default = router;
