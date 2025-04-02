import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vehicle } from './Vehicle.ts';

@Entity()
export class Loan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    applicantName: string;

    @Column()
    creditScore: number;

    @Column()
    loanAmount: number;

    @Column()
    status: string;

    @ManyToOne(() => Vehicle)
    vehicle: Vehicle;
}
