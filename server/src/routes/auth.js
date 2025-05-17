import express from 'express';
import { signup, signin, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Authentication routes
router.post('/signup', signup);
router.post('/signin', signin);
router.get('/me', protect, getMe);

export default router;