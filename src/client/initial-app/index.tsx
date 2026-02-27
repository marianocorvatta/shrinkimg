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
import { h, render } from 'preact';
import App from './App';
import { initI18n } from 'shared/i18n';
import type { Locale, TranslationStrings } from 'shared/i18n';

const root = document.getElementById('app') as HTMLElement;

async function main() {
  if (!__PRODUCTION__) await import('preact/debug');

  const locale = ((window as any).__SHRINKIMG_LOCALE__ || 'en') as Locale;
  const strings = (window as any).__SHRINKIMG_STRINGS__ as
    | TranslationStrings
    | undefined;
  initI18n(locale, strings);

  render(<App />, root);
}

main();

// Analytics
{
  // Determine the current display mode.
  const displayMode =
    navigator.standalone ||
    window.matchMedia('(display-mode: standalone)').matches
      ? 'standalone'
      : 'browser';

  // Setup analytics
  window.ga = window.ga || ((...args) => (ga.q = ga.q || []).push(args));
  ga('create', 'UA-128752250-1', 'auto');
  ga('set', 'transport', 'beacon');
  ga('set', 'dimension1', displayMode);
  ga('send', 'pageview', '/index.html', { title: 'ShrinkImg' });
  // Load the GA script without keeping the browser spinner going.
  addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = 'https://www.google-analytics.com/analytics.js';
    document.head.appendChild(script);
  });
}
