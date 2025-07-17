import express, { Request, Response } from 'express'
import { PrismaClient } from '../../generated/prisma';
import routes from '../routes/routes'

const app = express();
const PORT = 3000;

app.use('/api', routes);

const prisma = new PrismaClient();

app.listen(PORT, () => {
    console.log(`SERVER RUNNING http://localhost:${PORT}`)
})