import { createConnection, getRepository, Connection, Repository } from "typeorm";
import { Truck } from "../src/entities/Truck";

describe("Truck CRUD Tests", () => {
  let connection: Connection;
  let truckRepository: Repository<Truck>;  // Explicitly define the type here

  beforeAll(async () => {
    connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "mysecretpassword",
      database: "road_freight",
      entities: [Truck],
      synchronize: true,
    });

    truckRepository = getRepository(Truck);  // TypeScript will now know this is a Repository<Truck>
  });

  afterAll(async () => {
    await connection.close();
  });

  it("should create a new truck", async () => {
    const truck = new Truck();
    truck.brand = "Volvo";
    truck.load_capacity = 5000;
    truck.year = 2015;
    truck.number_of_repairs = 2;

    const savedTruck = await truckRepository.save(truck);
    expect(savedTruck).toHaveProperty("id");
    expect(savedTruck.brand).toBe("Volvo");
  });

  it("should find a truck by brand", async () => {
    const truck = await truckRepository.findOne({ where: { brand: "Volvo" } });
    expect(truck).toBeDefined();
    expect(truck?.brand).toBe("Volvo");
  });

  it("should update a truck's information", async () => {
    const truck = await truckRepository.findOne({ where: { brand: "Volvo" } });
    if (truck) {
      truck.year = 2016;
      const updatedTruck = await truckRepository.save(truck);
      expect(updatedTruck.year).toBe(2016);
    }
  });

  it("should delete a truck", async () => {
    const truck = await truckRepository.findOne({ where: { brand: "Volvo" } });
    if (truck) {
      await truckRepository.remove(truck);
      const deletedTruck = await truckRepository.findOne({ where: { brand: "Volvo" } });
      expect(deletedTruck).toBeNull();
    }
  });
});
