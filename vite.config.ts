import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { promises as fs } from 'fs';
import path from 'path';

function generateSlideManifestPlugin(): Plugin {
  const exts = new Set(['.png', '.jpg', '.jpeg', '.webp']);
  async function ensureManifest(root: string) {
    try {
      const slideDir = path.resolve(root, 'public/assets/slide');
      const files = await fs.readdir(slideDir);
      const images = files
        .filter((f) => exts.has(path.extname(f).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      const manifestPath = path.join(slideDir, 'manifest.json');
      const content = JSON.stringify(images, null, 2) + '\n';
      let existing = '';
      try {
        existing = await fs.readFile(manifestPath, 'utf8');
      } catch {}
      if (existing !== content) {
        await fs.writeFile(manifestPath, content, 'utf8');
        console.log(`[slide-manifest] wrote ${images.length} items to ${path.relative(root, manifestPath)}`);
      }
    } catch (err) {
      console.warn('[slide-manifest] generation skipped:', err);
    }
  }

  return {
    name: 'generate-slide-manifest',
    apply: 'serve',
    async configResolved(config) {
      await ensureManifest(config.root);
    },
    async buildStart() {
      // no-op in serve
    },
  };
}

function generateSlideManifestPluginBuild(): Plugin {
  return {
    name: 'generate-slide-manifest-build',
    apply: 'build',
    async configResolved(config) {
      const exts = new Set(['.png', '.jpg', '.jpeg', '.webp']);
      const slideDir = path.resolve(config.root, 'public/assets/slide');
      try {
        const files = await fs.readdir(slideDir);
        const images = files
          .filter((f) => exts.has(path.extname(f).toLowerCase()))
          .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
        const manifestPath = path.join(slideDir, 'manifest.json');
        await fs.writeFile(manifestPath, JSON.stringify(images, null, 2) + '\n', 'utf8');
        console.log(`[slide-manifest] wrote ${images.length} items to ${path.relative(config.root, manifestPath)}`);
      } catch (err) {
        console.warn('[slide-manifest] generation skipped:', err);
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  return {
    base: isProd ? '/botari/' : '/',
    plugins: [react(), generateSlideManifestPlugin(), generateSlideManifestPluginBuild()],
  };
});
