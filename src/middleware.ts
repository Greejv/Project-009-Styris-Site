import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      // GA4 collect pixel, Meta Pixel, Google Ads/DoubleClick tracking pixels
      "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com https://www.facebook.com https://*.facebook.com",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://connect.facebook.net",
      "script-src-elem 'self' https://*.googletagmanager.com https://*.google-analytics.com https://connect.facebook.net",
      "font-src 'self' data:",
      // GA4 event beacons, Meta Pixel events (incl. CAPI run.app proxy), Vercel Analytics
      "connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com https://connect.facebook.net https://*.facebook.com https://vitals.vercel-analytics.com https://va.vercel-scripts.com https://*.run.app https://*.on.aws",
      // Meta Pixel opens a facebook.com iframe for cookie matching
      "frame-src 'self' https://*.facebook.com https://*.googletagmanager.com https://td.doubleclick.net",
      // Meta Pixel <noscript>/form fallback POSTs to facebook.com/tr
      "form-action 'self' https://www.facebook.com https://*.facebook.com",
      "base-uri 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
    ].join('; ')
  );

  return response;
});
