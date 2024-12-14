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
exports.findTripsWithShipments = exports.findTripsByRoute = exports.TripRepository = void 0;
const data_source_1 = require("../config/data-source");
const Trip_1 = require("../entities/Trip");
exports.TripRepository = data_source_1.AppDataSource.getRepository(Trip_1.Trip);
// Additional helper functions
const findTripsByRoute = (route) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.TripRepository.find({ where: { route } });
});
exports.findTripsByRoute = findTripsByRoute;
const findTripsWithShipments = () => __awaiter(void 0, void 0, void 0, function* () {
    return exports.TripRepository.find({ relations: ["shipments"] });
});
exports.findTripsWithShipments = findTripsWithShipments;
