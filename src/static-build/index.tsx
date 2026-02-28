/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { h } from 'preact';
import { copyFileSync } from 'fs';
import { join as joinPath, resolve as resolvePath } from 'path';

import { renderPage, writeFiles } from './utils';
import IndexPage from './pages/index';
import PrivacyPage from './pages/privacy';
import TermsPage from './pages/terms';
import CompressImagesOnlinePage from './pages/guides/compress-images-online';
import JpgVsPngVsWebpVsAvifPage from './pages/guides/jpg-vs-png-vs-webp-vs-avif';
import CompressImagesForWebPage from './pages/guides/compress-images-for-web';
import WhatIsWebpPage from './pages/guides/what-is-webp';
import NotFoundPage from './pages/404';
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';
import { blogPosts } from './pages/blog/posts';
import { initI18n, getStrings, supportedLocales } from 'shared/i18n';
import type { Locale } from 'shared/i18n';
import * as iconLargeMaskable from 'img-url:static-build/assets/logo-fondo-blanco.png';
import * as iconLarge from 'img-url:static-build/assets/logo.png';
import * as screenshot1 from 'img-url:static-build/assets/screenshot1.png';
import * as screenshot2 from 'img-url:static-build/assets/screenshot2.jpg';
import * as screenshot3 from 'img-url:static-build/assets/screenshot3.jpg';
import * as screenshot4 from 'img-url:static-build/assets/screenshot4.png';
import * as screenshot5 from 'img-url:static-build/assets/screenshot5.jpg';
import * as screenshot6 from 'img-url:static-build/assets/screenshot6.jpg';
import dedent from 'dedent';
import { lookup as lookupMime } from 'mime-types';

interface Dimensions {
  width: number;
  height: number;
}

const manifestSize = ({ width, height }: Dimensions) => `${width}x${height}`;
const formFactor = ({ width, height }: Dimensions) =>
  width > height ? 'wide' : 'narrow';

const screenshots = [
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
  screenshot6,
].map((screenshot) => ({
  src: screenshot.default,
  type: lookupMime(screenshot.default),
  sizes: manifestSize(screenshot),
  form_factor: formFactor(screenshot),
}));

interface Output {
  [outputPath: string]: string;
}

function renderLocalePage(locale: Locale, Component: any, props: any = {}) {
  const strings = getStrings(locale);
  initI18n(locale, strings);
  return renderPage(<Component locale={locale} strings={strings} {...props} />);
}

// Generate sitemap with hreflang alternates
const sitemapUrls = [
  { path: '', enPath: '/', esPath: '/es/' },
  { path: 'privacy', enPath: '/privacy', esPath: '/es/privacy' },
  { path: 'terms', enPath: '/terms', esPath: '/es/terms' },
  {
    path: 'guides/compress-images-online',
    enPath: '/guides/compress-images-online',
    esPath: '/es/guides/compress-images-online',
  },
  {
    path: 'guides/jpg-vs-png-vs-webp-vs-avif',
    enPath: '/guides/jpg-vs-png-vs-webp-vs-avif',
    esPath: '/es/guides/jpg-vs-png-vs-webp-vs-avif',
  },
  {
    path: 'guides/compress-images-for-web',
    enPath: '/guides/compress-images-for-web',
    esPath: '/es/guides/compress-images-for-web',
  },
  {
    path: 'guides/what-is-webp',
    enPath: '/guides/what-is-webp',
    esPath: '/es/guides/what-is-webp',
  },
  { path: 'blog', enPath: '/blog', esPath: '/es/blog' },
  ...blogPosts.map((post) => ({
    path: `blog/${post.slug}`,
    enPath: `/blog/${post.slug}`,
    esPath: `/es/blog/${post.slug}`,
  })),
];

const sitemapXml = dedent`
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${sitemapUrls
      .map(
        ({ enPath, esPath }) => `
    <url>
      <loc>https://shrinkimg.com${enPath}</loc>
      <xhtml:link rel="alternate" hreflang="en" href="https://shrinkimg.com${enPath}" />
      <xhtml:link rel="alternate" hreflang="es" href="https://shrinkimg.com${esPath}" />
      <xhtml:link rel="alternate" hreflang="x-default" href="https://shrinkimg.com${enPath}" />
    </url>
    <url>
      <loc>https://shrinkimg.com${esPath}</loc>
      <xhtml:link rel="alternate" hreflang="en" href="https://shrinkimg.com${enPath}" />
      <xhtml:link rel="alternate" hreflang="es" href="https://shrinkimg.com${esPath}" />
      <xhtml:link rel="alternate" hreflang="x-default" href="https://shrinkimg.com${enPath}" />
    </url>`,
      )
      .join('')}
  </urlset>
`;

const toOutput: Output = {
  // English pages (root)
  'index.html': renderLocalePage('en', IndexPage),
  'privacy/index.html': renderLocalePage('en', PrivacyPage),
  'terms/index.html': renderLocalePage('en', TermsPage),

  // Spanish pages
  'es/index.html': renderLocalePage('es', IndexPage),
  'es/privacy/index.html': renderLocalePage('es', PrivacyPage),
  'es/terms/index.html': renderLocalePage('es', TermsPage),

  // Guide pages (English)
  'guides/compress-images-online/index.html': renderLocalePage(
    'en',
    CompressImagesOnlinePage,
  ),
  'guides/jpg-vs-png-vs-webp-vs-avif/index.html': renderLocalePage(
    'en',
    JpgVsPngVsWebpVsAvifPage,
  ),
  'guides/compress-images-for-web/index.html': renderLocalePage(
    'en',
    CompressImagesForWebPage,
  ),
  'guides/what-is-webp/index.html': renderLocalePage('en', WhatIsWebpPage),

  // Guide pages (Spanish)
  'es/guides/compress-images-online/index.html': renderLocalePage(
    'es',
    CompressImagesOnlinePage,
  ),
  'es/guides/jpg-vs-png-vs-webp-vs-avif/index.html': renderLocalePage(
    'es',
    JpgVsPngVsWebpVsAvifPage,
  ),
  'es/guides/compress-images-for-web/index.html': renderLocalePage(
    'es',
    CompressImagesForWebPage,
  ),
  'es/guides/what-is-webp/index.html': renderLocalePage('es', WhatIsWebpPage),

  // Blog pages
  'blog/index.html': renderLocalePage('en', BlogIndex),
  'es/blog/index.html': renderLocalePage('es', BlogIndex),

  // 404 page
  '404.html': renderPage(<NotFoundPage />),

  'manifest.json': JSON.stringify({
    name: 'ShrinkImg',
    short_name: 'ShrinkImg',
    start_url: '/?utm_medium=PWA&utm_source=launcher',
    display: 'standalone',
    orientation: 'any',
    background_color: '#FAFCFD',
    theme_color: '#2EC4B6',
    icons: [
      {
        src: iconLarge.default,
        type: lookupMime(iconLarge.default),
        sizes: manifestSize(iconLarge),
      },
      {
        src: iconLargeMaskable.default,
        type: lookupMime(iconLargeMaskable.default),
        sizes: manifestSize(iconLargeMaskable),
        purpose: 'maskable',
      },
    ],
    description:
      'Free online image compressor. Shrink JPG, PNG, WebP and AVIF files instantly in your browser. No upload needed — 100% private.',
    lang: 'en',
    categories: ['photo', 'productivity', 'utilities'],
    screenshots,
    share_target: {
      action: '/?utm_medium=PWA&utm_source=share-target&share-target',
      method: 'POST',
      enctype: 'multipart/form-data',
      params: {
        files: [
          {
            name: 'file',
            accept: ['image/*'],
          },
        ],
      },
    },
  }),
  _headers: dedent`
    /*
      Cache-Control: no-cache

    # I don't think Rollup is cache-busting files correctly.
    #/c/*
    #  Cache-Control: max-age=31536000

    # COOP+COEP for WebAssembly threads.
    /*
      Cross-Origin-Embedder-Policy: credentialless
      Cross-Origin-Opener-Policy: same-origin
  `,
  'ads.txt': `google.com, pub-5131765795912837, DIRECT, f08c47fec0942fa0\n`,
  'robots.txt': dedent`
    User-agent: *
    Allow: /
    Sitemap: https://shrinkimg.com/sitemap.xml
  `,
  'sitemap.xml': sitemapXml,
  _redirects: dedent`
    /* /404.html 404
  `,
};

// Generate individual blog post pages
for (const post of blogPosts) {
  toOutput[`blog/${post.slug}/index.html`] = renderLocalePage('en', BlogPost, {
    post,
  });
  toOutput[`es/blog/${post.slug}/index.html`] = renderLocalePage(
    'es',
    BlogPost,
    { post },
  );
}

writeFiles(toOutput);

// Copy favicon.ico to the root of the build output so Google can find it at /favicon.ico
const faviconSrc = resolvePath('src/static-build/assets/favicon.ico');
const faviconDest = joinPath('.tmp', 'build', 'static', 'favicon.ico');
copyFileSync(faviconSrc, faviconDest);
