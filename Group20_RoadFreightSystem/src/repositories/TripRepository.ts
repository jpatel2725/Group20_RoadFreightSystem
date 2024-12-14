import { AppDataSource } from "../config/data-source";
import { Trip } from "../entities/Trip";

export const TripRepository = AppDataSource.getRepository(Trip);

// Additional helper functions
export const findTripsByRoute = async (route: string) => {
  return TripRepository.find({ where: { route } });
};

export const findTripsWithShipments = async () => {
  return TripRepository.find({ relations: ["shipments"] });
};
