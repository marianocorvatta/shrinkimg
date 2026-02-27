import { h, FunctionalComponent } from 'preact';

import baseCss from 'css:../index/base.css';
import legalCss from 'css:../legal-styles.css';
import initialCss from 'initial-css:';
import favicon from 'url:static-build/assets/favicon.ico';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';
import type { Locale } from 'shared/i18n';
import { t } from 'shared/i18n';
import PrivacyContentEn from './en';
import PrivacyContentEs from './es';

interface Props {
  locale: Locale;
}

const contentMap: Record<Locale, FunctionalComponent> = {
  en: PrivacyContentEn,
  es: PrivacyContentEs,
};

const descriptionMap: Record<Locale, string> = {
  en: 'ShrinkImg privacy policy. Learn how we handle your data — images never leave your device.',
  es: 'Política de privacidad de ShrinkImg. Conocé cómo manejamos tus datos — las imágenes nunca salen de tu dispositivo.',
};

const titleMap: Record<Locale, string> = {
  en: 'Privacy Policy — ShrinkImg',
  es: 'Política de Privacidad — ShrinkImg',
};

const PrivacyPage: FunctionalComponent<Props> = ({ locale }) => {
  const Content = contentMap[locale];
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `${siteOrigin}${prefix}/privacy`;

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
        <link rel="alternate" hrefLang="en" href={`${siteOrigin}/privacy`} />
        <link rel="alternate" hrefLang="es" href={`${siteOrigin}/es/privacy`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteOrigin}/privacy`}
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

export default PrivacyPage;
