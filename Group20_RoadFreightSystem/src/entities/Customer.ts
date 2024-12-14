import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Shipment } from "./Shipment";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone1: string;

  @Column({ nullable: true })
  phone2?: string;

  @OneToMany(() => Shipment, (shipment) => shipment.customer)
  shipments: Shipment[];
}
