import express, { Request, Response } from 'express';
import jsonDataService from '../services/jsonDataService';

const router = express.Router();

router.get('/json-data', async (req: Request, res: Response) => {
  try {
    const jsonData = await jsonDataService.getJsonData();
    res.json(jsonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
