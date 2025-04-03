import { Request, Response } from 'express';
import { VehicleService } from '../services/vehicle.service';
import { CreateVehicleDto } from '../dtos/vehicle.dto';
import { validate } from 'class-validator';

const vehicleService = new VehicleService();

export const createVehicle = async (req: Request, res: Response): Promise<void> => {
  const dto = Object.assign(new CreateVehicleDto(), req.body);
  const errors = await validate(dto);
  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }

  try {
    const vehicle = await vehicleService.createVehicle(dto);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const getValuation = async (req: Request, res: Response): Promise<void> => {
  const { vin } = req.params;
  try {
    const valuation = await vehicleService.getValuation(vin);
    res.json(valuation);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};