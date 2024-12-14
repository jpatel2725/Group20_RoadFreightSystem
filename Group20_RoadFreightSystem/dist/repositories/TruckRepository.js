"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckRepository = void 0;
const data_source_1 = require("../config/data-source");
const Truck_1 = require("../entities/Truck");
exports.TruckRepository = data_source_1.AppDataSource.getRepository(Truck_1.Truck);
