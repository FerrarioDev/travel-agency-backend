import express from 'express';
import { getCityById, getCities } from '../controllers/city.controller.js';

const router = express.Router();

router.get('/', getCities);
router.get('/:id', getCityById);

export default router;