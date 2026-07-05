const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const { initDB } = require('./db');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

if (isProduction) {
  const distPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

async function start() {
  await initDB();
  app.listen(PORT, () => {
    console.log(`X Odoo backend running on port ${PORT}`);
  });
}

start().catch(console.error);
