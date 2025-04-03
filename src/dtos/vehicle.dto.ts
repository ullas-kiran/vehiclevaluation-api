import { IsString, IsNumber, Min, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  vin!: string; // ! asserts this will be assigned at runtime

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
  vin!: string; // ! added here too, assuming it’s populated at runtime
  estimatedValue!: number;
}