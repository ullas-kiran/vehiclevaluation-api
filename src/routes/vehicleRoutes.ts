import express from 'express';
import { getVehicles, addVehicle } from '@controllers/vehicleController.ts';

const router = express.Router();

router.get('/', getVehicles);
router.post('/', addVehicle);

export default router;
