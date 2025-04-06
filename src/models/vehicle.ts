const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id!: number; 

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
  valuation?: number; 
}