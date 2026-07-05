const express = require('express');
const { pool } = require('../db');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const result = await pool.query(
      'INSERT INTO contact_messages (name, email, phone, company, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, company, message]
    );

    res.status(201).json({ message: 'Message sent successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
