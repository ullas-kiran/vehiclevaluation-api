import { AppDataSource } from '../config/database';
import { Vehicle } from '../models/vehicle';
import { CreateVehicleDto, ValuationResponseDto } from '../dtos/vehicle.dto';
import axios from 'axios';

export class VehicleService {
  private vehicleRepository = AppDataSource.getRepository(Vehicle);

  async createVehicle(dto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create(dto);
    return this.vehicleRepository.save(vehicle);
  }

  async getVehicleById(id: number): Promise<Vehicle | null> {
    return this.vehicleRepository.findOneBy({ id });
  }

  async getValuation(vin: string): Promise<ValuationResponseDto> {
    // Simulate RapidAPI VIN lookup (replace with your API key)
    const apiKey = process.env.RAPIDAPI_KEY || '';
    const response = await axios.get(`https://vin-lookup2.p.rapidapi.com/vehicle-lookup`, {
      params: { vin },
      headers: {
        'x-rapidapi-host': 'vin-lookup2.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    });

    console.log("vehicle",response.data)
    // Mock valuation logic (replace with real data from API)
    const estimatedValue = Math.floor(Math.random() * 20000) + 5000;
    const vehicle = await this.vehicleRepository.findOneBy({ vin });
    if (vehicle) {
      vehicle.valuation = estimatedValue;
      await this.vehicleRepository.save(vehicle);
    }

    return { vin, estimatedValue };
  }
}