import { h, FunctionalComponent } from 'preact';

import baseCss from 'css:./index/base.css';
import legalCss from 'css:./legal-styles.css';
import initialCss from 'initial-css:';
import favicon from 'url:static-build/assets/favicon.ico';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';

const TermsPage: FunctionalComponent = () => (
  <html lang="en">
    <head>
      <title>Terms of Service — ShrinkImg</title>
      <meta
        name="description"
        content="ShrinkImg terms of service. Free online image compression tool — use at your own discretion."
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
      <link rel="canonical" href={`${siteOrigin}/terms`} />
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

        <h1>Terms of Service</h1>
        <p class="last-updated">Last updated: February 27, 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using ShrinkImg ("the Service"), you agree to be
          bound by these Terms of Service. If you do not agree with any part of
          these terms, please do not use the Service.
        </p>

        <h2>Service Description</h2>
        <p>
          ShrinkImg is a free, browser-based image compression and conversion
          tool. All image processing occurs locally on your device. The Service
          is provided <strong>"as is"</strong> without warranties of any kind.
        </p>

        <h2>Free Use</h2>
        <p>
          ShrinkImg is free to use. There are no usage limits, subscriptions, or
          hidden fees. We reserve the right to introduce paid features in the
          future, but any currently free functionality will remain free.
        </p>

        <h2>No Guarantees</h2>
        <p>
          While we strive to provide a reliable and high-quality service, we
          make no guarantees regarding:
        </p>
        <ul>
          <li>Uninterrupted availability of the Service</li>
          <li>Specific compression results or output quality</li>
          <li>Compatibility with all image formats or browsers</li>
          <li>Fitness for any particular purpose</li>
        </ul>

        <h2>User Responsibility</h2>
        <p>
          You are solely responsible for the images you process using ShrinkImg.
          You must ensure you have the right to use and modify any images you
          compress. Always keep backup copies of your original images.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, ShrinkImg and its operators
          shall not be liable for any direct, indirect, incidental, special, or
          consequential damages resulting from the use or inability to use the
          Service, including but not limited to loss of data or image quality
          degradation.
        </p>

        <h2>Third-Party Advertising</h2>
        <p>
          The Service displays advertisements provided by third-party ad
          networks, including Google AdSense. These third parties may use
          cookies and similar technologies. Their use is governed by their own
          privacy policies and terms. See our{' '}
          <a href="/privacy">Privacy Policy</a> for more details.
        </p>

        <h2>Modifications and Discontinuation</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue the Service
          (or any part thereof) at any time, with or without notice. We shall
          not be liable to you or any third party for any such modification,
          suspension, or discontinuation.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Changes will
          be posted on this page with an updated "Last updated" date. Continued
          use of the Service after changes constitutes acceptance of the new
          terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in
          accordance with the laws of the Argentine Republic. Any disputes
          arising from the use of this Service shall be subject to the
          jurisdiction of the courts of the Autonomous City of Buenos Aires,
          Argentina.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about these Terms of Service, contact us at{' '}
          <a href="mailto:legal@shrinkimg.com">legal@shrinkimg.com</a>.
        </p>
      </div>
    </body>
  </html>
);

export default TermsPage;
