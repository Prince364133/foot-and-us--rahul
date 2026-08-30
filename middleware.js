/**
 * --------------------------------------------------------------------------
 * 180workspace Traffic Director - Server-Side Edge Middleware
 * --------------------------------------------------------------------------
 * 
 * 📍 WHERE TO PLACE:
 * Place this file at the root of your project:
 * 👉 `middleware.js` (or `middleware.ts`)
 * 
 * 🛡️ HOW IT WORKS:
 * Runs on Vercel/Edge network BEFORE any HTML is generated or sent to the browser.
 * Ad Review bots (Google AdsBot, Meta Crawler) are served the clean safe page with HTTP 200.
 * Real targeted human traffic is redirected with HTTP 302.
 * 
 * 🔒 SECURITY ADVANTAGE:
 * 0% Footprint in HTML. No external script tags visible to ad crawlers (view-source is 100% clean).
 */

export const config = {
  // Execute middleware only on page routes, ignoring static assets, fonts, and images
  matcher: ['/((?!assets|_next|favicon.ico|.*\\..*).*)'],
};

export default async function middleware(request) {
  // 1. Extract visitor identity headers (Handles Cloudflare & Reverse Proxies)
  const ip = request.headers.get('cf-connecting-ip') || 
             request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';
  const userAgent = request.headers.get('user-agent') || '';
  const referrer = request.headers.get('referer') || request.headers.get('referrer') || '';
  const url = request.url;

  try {
    // 2. Edge Evaluation Request with 1.2s timeout
    // NOTE: Use https://app.180workspace.com for production deployments on Vercel
    const apiUrl = process.env.TRAFFIC_DIRECTOR_API_URL || 'http://localhost:3002/api/v1/traffic-director/evaluate/foodandus';

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip, userAgent, referrer, url }),
      signal: AbortSignal.timeout(1200)
    });

    if (res.ok) {
      const data = await res.json();
      
      // 3. If evaluated as Target Human -> Redirect with 302
      if (data?.success && data?.route === 'target' && data?.destinationUrl) {
        // Loop Guard: Prevent redirect loop if visitor is already on destination
        if (url !== data.destinationUrl && !url.startsWith(data.destinationUrl)) {
          return Response.redirect(data.destinationUrl, 302);
        }
      }
    }
  } catch (err) {
    // 4. Fail-Open: On timeout or network error, silently proceed to serve the normal safe page
  }
}
