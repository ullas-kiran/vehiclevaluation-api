import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id!: number; // ! tells TypeScript this will be assigned by TypeORM

  @Column()
  vehicleId!: number;

  @Column()
  applicantName!: string;

  @Column()
  applicantIncome!: number;

  @Column()
  loanAmount!: number;

  @Column({ default: 'pending' })
  status!: string; // 'pending', 'approved', 'rejected'
}