import { AppDataSource } from "../config/data-source";
import { Repairs } from "../entities/Repairs";

export const RepairsRepository = AppDataSource.getRepository(Repairs);

// Additional helper functions
export const findRepairsByTruck = async (truckId: number) => {
  return RepairsRepository.find({ where: { truck: { id: truckId } }, relations: ["truck", "mechanic"] });
};

export const findRepairsByMechanic = async (mechanicId: number) => {
  return RepairsRepository.find({ where: { mechanic: { id: mechanicId } }, relations: ["truck", "mechanic"] });
};
