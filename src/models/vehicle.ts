import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id!: number; // ! asserts this will be assigned by TypeORM

  @Column()
  vin!: string;

  @Column()
  make!: string;

  @Column()
  model!: string;

  @Column()
  year!: number;

  @Column()
  mileage!: number;

  @Column({ nullable: true })
  valuation?: number; // Optional, no ! needed
}