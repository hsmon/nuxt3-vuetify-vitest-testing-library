/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from 'vite-plugin-vuetify';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins:
    [
      {
      name: 'vitest-plugin-beforeall',
      config: () => ({
        test: {
          setupFiles: [
            fileURLToPath(new URL('./vitest/beforeAll.ts', import.meta.url)),
          ],
        },
      }),
    },
      vue(),
      // Vuetify Loader
      // https://github.com/vuetifyjs/vuetify-loader
      vuetify({
        autoImport: true,
        // styles: { configFile: './src/styles/variables.scss' },
      }),
    ]
  ,

  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },

  test: {
    root: '.',
    globals: true,
    globalSetup: [fileURLToPath(new URL('./vitest/setup.ts', import.meta.url))],
    environment: "happy-dom",
    deps: {
      inline: ['vuetify'],
    },
  },
});