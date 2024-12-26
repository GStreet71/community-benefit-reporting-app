import express from 'express';
import bcrypt from 'bcrypt';
import { query } from '../config/db.js'; // Adjust the path to your db module

const router = express.Router();

// Registration route
router.post('/api/register', async (req, res) => {
  const { first_name, last_name, preferred_name, title, dept, email, password, role } = req.body;

  // Hash the password
  const password_hash = await bcrypt.hash(password, 10);

  try {
    // Start a transaction
    await query('BEGIN');

    // Insert into users table
    const userResult = await query(
      `
      INSERT INTO users
      (first_name, last_name, preferred_name, email, password, title, dept, created_at)
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
      `,
      [first_name, last_name, preferred_name, email, password_hash, title, dept, new Date()]
    );

    const userId = userResult.rows[0].id;

    // Insert into roles table
    await query(
      `
      INSERT INTO roles
      (user_id, role_name, created_at)
      VALUES
      ($1, $2, $3)
      `,
      [userId, role, new Date()]
    );

    // Commit the transaction
    await query('COMMIT');

    res.status(201).json({ userId, role });
  } catch (error) {
    // Rollback the transaction in case of error
    await query('ROLLBACK');
    console.error('Error inserting data:', error.stack);
    res.status(500).send('Server error');
  }
});

export default router;