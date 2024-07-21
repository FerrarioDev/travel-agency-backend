import express from 'express';
import { getHotelsByCity } from '../controllers/hotel.controller.js';

const router = express.Router();

router.get('/:id', getHotelsByCity);

export default router;