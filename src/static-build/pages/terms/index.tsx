import { h, FunctionalComponent } from 'preact';

import baseCss from 'css:../index/base.css';
import legalCss from 'css:../legal-styles.css';
import initialCss from 'initial-css:';
import favicon from 'url:static-build/assets/favicon.ico';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';
import type { Locale } from 'shared/i18n';
import { t } from 'shared/i18n';
import TermsContentEn from './en';
import TermsContentEs from './es';

interface Props {
  locale: Locale;
}

const contentMap: Record<Locale, FunctionalComponent> = {
  en: TermsContentEn,
  es: TermsContentEs,
};

const descriptionMap: Record<Locale, string> = {
  en: 'ShrinkImg terms of service. Free online image compression tool — use at your own discretion.',
  es: 'Términos de servicio de ShrinkImg. Herramienta de compresión de imágenes online gratis — usá bajo tu propio criterio.',
};

const titleMap: Record<Locale, string> = {
  en: 'Terms of Service — ShrinkImg',
  es: 'Términos de Servicio — ShrinkImg',
};

const TermsPage: FunctionalComponent<Props> = ({ locale }) => {
  const Content = contentMap[locale];
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `${siteOrigin}${prefix}/terms`;

  return (
    <html lang={locale} class="legal">
      <head>
        <title>{titleMap[locale]}</title>
        <meta name="description" content={descriptionMap[locale]} />
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
        <link rel="alternate" hrefLang="en" href={`${siteOrigin}/terms`} />
        <link rel="alternate" hrefLang="es" href={`${siteOrigin}/es/terms`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteOrigin}/terms`}
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

export default TermsPage;
