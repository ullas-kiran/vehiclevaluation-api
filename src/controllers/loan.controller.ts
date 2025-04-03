import { Request, Response } from 'express';
import { LoanService } from '../services/loan.service';
import { CreateLoanDto } from '../dtos/loan.dto';
import { validate } from 'class-validator';

const loanService = new LoanService();

export const createLoan = async (req: Request, res: Response): Promise<void> => {
  const dto = Object.assign(new CreateLoanDto(), req.body);
  const errors = await validate(dto);
  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }

  try {
    const loan = await loanService.createLoan(dto);
    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const updateLoanStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const loan = await loanService.updateLoanStatus(parseInt(id), status);
    res.json(loan);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};