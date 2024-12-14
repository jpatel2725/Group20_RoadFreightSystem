import { AppDataSource } from "../config/data-source";
import { Truck } from "../entities/Truck";

export const TruckRepository = AppDataSource.getRepository(Truck);
