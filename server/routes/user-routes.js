import { Router } from 'express';
const router = Router();
import { query } from '../db'; // Adjust the path to your db module

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Unauthorized');
};

// Route to fetch data from authenticated users
router.get('/api/data', isAuthenticated, async (req, res) => {
  try {
    const result = await query('SELECT * FROM comm-impact-reporting_dev');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error.stack);
    res.status(500).send('Server error');
  }
});

export default router;