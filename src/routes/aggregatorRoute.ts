import express, { Request, Response } from 'express';
import aggregatorService from '../services/aggregatorService';

const router = express.Router();

router.get('/aggregator', async (req: Request, res: Response) => {
  try {
    const aggregatedData = await aggregatorService.aggregateData();
    res.json(aggregatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;