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
import { h, FunctionalComponent } from 'preact';

import baseCss from 'css:./base.css';
import initialCss from 'initial-css:';
import { allSrc } from 'client-bundle:client/initial-app';
import favicon from 'url:static-build/assets/favicon.ico';
import ogImage from 'url:static-build/assets/icon-large-maskable.png';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';
import Intro from 'shared/prerendered-app/Intro';
import snackbarCss from 'css:../../../shared/custom-els/snack-bar/styles.css';
import * as snackbarStyle from '../../../shared/custom-els/snack-bar/styles.css';

interface Props {}

const Index: FunctionalComponent<Props> = () => (
  <html lang="en">
    <head>
      <title>ShrinkImg — Free Online Image Compressor</title>
      <meta
        name="description"
        content="Free online image compressor. Shrink JPG, PNG, WebP and AVIF files instantly in your browser. No upload needed — 100% private."
      />
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content="ShrinkImg" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteOrigin}${ogImage}`} />
      <meta
        property="og:image:secure_url"
        content={`${siteOrigin}${ogImage}`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta
        property="og:image:alt"
        content="ShrinkImg — free online image compressor"
      />
      <meta
        name="og:description"
        content="Free online image compressor. Shrink JPG, PNG, WebP and AVIF files instantly in your browser. No upload needed — 100% private."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="shortcut icon" href={favicon} />
      <link rel="apple-touch-icon" href={ogImage} />
      <meta name="theme-color" content="#2EC4B6" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={siteOrigin} />
      {/* PASTE GOOGLE ADSENSE SCRIPT HERE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: escapeStyleScriptContent(
            JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'ShrinkImg',
              url: siteOrigin,
              description:
                'Free online image compressor. Shrink JPG, PNG, WebP and AVIF files instantly in your browser. No upload needed — 100% private.',
              applicationCategory: 'Multimedia',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: escapeStyleScriptContent(
            JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is ShrinkImg free?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, 100% free with no limits.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are my images uploaded to a server?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No, all compression happens in your browser.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What formats are supported?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'JPG, PNG, WebP, AVIF, and more.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much can I reduce file size?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Up to 90% depending on settings and format.',
                  },
                },
              ],
            }),
          ),
        }}
      />
      <style
        dangerouslySetInnerHTML={{ __html: escapeStyleScriptContent(baseCss) }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: escapeStyleScriptContent(initialCss),
        }}
      />
    </head>
    <body>
      <div id="app">
        <Intro />
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: escapeStyleScriptContent(snackbarCss),
            }}
          />
          <snack-bar>
            <div
              class={snackbarStyle.snackbar}
              aria-live="assertive"
              aria-atomic="true"
              aria-hidden="false"
            >
              <div class={snackbarStyle.text}>
                Initialization error: This site requires JavaScript, which is
                disabled in your browser.
              </div>
              <a class={snackbarStyle.button} href="/">
                reload
              </a>
            </div>
          </snack-bar>
        </noscript>
      </div>
      <div id="cookie-consent" class="cookie-consent" style="display:none">
        <p>
          We use cookies for analytics and advertising. By continuing to use
          this site, you agree to our use of cookies.
        </p>
        <button id="cookie-accept" class="cookie-accept-btn">
          Accept
        </button>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: escapeStyleScriptContent(
            `(function(){` +
              `var b=document.getElementById('cookie-consent');` +
              `if(!localStorage.getItem('shrinkimg-cookie-consent')){b.style.display='flex';}` +
              `document.getElementById('cookie-accept').addEventListener('click',function(){` +
              `localStorage.setItem('shrinkimg-cookie-consent','accepted');` +
              `b.style.display='none';` +
              `});` +
              `})();`,
          ),
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: escapeStyleScriptContent(allSrc),
        }}
      />
    </body>
  </html>
);

export default Index;
