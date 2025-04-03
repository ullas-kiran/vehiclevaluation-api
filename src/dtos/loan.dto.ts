import { IsString, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class CreateLoanDto {
  @IsNumber()
  vehicleId!: number; // ! asserts this will be assigned at runtime

  @IsString()
  @IsNotEmpty()
  applicantName!: string;

  @IsNumber()
  @Min(0)
  applicantIncome!: number;

  @IsNumber()
  @Min(1000)
  loanAmount!: number;
}