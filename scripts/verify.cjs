// scripts/verify.cjs
const fs = require('fs');
const path = require('path');

function mustExist(p) {
  const ok = fs.existsSync(p);
  if (!ok) {
    console.error(`❌ Missing required file: ${p}`);
    process.exit(1);
  }
  console.log(`✅ Found: ${p}`);
}

function mustBeJson(p) {
  mustExist(p);
  try {
    JSON.parse(fs.readFileSync(p, 'utf8'));
    console.log(`✅ Valid JSON: ${p}`);
  } catch (e) {
    console.error(`❌ Invalid JSON in ${p}: ${e.message}`);
    process.exit(1);
  }
}

console.log('--- CI sanity check ---');

// Core next-intl + App Router structure
mustExist(path.join('next-intl.config.ts'));
mustExist(path.join('middleware.ts'));

// App structure
mustExist(path.join('app'));
mustExist(path.join('app', '[locale]'));
mustExist(path.join('app', '[locale]', 'layout.tsx'));
mustExist(path.join('app', '[locale]', 'page.tsx'));

// Global CSS must live at app/globals.css and be imported as ../globals.css from app/[locale]/layout.tsx
mustExist(path.join('app', 'globals.css'));

// Messages
mustExist(path.join('messages'));
mustBeJson(path.join('messages', 'en.json'));
mustBeJson(path.join('messages', 'es.json'));

// Tailwind/PostCSS optional but recommended
if (fs.existsSync('tailwind.config.ts')) {
  console.warn('ℹ️ tailwind.config.ts detected. Consider renaming to tailwind.config.js on Netlify.');
}
if (!fs.existsSync('tailwind.config.js')) {
  console.warn('ℹ️ tailwind.config.js not found (ok if you are not using Tailwind).');
}
if (!fs.existsSync('postcss.config.js')) {
  console.warn('ℹ️ postcss.config.js not found (ok if you are not using PostCSS).');
}

// next.config.mjs check for withNextIntl (best effort)
if (fs.existsSync('next.config.mjs')) {
  const cfg = fs.readFileSync('next.config.mjs', 'utf8');
  if (!cfg.includes('next-intl/plugin')) {
    console.warn('ℹ️ next.config.mjs does not appear to use next-intl/plugin. If you rely on routing, add it.');
  } else {
    console.log('✅ next.config.mjs references next-intl/plugin');
  }
} else {
  console.warn('ℹ️ next.config.mjs not found.');
}

console.log('--- CI sanity check complete ---');
