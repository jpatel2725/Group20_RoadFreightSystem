import { AppDataSource } from "../config/data-source";
import { Shipment } from "../entities/Shipment";

export const ShipmentRepository = AppDataSource.getRepository(Shipment);

// Additional helper functions
export const findShipmentByOrigin = async (origin: string) => {
  return ShipmentRepository.find({ where: { origin } });
};

export const findShipmentByDestination = async (destination: string) => {
  return ShipmentRepository.find({ where: { destination } });
};
