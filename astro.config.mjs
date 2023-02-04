import { defineConfig } from 'astro/config';

// import image from '@astrojs/image';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import image from "@astrojs/image";


// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.SITE_URL,
  integrations: [tailwind(), alpinejs(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), robotsTxt()]
});