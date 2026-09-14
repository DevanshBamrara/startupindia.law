import { resolve } from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';
import { onRequestPost, onRequestOptions } from './functions/api/submit.js';

function readDevVars() {
  const varsPath = resolve(__dirname, '.dev.vars');
  const env = {};
  if (fs.existsSync(varsPath)) {
    const lines = fs.readFileSync(varsPath, 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim();
      }
    }
  }
  return env;
}

export default defineConfig({
  plugins: [
    {
      name: 'cloudflare-pages-api-local-dev',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const pathname = req.url ? req.url.split('?')[0] : '';
          if (pathname !== '/api/submit') {
            return next();
          }

          const devEnv = { ...process.env, ...readDevVars() };

          if (req.method === 'OPTIONS') {
            const webReq = new Request(`http://${req.headers.host || 'localhost'}${req.url}`, {
              method: 'OPTIONS',
              headers: req.headers,
            });
            const webRes = await onRequestOptions({ request: webReq, env: devEnv });
            res.statusCode = webRes.status;
            webRes.headers.forEach((val, key) => res.setHeader(key, val));
            return res.end();
          }

          if (req.method === 'POST') {
            let bodyStr = '';
            req.on('data', (chunk) => {
              bodyStr += chunk;
            });
            req.on('end', async () => {
              try {
                const webReq = new Request(`http://${req.headers.host || 'localhost'}${req.url}`, {
                  method: 'POST',
                  headers: req.headers,
                  body: bodyStr || undefined,
                });

                const webRes = await onRequestPost({ request: webReq, env: devEnv });
                res.statusCode = webRes.status;
                webRes.headers.forEach((val, key) => res.setHeader(key, val));
                const responseText = await webRes.text();
                res.end(responseText);
              } catch (err) {
                console.error('Local API dev error:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Local server error: ' + err.message }));
              }
            });
            return;
          }

          next();
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        work: resolve(__dirname, 'work.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
        updates: resolve(__dirname, 'updates.html'),
      },
    },
  },
});
