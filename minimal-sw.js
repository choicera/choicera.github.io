// Minimal Service Worker - only prevents HTML caching
// For GitHub Pages deployment

// Install - just skip waiting
self.addEventListener('install', () => {
  self.skipWaiting();
});

// Activate - claim clients immediately
self.addEventListener('activate', () => {
  self.clients.claim();
});

// Fetch - prevent HTML caching
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Handle HTML files and Service Worker itself
  if (url.pathname === '/' || 
      url.pathname.endsWith('.html') || 
      url.pathname.endsWith('/') ||
      url.pathname === '/minimal-sw.js') {
    
    // Always fetch from network, never cache
    event.respondWith(
      fetch(event.request, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      })
    );
  }
  // Let everything else (CSS, JS, images) be handled normally
});
