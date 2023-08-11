// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://197c96554da44995bb1d1f4688352a2a@o1022345.ingest.sentry.io/5991928',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  release: '0.0.5',

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
});
