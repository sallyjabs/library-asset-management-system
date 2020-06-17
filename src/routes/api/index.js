/*eslint-disable*/
import { Router } from 'express';
import authRoutes from './authRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.get('/', (req, res) => res.send('This is my index page'));

export default router;
