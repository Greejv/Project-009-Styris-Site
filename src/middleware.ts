import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), interest-cohort=()');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "img-src 'self' data: https://www.facebook.com https://*.google-analytics.com https://*.googletagmanager.com https://*.doubleclick.net",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://connect.facebook.net",
      "script-src-elem 'self' https://*.googletagmanager.com https://*.google-analytics.com https://connect.facebook.net",
      "font-src 'self' data:",
      "connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.doubleclick.net https://vitals.vercel-analytics.com https://va.vercel-scripts.com https://connect.facebook.net https://*.facebook.com https://*.run.app https://*.on.aws",
      "form-action 'self'",
      "base-uri 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
    ].join('; ')
  );

  return response;
});
