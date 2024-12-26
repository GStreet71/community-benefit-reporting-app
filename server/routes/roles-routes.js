import express from 'express';
import { getRoles } from '../controllers/roles-controller.js';

const router = express.Router();

// Define the route to get roles
router.get('/api/roles', getRoles);

export default router;