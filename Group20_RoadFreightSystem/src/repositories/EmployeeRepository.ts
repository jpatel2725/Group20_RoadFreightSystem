import { AppDataSource } from "../config/data-source";
import { Employee } from "../entities/Employee";

export const EmployeeRepository = AppDataSource.getRepository(Employee);

// Additional helper functions
export const findMechanics = async () => {
  return EmployeeRepository.find({ where: { specializedBrand: Not(null) } });
};

export const findDrivers = async () => {
  return EmployeeRepository.find({ where: { category: Not(null) } });
};
