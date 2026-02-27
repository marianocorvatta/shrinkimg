import { h, FunctionalComponent } from 'preact';

import baseCss from 'css:./index/base.css';
import legalCss from 'css:./legal-styles.css';
import initialCss from 'initial-css:';
import favicon from 'url:static-build/assets/favicon.ico';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';

const PrivacyPage: FunctionalComponent = () => (
  <html lang="en" class="legal">
    <head>
      <title>Privacy Policy — ShrinkImg</title>
      <meta
        name="description"
        content="ShrinkImg privacy policy. Learn how we handle your data — images never leave your device."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="theme-color" content="#2EC4B6" />
      <link rel="shortcut icon" href={favicon} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href={`${siteOrigin}/privacy`} />
      <style
        dangerouslySetInnerHTML={{ __html: escapeStyleScriptContent(baseCss) }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: escapeStyleScriptContent(initialCss),
        }}
      />
      <style
        dangerouslySetInnerHTML={{ __html: escapeStyleScriptContent(legalCss) }}
      />
    </head>
    <body>
      <div class="legal-page">
        <nav class="legal-nav">
          <a href="/">&larr; Back to ShrinkImg</a>
        </nav>

        <h1>Privacy Policy</h1>
        <p class="last-updated">Last updated: February 27, 2026</p>

        <h2>No Image Uploads</h2>
        <p>
          ShrinkImg processes all images{' '}
          <strong>entirely in your browser</strong>. Your images are never
          uploaded to any server. All compression and conversion happens locally
          on your device using WebAssembly and JavaScript.
        </p>

        <h2>No Personal Data Collection</h2>
        <p>
          We do not collect, store, or process any personal data. We do not
          require account creation, email addresses, or any form of
          registration.
        </p>

        <h2>Google Analytics</h2>
        <p>
          We use Google Analytics to understand how visitors interact with our
          site. Google Analytics collects anonymous usage data such as pages
          visited, time on site, and general geographic location. This data
          helps us improve the service. You can opt out by using a browser
          extension like{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out
          </a>
          .
        </p>

        <h2>Google AdSense</h2>
        <p>
          We use Google AdSense to display advertisements. Google AdSense may
          use cookies and web beacons to serve ads based on your prior visits to
          this and other websites. Google's use of advertising cookies enables
          it and its partners to serve ads based on your browsing activity. You
          may opt out of personalized advertising by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          .
        </p>

        <h2>Cookies</h2>
        <p>ShrinkImg and its third-party partners may use cookies for:</p>
        <ul>
          <li>Analytics (Google Analytics)</li>
          <li>Advertising (Google AdSense)</li>
          <li>Remembering your cookie consent preference</li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling
          cookies may affect third-party features but will not affect image
          compression functionality.
        </p>

        <h2>Local Storage</h2>
        <p>
          We use your browser's localStorage to remember your cookie consent
          choice. No image data or personal information is stored in
          localStorage.
        </p>

        <h2>GDPR Compliance (EU)</h2>
        <p>
          If you are located in the European Union, you have the right to
          access, rectify, or delete any personal data. Since we do not collect
          personal data, there is nothing to access, rectify, or delete. Cookie
          consent is requested before any non-essential cookies are set.
        </p>

        <h2>Ley 25.326 — Protección de Datos Personales (Argentina)</h2>
        <p>
          In compliance with Argentine Law 25.326 on Protection of Personal
          Data, we inform you that ShrinkImg does not collect, store, or process
          personal data. No databases of personal information are maintained.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          ShrinkImg does not knowingly collect any information from children
          under 13. The service is a general-purpose image compression tool that
          does not require any personal information.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated "Last updated" date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:privacy@shrinkimg.com">privacy@shrinkimg.com</a>.
        </p>
      </div>
    </body>
  </html>
);

export default PrivacyPage;
