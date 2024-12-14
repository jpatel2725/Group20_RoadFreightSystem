import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Truck } from "./Truck";
import { Employee } from "./Employee";

@Entity()
export class Repairs {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Truck, (truck) => truck.repairs)
  truck: Truck;

  @ManyToOne(() => Employee, (mechanic) => mechanic.repairs)
  mechanic: Employee;

  @Column()
  estimatedRepairTime: number;
}
