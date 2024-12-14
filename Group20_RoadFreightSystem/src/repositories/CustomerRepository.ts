import { AppDataSource } from "../config/data-source";
import { Customer } from "../entities/Customer";

export const CustomerRepository = AppDataSource.getRepository(Customer);

// Additional helper functions
export const findCustomerByName = async (name: string) => {
  return CustomerRepository.findOne({ where: { name } });
};
