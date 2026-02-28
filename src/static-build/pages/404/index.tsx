import { h, FunctionalComponent } from 'preact';

import baseCss from 'css:../index/base.css';
import legalCss from 'css:../legal-styles.css';
import initialCss from 'initial-css:';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';

const NotFoundPage: FunctionalComponent = () => {
  return (
    <html lang="en" class="legal">
      <head>
        <title>Page Not Found — ShrinkImg</title>
        <meta name="robots" content="noindex" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#2EC4B6" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
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
            <a href="/">Back to ShrinkImg</a>
          </nav>
          <h1>Page Not Found</h1>
          <p>
            The page you're looking for doesn't exist or has been moved.{' '}
            <a href="/">Go back to ShrinkImg</a> to compress your images.
          </p>
        </div>
      </body>
    </html>
  );
};

export default NotFoundPage;
