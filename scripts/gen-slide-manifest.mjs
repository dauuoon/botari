import { promises as fs } from 'fs';
import path from 'path';

const exts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.bmp']);

async function main() {
  const root = process.cwd();
  const slideDir = path.resolve(root, 'public/assets/slide');
  try {
    const files = await fs.readdir(slideDir);
    const images = files
      .filter((f) => exts.has(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const manifestPath = path.join(slideDir, 'manifest.json');
    await fs.writeFile(manifestPath, JSON.stringify(images, null, 2) + '\n', 'utf8');
    console.log(`[gen-slide-manifest] ${images.length} items -> ${path.relative(root, manifestPath)}`);
  } catch (err) {
    console.error('[gen-slide-manifest] Failed:', err);
    process.exitCode = 1;
  }
}

main();
