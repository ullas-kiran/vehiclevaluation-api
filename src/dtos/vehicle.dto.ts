import { IsString, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  vin!: string; 

  @IsString()
  @IsNotEmpty()
  make!: string;

  @IsString()
  @IsNotEmpty()
  model!: string;

  @IsNumber()
  @Min(1900)
  year!: number;

  @IsNumber()
  @Min(0)
  mileage!: number;
}

export class ValuationResponseDto {
  vin!: string; 
  estimatedValue!: number;
}