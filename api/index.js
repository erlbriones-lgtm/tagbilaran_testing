const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());

// Serve static files from dist directory
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Serve all other routes to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = app;
