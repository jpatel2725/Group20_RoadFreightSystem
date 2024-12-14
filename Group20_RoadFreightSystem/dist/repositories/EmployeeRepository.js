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
exports.findDrivers = exports.findMechanics = exports.EmployeeRepository = void 0;
const data_source_1 = require("../config/data-source");
const Employee_1 = require("../entities/Employee");
exports.EmployeeRepository = data_source_1.AppDataSource.getRepository(Employee_1.Employee);
// Additional helper functions
const findMechanics = () => __awaiter(void 0, void 0, void 0, function* () {
    return exports.EmployeeRepository.find({ where: { specializedBrand: Not(null) } });
});
exports.findMechanics = findMechanics;
const findDrivers = () => __awaiter(void 0, void 0, void 0, function* () {
    return exports.EmployeeRepository.find({ where: { category: Not(null) } });
});
exports.findDrivers = findDrivers;
