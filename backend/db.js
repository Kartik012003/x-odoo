const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST || process.env.PGHOST || 'localhost',
  port: parseInt(process.env.DB_PORT || process.env.PGPORT || '5432'),
  database: process.env.DB_NAME || process.env.PGDATABASE || 'x_odoo',
  user: process.env.DB_USER || process.env.PGUSER || 'postgres',
  password: process.env.DB_PASSWORD || process.env.PGPASSWORD || 'postgres',
});

async function initDB() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        company VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Database tables initialized');
  } finally {
    client.release();
  }
}

module.exports = { pool, initDB };
