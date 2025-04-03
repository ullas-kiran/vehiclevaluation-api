import { AppDataSource } from '../config/database';
import { Loan } from '../models/loan';
import { CreateLoanDto } from '../dtos/loan.dto';
import { VehicleService } from './vehicle.service';

export class LoanService {
  private loanRepository = AppDataSource.getRepository(Loan);
  private vehicleService = new VehicleService();

  async createLoan(dto: CreateLoanDto): Promise<Loan> {
    const vehicle = await this.vehicleService.getVehicleById(dto.vehicleId);
    if (!vehicle) throw new Error('Vehicle not found');

    const loan = this.loanRepository.create(dto);
    loan.status = this.checkEligibility(dto) ? 'approved' : 'rejected';
    return this.loanRepository.save(loan);
  }

  async updateLoanStatus(id: number, status: string): Promise<Loan> {
    const loan = await this.loanRepository.findOneBy({ id });
    if (!loan) throw new Error('Loan not found');
    loan.status = status;
    return this.loanRepository.save(loan);
  }

  private checkEligibility(dto: CreateLoanDto): boolean {
    // Basic eligibility: income > 2x loan amount
    return dto.applicantIncome > dto.loanAmount * 2;
  }
}