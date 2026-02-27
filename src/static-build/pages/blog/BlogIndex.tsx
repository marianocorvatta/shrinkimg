import { h, FunctionalComponent } from 'preact';

import baseCss from 'css:../index/base.css';
import legalCss from 'css:../legal-styles.css';
import guideCss from 'css:../guides/guide-styles.css';
import blogCss from 'css:./blog-styles.css';
import initialCss from 'initial-css:';
import favicon from 'url:static-build/assets/favicon.ico';
import ogImage from 'url:static-build/assets/logo-w.png';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';
import type { Locale } from 'shared/i18n';
import { t } from 'shared/i18n';
import { blogPosts } from './posts';

interface Props {
  locale: Locale;
}

const BlogIndex: FunctionalComponent<Props> = ({ locale }) => {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const canonicalUrl = `${siteOrigin}${prefix}/blog`;
  const title = t('blog.title');
  const description = t('blog.description');

  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );

  return (
    <html lang={locale} class="legal">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
        <link rel="alternate" hrefLang="en" href={`${siteOrigin}/blog`} />
        <link rel="alternate" hrefLang="es" href={`${siteOrigin}/es/blog`} />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteOrigin}/blog`}
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
        <style
          dangerouslySetInnerHTML={{
            __html: escapeStyleScriptContent(blogCss),
          }}
        />
      </head>
      <body>
        <div class="legal-page">
          <nav class="legal-nav">
            <a href={prefix || '/'}>{t('legal.backToShrinkImg')}</a>
          </nav>
          <h1>Blog</h1>

          {sortedPosts.length > 0 ? (
            sortedPosts.map((post) => (
              <article class="blog-post-card">
                <h2>
                  <a href={`${prefix}/blog/${post.slug}`}>
                    {post.titleMap[locale]
                      .replace(' — ShrinkImg Blog', '')
                      .replace(' — Blog de ShrinkImg', '')}
                  </a>
                </h2>
                <div class="blog-meta">{post.datePublished}</div>
                <p>{post.descriptionMap[locale].slice(0, 160)}</p>
                <a class="blog-read-more" href={`${prefix}/blog/${post.slug}`}>
                  {t('blog.readMore')}
                </a>
              </article>
            ))
          ) : (
            <p>{t('blog.noPosts')}</p>
          )}
        </div>
      </body>
    </html>
  );
};

export default BlogIndex;
