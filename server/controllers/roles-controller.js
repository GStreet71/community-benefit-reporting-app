import { query } from '../config/db.js';

export const getRoles = async (req, res) => {
  try {
    const result = await query('SELECT id, name FROM roles');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching roles:', error.stack);
    res.status(500).send('Server error');
  }
};