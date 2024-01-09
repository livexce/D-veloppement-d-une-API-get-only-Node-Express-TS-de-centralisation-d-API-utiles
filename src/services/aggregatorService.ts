import express, { Request, Response } from 'express';
import aggregatorService from '../services/aggregatorService';

const router = express.Router();

router.get('/exchangerate', async (req: Request, res: Response) => {
  try {
    const exchangeRate = await aggregatorService.getExchangeRate();
    res.json({ exchangeRate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;