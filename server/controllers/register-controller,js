import { query } from '../config/db.js';

export const registerUser = async (req, res) => {
  const { first_name, last_name, preferred_name, title, dept, email, password, role, profile_image } = req.body;
  try {
    const result = await query(
      'INSERT INTO users (first_name, last_name, preferred_name, title, dept, email, password, role, profile_image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [first_name, last_name, preferred_name, title, dept, email, password, role, profile_image]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error registering user:', error.stack);
    res.status(500).send('Server error');
  }
};