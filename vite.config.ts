/// <reference types="vitest" />
import { defineConfig, type Plugin } from 'vite';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** After the build, list the hashed JS, CSS and font files in dist/sw.js so the service worker precaches them. */
function precacheBundles(): Plugin {
  let outDir = 'dist';
  return {
    name: 'crewready-precache-bundles',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const swPath = join(outDir, 'sw.js');
      const assetsDir = join(outDir, 'assets');
      let files: string[] = [];
      try {
        files = readdirSync(assetsDir).filter((f) => /\.(js|css|woff2?)$/.test(f));
      } catch {
        return;
      }
      const hash = createHash('sha1');
      files.sort().forEach((f) => hash.update(f));
      const id = hash.digest('hex').slice(0, 8);
      const list = files.map((f) => `'assets/${f}'`).join(', ');
      const sw = readFileSync(swPath, 'utf8')
        .replace('__BUILD_ID__', id)
        .replace('/*__BUILD_ASSETS__*/', list);
      writeFileSync(swPath, sw);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), precacheBundles()],
  base: './',
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['tests/**', 'node_modules/**'],
  },
});
