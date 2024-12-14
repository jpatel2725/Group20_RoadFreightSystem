import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "./Customer";
import { Trip } from "./Trip";

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weight: number;

  @Column()
  value: number;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @ManyToOne(() => Customer, (customer) => customer.shipments)
  customer: Customer;

  @ManyToOne(() => Trip, (trip) => trip.shipments)
  trip: Trip;
}
