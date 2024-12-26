// server/config/database.js

const { Pool } = require('pg');
require('dotenv').config(); // Ensure environment variables are sourced

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',          // Database host
  user: process.env.DB_USER || 'postgres',           // Database username
  password: process.env.DB_PASSWORD || 'V0nwwCzXBfWH2*4$', // Database password
  database: process.env.DB_NAME || 'comm-impact-reporting_dev', // Database name
  port: process.env.DB_PORT || 5432,                  // Database port
});

// Function to connect to the database (optional)
pool.connect()
  .then(() => console.log('PostgreSQL connected successfully'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = pool; // Export the pool for use in other files
