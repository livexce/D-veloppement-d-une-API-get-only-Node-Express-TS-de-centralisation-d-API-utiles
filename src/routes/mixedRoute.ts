import express, { Request, Response } from 'express';
import mixedService from '../services/mixedService';

const router = express.Router();

router.get('/mixed', async (req: Request, res: Response) => {
  try {
    const mixedData = await mixedService.getMixedData();
    res.json(mixedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;