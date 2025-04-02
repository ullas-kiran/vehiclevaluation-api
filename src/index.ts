import express from 'express';
import { DataSource } from 'typeorm';
import bodyParser from 'body-parser';
import vehicleRoutes from '@routes/vehicleRoutes.ts';
import loanRoutes from '@routes/loanRoutes.ts';
import { Vehicle } from '@entities/Vehicle.ts';
import { Loan } from '@entities/Loan.ts';

const app = express();
app.use(bodyParser.json());


export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    entities: [Vehicle, Loan],
});

AppDataSource.initialize()
    .then(() => console.log('Database connected'))
    .catch((error) => console.error('Database  failed:', error));

// Setup routes
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/loans', loanRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export default app;
