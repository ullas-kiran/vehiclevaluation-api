import { Request, Response } from 'express';
import { AppDataSource } from '../index.ts';
import { Loan } from '@entities/Loan.ts';

export const applyForLoan = async (req: Request, res: Response) => {
    const loanRepo = AppDataSource.getRepository(Loan);
    const loan = loanRepo.create({ ...req.body, status: 'Pending' });
    await loanRepo.save(loan);
    res.status(201).json(loan);
};
