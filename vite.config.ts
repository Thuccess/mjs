import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const IMAGE_EXT = /\.(jpe?g|png|gif|webp|avif)$/i;

function galleryDir(root: string) {
  return path.resolve(root, 'public/gallery');
}

function listGalleryFileUrls(root: string): string[] {
  const dir = galleryDir(root);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => {
      if (name === 'manifest.json' || name.startsWith('.')) return false;
      const full = path.join(dir, name);
      return fs.statSync(full).isFile() && IMAGE_EXT.test(name);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((name) => `/gallery/${encodeURIComponent(name)}`);
}

function galleryManifestPlugin(root: string): Plugin {
  return {
    name: 'gallery-manifest',
    buildStart() {
      const dir = galleryDir(root);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const files = listGalleryFileUrls(root);
      fs.writeFileSync(
        path.join(dir, 'manifest.json'),
        `${JSON.stringify({ files }, null, 2)}\n`,
        'utf8',
      );
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/gallery/manifest.json') {
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ files: listGalleryFileUrls(root) }));
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const root = __dirname;
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), galleryManifestPlugin(root)],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
