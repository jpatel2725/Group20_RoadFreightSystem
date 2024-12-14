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
exports.findShipmentByDestination = exports.findShipmentByOrigin = exports.ShipmentRepository = void 0;
const data_source_1 = require("../config/data-source");
const Shipment_1 = require("../entities/Shipment");
exports.ShipmentRepository = data_source_1.AppDataSource.getRepository(Shipment_1.Shipment);
// Additional helper functions
const findShipmentByOrigin = (origin) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.ShipmentRepository.find({ where: { origin } });
});
exports.findShipmentByOrigin = findShipmentByOrigin;
const findShipmentByDestination = (destination) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.ShipmentRepository.find({ where: { destination } });
});
exports.findShipmentByDestination = findShipmentByDestination;
