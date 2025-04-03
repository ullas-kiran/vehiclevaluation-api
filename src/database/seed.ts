import { AppDataSource } from '../config/database';
import { Vehicle } from '../models/vehicle';

async function seed() {
  await AppDataSource.initialize();
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = vehicleRepository.create({
    vin: '1HGCM82633A004352',
    make: 'Honda',
    model: 'Accord',
    year: 2003,
    mileage: 120000,
  });

  await vehicleRepository.save(vehicle);
  console.log('Database seeded');
  await AppDataSource.destroy();
}

seed().catch(console.error);