import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Repairs } from "./Repairs";
import { Trip } from "./Trip";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  seniority: number;

  @Column({ nullable: true })
  category?: string;

  @Column({ nullable: true })
  specializedBrand?: string;

  @OneToMany(() => Trip, (trip) => trip.driver)
  trips: Trip[];

  @OneToMany(() => Repairs, (repairs) => repairs.mechanic)
  repairs: Repairs[];
}
