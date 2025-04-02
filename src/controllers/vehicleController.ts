import { Request, Response } from 'express';
import { AppDataSource } from '../index.ts';
import { Vehicle } from '@entities/Vehicle.ts';

export const getVehicles = async (_req: Request, res: Response) => {
    const vehicleRepo = AppDataSource.getRepository(Vehicle);
    const vehicles = await vehicleRepo.find();
    res.json(vehicles);
};

export const addVehicle = async (req: Request, res: Response) => {
    const vehicleRepo = AppDataSource.getRepository(Vehicle);
    const vehicle = vehicleRepo.create(req.body);
    await vehicleRepo.save(vehicle);
    res.status(201).json(vehicle);
};
