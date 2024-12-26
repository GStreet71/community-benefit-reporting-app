import express from 'express';
import bcrypt from 'bcrypt';
import { query } from '../config/db.js'; // Adjusted the path to your db module

const router = express.Router();

// Login route
router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user by email
    const userResult = await query(
      `
      SELECT id, password FROM users WHERE email = $1
      `,
      [email]
    );

    if (userResult.rows.length === 0) {
      return res.status(400).send('Invalid email or password');
    }

    const user = userResult.rows[0];

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send('Invalid email or password');
    }

    // Update last login time
    await query(
      `
      UPDATE users
      SET last_login = $1
      WHERE id = $2
      `,
      [new Date(), user.id]
    );

    res.status(200).json({ userId: user.id });
  } catch (error) {
    console.error('Error logging in:', error.stack);
    res.status(500).send('Server error');
  }
});

export default router;