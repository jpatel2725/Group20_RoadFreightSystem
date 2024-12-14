import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Truck } from "./Truck";
import { Employee } from "./Employee";
import { Shipment } from "./Shipment";

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  route: string;

  @ManyToOne(() => Truck, (truck) => truck.trips)
  truck: Truck;

  @ManyToOne(() => Employee, (driver) => driver.trips)
  driver: Employee;

  @OneToMany(() => Shipment, (shipment) => shipment.trip)
  shipments: Shipment[];
}
