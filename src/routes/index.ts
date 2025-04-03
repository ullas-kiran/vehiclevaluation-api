import { Router } from 'express';
import { createVehicle, getValuation } from '../controllers/vehicle.controller';
import { createLoan, updateLoanStatus } from '../controllers/loan.controller';

const router = Router();

// Vehicle Routes
router.post('/vehicles', createVehicle);
router.get('/vehicles/valuation/:vin', getValuation);

// Loan Routes
router.post('/loans', createLoan);
router.patch('/loans/:id/status', updateLoanStatus);

export default router;