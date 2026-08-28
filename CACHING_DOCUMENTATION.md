# Caching Implementation Documentation

## Overview
This document describes the caching implementation added to the Tagbilaran Tourism website to improve performance through browser caching of static assets.

## What Caching Was Added

HTTP `Cache-Control` headers have been configured in the Express server (`server.ts`) to enable browser caching for static assets. The caching strategy uses different cache durations based on asset type:

### Cache Policies Implemented

1. **Hashed/Versioned Assets (1 year cache)**
   - Files: `.js`, `.css` files in `dist/assets/`
   - Header: `Cache-Control: public, max-age=31536000, immutable`
   - Reason: Vite builds these with content hashes in filenames, so URLs change when content changes

2. **Fonts (1 year cache)**
   - Files: `.woff`, `.woff2`, `.ttf`, `.otf`
   - Header: `Cache-Control: public, max-age=31536000, immutable`
   - Reason: Fonts rarely change and can be safely cached long-term

3. **Images and Media (24 hours cache)**
   - Files: `.webp`, `.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`, `.webm`, `.mp4`
   - Header: `Cache-Control: public, max-age=86400`
   - Reason: Images may be updated, so shorter cache allows for changes while still providing performance benefits

4. **HTML (no cache)**
   - Files: `.html`
   - Header: `Cache-Control: no-cache`
   - Reason: HTML should always be fresh to ensure users get the latest content

5. **Other Static Assets (1 hour cache)**
   - Files: Other static files
   - Header: `Cache-Control: public, max-age=3600`
   - Reason: Moderate cache for miscellaneous assets

## Where the Caching Configuration Is Located

The caching configuration is in `server.ts` at the top of the file (lines 17-43):

```typescript
// Cache-Control header helper for static assets
const setCacheHeaders = (res: any, filePath: string) => {
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
```

This helper function is called in all static file serving middleware throughout the server to apply appropriate cache headers.

## What Type of Hosting/Server Will Support It

This caching implementation works with:

1. **Custom Node.js/Express servers** - The current setup uses Express, so any Node.js hosting will support this
2. **VPS/Dedicated servers** - Any server where you can run Node.js applications
3. **Platform-as-a-Service (PaaS)** - Services like Render, Railway, Fly.io, etc. that support Node.js
4. **Container-based hosting** - Docker containers running the Node.js server
5. **Cloud providers** - AWS EC2, Google Cloud Compute, Azure VMs, etc.

The caching is implemented at the application level (Express middleware), so it's independent of the hosting provider's specific caching features.

## What You Need to Configure When Choosing a Hosting Provider

### For Node.js/Express Hosting (Current Setup)

**No additional configuration needed** - The caching is already implemented in your Express server. Simply:

1. Deploy your application following the hosting provider's Node.js deployment instructions
2. Ensure the `server.ts` file is included in your deployment
3. The caching headers will be automatically applied by your Express server

### For Static Hosting (If You Switch to Static Deployment)

If you decide to switch to a static hosting provider (like Vercel, Netlify, or GitHub Pages), you would need to:

1. **Build the static files** using `npm run build`
2. **Configure caching** through the hosting provider's configuration files:
   - **Vercel**: Add `vercel.json` with `headers` configuration
   - **Netlify**: Add `netlify.toml` with `[[headers]]` configuration
   - **GitHub Pages**: Not supported natively (would need CDN)
3. **Remove the Express server** since static hosting doesn't use it

### For CDN Configuration (Optional Enhancement)

If you want to add a CDN (Content Delivery Network) for additional performance:

1. Configure your CDN to respect the `Cache-Control` headers set by your server
2. Most CDNs automatically respect these headers by default
3. You may need to configure cache purging rules if you update assets frequently

## Testing the Caching

To verify caching is working:

1. Open your browser's Developer Tools (F12)
2. Go to the Network tab
3. Reload your page
4. Check the response headers for static assets
5. Look for `Cache-Control` headers with the appropriate values
6. On subsequent reloads, assets should show "from disk cache" or "from memory cache"

## Important Notes

- The caching implementation does NOT change how images load, lazy loading, or any other loading behavior
- It ONLY adds HTTP cache headers to enable browser caching
- The website's appearance and functionality remain exactly the same
- No images were compressed, resized, converted, or replaced
- The WebM video was not modified
- No UI, layout, styling, animations, routes, components, or functionality were changed
