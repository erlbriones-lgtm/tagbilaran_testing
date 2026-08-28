const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());

// Cache-Control header helper for static assets
const setCacheHeaders = (res, filePath) => {
  const lowerPath = filePath.toLowerCase();
  
  // Hashed/versioned assets from Vite build (immutable cache)
  if (filePath.includes('dist/assets/') && (lowerPath.endsWith('.js') || lowerPath.endsWith('.css'))) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Fonts - long cache as they rarely change
  else if (lowerPath.endsWith('.woff') || lowerPath.endsWith('.woff2') || lowerPath.endsWith('.ttf') || lowerPath.endsWith('.otf')) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Images and media - shorter cache for potential updates
  else if (lowerPath.endsWith('.webp') || lowerPath.endsWith('.jpg') || lowerPath.endsWith('.jpeg') || 
           lowerPath.endsWith('.png') || lowerPath.endsWith('.gif') || lowerPath.endsWith('.svg') ||
           lowerPath.endsWith('.webm') || lowerPath.endsWith('.mp4')) {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }
  // HTML - no cache to ensure fresh content
  else if (lowerPath.endsWith('.html')) {
    res.setHeader('Cache-Control', 'no-cache');
  }
  // Other static assets - moderate cache
  else {
    res.setHeader('Cache-Control', 'public, max-age=3600');
  }
};

// Serve static files from dist directory
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.webp')) {
      res.setHeader('Content-Type', 'image/webp');
    }
    setCacheHeaders(res, filePath);
  }
}));

// Serve all other routes to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = app;
