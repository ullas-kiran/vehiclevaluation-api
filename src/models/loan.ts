const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");


@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column()
  vehicleId!: number;

  @Column()
  applicantName!: string;

  @Column()
  applicantIncome!: number;

  @Column()
  loanAmount!: number;

  @Column({ default: 'pending' })
  status!: string; 
}