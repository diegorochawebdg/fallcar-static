#!/usr/bin/env node
// Atualiza src/data/instagram.json e baixa as imagens para public/img/instagram/.
// Uso: IG_USER_ID=... IG_TOKEN=... node scripts/fetch-instagram.mjs
// Sem as variáveis de ambiente, sai sem erro e mantém o JSON atual (o build não quebra).

import { writeFile, mkdir } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const USER_ID = process.env.IG_USER_ID;
const TOKEN = process.env.IG_TOKEN;
const LIMIT = 8;
const OUT_JSON = new URL('../src/data/instagram.json', import.meta.url);
const OUT_DIR = new URL('../public/img/instagram/', import.meta.url);

if (!USER_ID || !TOKEN) {
  console.warn('[instagram] IG_USER_ID/IG_TOKEN ausentes — mantendo o JSON atual.');
  process.exit(0);
}

const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
const url = 'https://graph.instagram.com/' + USER_ID + '/media?fields=' + fields +
  '&limit=' + LIMIT + '&access_token=' + TOKEN;

try {
  const res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  const items = (data.data || []).filter(m => m.media_type !== 'VIDEO' || m.thumbnail_url).slice(0, LIMIT);
  if (!items.length) throw new Error('resposta sem posts');

  await mkdir(OUT_DIR, { recursive: true });
  const posts = [];

  for (let i = 0; i < items.length; i++) {
    const m = items[i];
    const src = m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url;
    const name = String(i + 1).padStart(2, '0') + '.jpg';
    const bin = await fetch(src);
    if (!bin.ok) throw new Error('imagem HTTP ' + bin.status);
    await writeFile(new URL(name, OUT_DIR), Buffer.from(await bin.arrayBuffer()));
    posts.push({
      image: '/img/instagram/' + name,
      caption: (m.caption || '').replace(/\s+/g, ' ').trim(),
      permalink: m.permalink,
      date: m.timestamp
    });
  }

  await writeFile(OUT_JSON, JSON.stringify({ updatedAt: new Date().toISOString(), posts }, null, 2) + '\n');
  console.log('[instagram] ' + posts.length + ' posts atualizados.');
} catch (err) {
  // Nunca derruba o build: mantém o último JSON bom.
  console.warn('[instagram] falhou (' + err.message + ') — mantendo o JSON atual.');
  process.exit(0);
}
