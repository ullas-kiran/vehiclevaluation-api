import express from 'express';
import { applyForLoan } from '@controllers/loanController.ts';

const router = express.Router();

router.post('/', applyForLoan);

export default router;
