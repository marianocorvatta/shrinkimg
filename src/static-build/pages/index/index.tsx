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
import ogImage from 'url:static-build/assets/logo-fondo-blanco.png';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';
import Intro from 'shared/prerendered-app/Intro';
import snackbarCss from 'css:../../../shared/custom-els/snack-bar/styles.css';
import * as snackbarStyle from '../../../shared/custom-els/snack-bar/styles.css';
import type { Locale, TranslationStrings } from 'shared/i18n';
import { t } from 'shared/i18n';

interface Props {
  locale: Locale;
  strings: TranslationStrings;
}

const Index: FunctionalComponent<Props> = ({ locale, strings }) => {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl =
    locale === 'en' ? `${siteOrigin}/` : `${siteOrigin}/${locale}/`;

  return (
    <html lang={locale}>
      <head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:title" content="ShrinkImg" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteOrigin}${ogImage}`} />
        <meta
          property="og:image:secure_url"
          content={`${siteOrigin}${ogImage}`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1015" />
        <meta property="og:image:height" content="1015" />
        <meta property="og:image:alt" content={t('meta.ogAlt')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:locale"
          content={locale === 'en' ? 'en_US' : 'es_AR'}
        />
        <meta
          property="og:locale:alternate"
          content={locale === 'en' ? 'es_AR' : 'en_US'}
        />
        <meta name="twitter:title" content="ShrinkImg" />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content={`${siteOrigin}${ogImage}`} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
        <link rel="apple-touch-icon" href={ogImage} />
        <meta name="theme-color" content="#2EC4B6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={`${siteOrigin}/`} />
        <link rel="alternate" hrefLang="es" href={`${siteOrigin}/es/`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteOrigin}/`} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5131765795912837"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: escapeStyleScriptContent(
              JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebApplication',
                name: 'ShrinkImg',
                url: siteOrigin,
                description: t('structuredData.description'),
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
                    name: t('faq.q1'),
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: t('faq.a1'),
                    },
                  },
                  {
                    '@type': 'Question',
                    name: t('faq.q2'),
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: t('faq.a2'),
                    },
                  },
                  {
                    '@type': 'Question',
                    name: t('faq.q3'),
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: t('faq.a3'),
                    },
                  },
                  {
                    '@type': 'Question',
                    name: t('faq.q4'),
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: t('faq.a4'),
                    },
                  },
                ],
              }),
            ),
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: escapeStyleScriptContent(baseCss),
          }}
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
                <div class={snackbarStyle.text}>{t('noscript.error')}</div>
                <a class={snackbarStyle.button} href="/">
                  {t('noscript.reload')}
                </a>
              </div>
            </snack-bar>
          </noscript>
        </div>
        <div id="cookie-consent" class="cookie-consent" style="display:none">
          <p>{t('cookie.message')}</p>
          <button id="cookie-accept" class="cookie-accept-btn">
            {t('cookie.accept')}
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
            __html: escapeStyleScriptContent(
              `window.__SHRINKIMG_LOCALE__=${JSON.stringify(locale)};` +
                `window.__SHRINKIMG_STRINGS__=${JSON.stringify(strings)};`,
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
};

export default Index;
