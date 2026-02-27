import { h, FunctionalComponent } from 'preact';

import baseCss from 'css:../../index/base.css';
import legalCss from 'css:../../legal-styles.css';
import guideCss from 'css:../guide-styles.css';
import initialCss from 'initial-css:';
import favicon from 'url:static-build/assets/favicon.ico';
import ogImage from 'url:static-build/assets/logo-w.png';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';
import type { Locale } from 'shared/i18n';
import { t } from 'shared/i18n';
import ContentEn from './en';
import ContentEs from './es';

interface Props {
  locale: Locale;
}

const contentMap: Record<Locale, FunctionalComponent> = {
  en: ContentEn,
  es: ContentEs,
};

const titleMap: Record<Locale, string> = {
  en: 'What is WebP and Why Should You Use It? — ShrinkImg',
  es: '¿Qué es WebP y Por Qué Deberías Usarlo? — ShrinkImg',
};

const descriptionMap: Record<Locale, string> = {
  en: 'Learn what WebP is, its advantages over JPG and PNG, browser support, and how to convert your images to WebP for smaller file sizes.',
  es: 'Aprendé qué es WebP, sus ventajas sobre JPG y PNG, compatibilidad con navegadores y cómo convertir tus imágenes a WebP para archivos más pequeños.',
};

const slug = 'guides/what-is-webp';

const WhatIsWebpPage: FunctionalComponent<Props> = ({ locale }) => {
  const Content = contentMap[locale];
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `${siteOrigin}${prefix}/${slug}`;

  return (
    <html lang={locale} class="legal">
      <head>
        <title>{titleMap[locale]}</title>
        <meta name="description" content={descriptionMap[locale]} />
        <meta property="og:title" content={titleMap[locale]} />
        <meta property="og:description" content={descriptionMap[locale]} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${siteOrigin}${ogImage}`} />
        <meta property="og:image:width" content="1015" />
        <meta property="og:image:height" content="1015" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:locale"
          content={locale === 'en' ? 'en_US' : 'es_AR'}
        />
        <meta
          property="og:locale:alternate"
          content={locale === 'en' ? 'es_AR' : 'en_US'}
        />
        <meta property="article:published_time" content="2026-02-27" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={titleMap[locale]} />
        <meta name="twitter:description" content={descriptionMap[locale]} />
        <meta name="twitter:image" content={`${siteOrigin}${ogImage}`} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#2EC4B6" />
        <link rel="shortcut icon" href={favicon} />
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
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={`${siteOrigin}/${slug}`} />
        <link rel="alternate" hrefLang="es" href={`${siteOrigin}/es/${slug}`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteOrigin}/${slug}`}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5131765795912837"
          crossOrigin="anonymous"
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
        <style
          dangerouslySetInnerHTML={{
            __html: escapeStyleScriptContent(legalCss),
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: escapeStyleScriptContent(guideCss),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: escapeStyleScriptContent(
              JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: 'What is WebP and Why Should You Use It?',
                description: descriptionMap[locale],
                image: `${siteOrigin}${ogImage}`,
                datePublished: '2026-02-27',
                author: {
                  '@type': 'Organization',
                  name: 'ShrinkImg',
                  url: siteOrigin,
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'ShrinkImg',
                  url: siteOrigin,
                },
              }),
            ),
          }}
        />
      </head>
      <body>
        <div class="legal-page">
          <nav class="legal-nav">
            <a href={prefix || '/'}>{t('legal.backToShrinkImg')}</a>
          </nav>
          <Content />
        </div>
      </body>
    </html>
  );
};

export default WhatIsWebpPage;
