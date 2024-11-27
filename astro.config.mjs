import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
import { applyPolyfills } from 'astro/app/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(
    {
      applyBaseStyles: false
    }
  )]
});