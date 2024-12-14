import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Trip } from "./Trip";
import { Repairs } from "./Repairs";

@Entity()
export class Truck {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  load: number;

  @Column()
  capacity: number;

  @Column()
  year: number;

  @Column()
  numRepairs: number;

  @OneToMany(() => Trip, (trip) => trip.truck)
  trips: Trip[];

  @OneToMany(() => Repairs, (repairs) => repairs.truck)
  repairs: Repairs[];
}
