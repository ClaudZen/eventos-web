// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({


    vite: {
        server: {
            host: "0.0.0.0",
            hmr: { clientPort: 3000 },
            port: 3000,
            watch: { usePolling: true }
        }
    }
});
