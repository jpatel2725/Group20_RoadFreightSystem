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
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRepairsByMechanic = exports.findRepairsByTruck = exports.RepairsRepository = void 0;
const data_source_1 = require("../config/data-source");
const Repairs_1 = require("../entities/Repairs");
exports.RepairsRepository = data_source_1.AppDataSource.getRepository(Repairs_1.Repairs);
// Additional helper functions
const findRepairsByTruck = (truckId) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.RepairsRepository.find({ where: { truck: { id: truckId } }, relations: ["truck", "mechanic"] });
});
exports.findRepairsByTruck = findRepairsByTruck;
const findRepairsByMechanic = (mechanicId) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.RepairsRepository.find({ where: { mechanic: { id: mechanicId } }, relations: ["truck", "mechanic"] });
});
exports.findRepairsByMechanic = findRepairsByMechanic;
