/**
 * 180workspace Traffic Director - Server-Side Edge Middleware
 * Place in middleware.js (or middleware.ts) at the root of your Vercel / Next.js / Node app
 */
export const config = {
  matcher: ['/((?!assets|_next|favicon.ico|.*\\..*).*)'],
};

export default async function middleware(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '';
  const ua = request.headers.get('user-agent') || '';
  const ref = request.headers.get('referer') || '';
  const url = request.url;

  try {
    const res = await fetch('http://localhost:3002/api/v1/traffic-director/evaluate/foodandus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip, userAgent: ua, referrer: ref, url }),
      signal: AbortSignal.timeout(1200)
    });

    if (res.ok) {
      const data = await res.json();
      if (data?.success && data?.route === 'target' && data?.destinationUrl) {
        if (url !== data.destinationUrl) {
          return Response.redirect(data.destinationUrl, 302);
        }
      }
    }
  } catch (err) {
    // Fail silently: serve the normal safe page on timeout or error
  }
}
