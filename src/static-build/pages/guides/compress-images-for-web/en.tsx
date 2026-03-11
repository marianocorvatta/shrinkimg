import { h, Fragment, FunctionalComponent } from 'preact';

const CompressImagesForWebEn: FunctionalComponent = () => (
  <Fragment>
    <h1>Compress Images for WordPress, Web &amp; Email</h1>

    <p>
      Unoptimized images are the number-one cause of slow websites. Whether
      you're running a WordPress blog, building a landing page, or sending a
      newsletter, properly compressed images make everything faster. This guide
      covers practical optimization techniques for the three most common
      scenarios.
    </p>

    <h2>Why Image Size Matters for Web Performance</h2>
    <p>
      Google's research shows that 53% of mobile users abandon a page that takes
      longer than 3 seconds to load. Images often account for 50–70% of a page's
      total weight, making them the single biggest lever you can pull. Optimized
      images improve:
    </p>
    <ul>
      <li>
        <strong>Largest Contentful Paint (LCP)</strong> — the Core Web Vital
        that measures when the main content becomes visible. Large hero images
        are the most common cause of poor LCP scores.
      </li>
      <li>
        <strong>Time to Interactive</strong> — fewer bytes mean the browser
        finishes downloading sooner and can focus on running JavaScript.
      </li>
      <li>
        <strong>Bandwidth costs</strong> — especially relevant if you're hosting
        on a CDN with metered bandwidth or serving users on slow mobile
        connections.
      </li>
    </ul>

    <h2>Compressing Images for WordPress</h2>
    <p>
      WordPress makes it easy to upload large images, but it doesn't always do a
      great job compressing them. Here are practical steps:
    </p>

    <h3>Before Uploading</h3>
    <ul>
      <li>
        <strong>Resize to your theme's content width</strong> — most WordPress
        themes display content at 800–1200 px wide. Uploading a 4000 px photo
        wastes space even though WordPress generates smaller sizes.
      </li>
      <li>
        <strong>Compress with ShrinkImg first</strong> — drop your image into
        ShrinkImg, choose WebP or JPG at quality 80, and download the optimized
        file before uploading to WordPress.
      </li>
      <li>
        <strong>Use WebP when possible</strong> — WordPress 5.8+ supports WebP
        uploads natively. WebP files are 25–35% smaller than JPGs. Check our{' '}
        <a href="/guides/what-is-webp/">WebP guide</a> for details.
      </li>
    </ul>

    <h3>Recommended Sizes for WordPress</h3>
    <table>
      <thead>
        <tr>
          <th>Image Type</th>
          <th>Width</th>
          <th>Format</th>
          <th>Target Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Blog featured image</td>
          <td>1200 px</td>
          <td>WebP or JPG</td>
          <td>&lt; 150 KB</td>
        </tr>
        <tr>
          <td>In-content image</td>
          <td>800 px</td>
          <td>WebP or JPG</td>
          <td>&lt; 100 KB</td>
        </tr>
        <tr>
          <td>Thumbnail</td>
          <td>300 px</td>
          <td>WebP or JPG</td>
          <td>&lt; 30 KB</td>
        </tr>
        <tr>
          <td>Logo / icon</td>
          <td>As needed</td>
          <td>PNG or SVG</td>
          <td>&lt; 20 KB</td>
        </tr>
      </tbody>
    </table>

    <h2>Compressing Images for Websites &amp; Landing Pages</h2>
    <p>
      Beyond WordPress, the same principles apply to any website. Here are
      additional tips:
    </p>

    <h3>Use Responsive Images</h3>
    <p>
      The HTML <code>srcset</code> attribute lets you serve different image
      sizes based on the viewer's screen width. Prepare 2–3 sizes of each image
      (small, medium, large) and let the browser pick the right one.
    </p>

    <h3>Lazy Load Below-the-Fold Images</h3>
    <p>
      Add <code>loading="lazy"</code> to images that aren't visible when the
      page first loads. This defers downloading until the user scrolls near
      them, speeding up the initial paint.
    </p>

    <h3>Choose the Right Format</h3>
    <p>
      For a deeper dive into format selection, see our{' '}
      <a href="/guides/jpg-vs-png-vs-webp-vs-avif/">
        JPG vs PNG vs WebP vs AVIF comparison
      </a>
      . In short: use WebP or AVIF for photos, PNG for graphics with
      transparency, and SVG for icons and logos.
    </p>

    <h2>Compressing Images for Email</h2>
    <p>
      Email clients are notoriously inconsistent with image rendering. Keep
      these constraints in mind:
    </p>
    <ul>
      <li>
        <strong>Stick to JPG and PNG</strong> — many email clients don't support
        WebP or AVIF. JPG for photos, PNG for logos with transparency.
      </li>
      <li>
        <strong>Keep total email size under 1 MB</strong> — including HTML,
        images, and all assets. Large emails get clipped in Gmail and trigger
        spam filters.
      </li>
      <li>
        <strong>Limit image width to 600 px</strong> — the standard email
        content width. There's no benefit to sending larger images.
      </li>
      <li>
        <strong>Compress aggressively</strong> — email images can tolerate lower
        quality (60–70) since they're displayed small and users don't zoom in.
      </li>
    </ul>

    <h3>Recommended Sizes for Email</h3>
    <table>
      <thead>
        <tr>
          <th>Image Type</th>
          <th>Width</th>
          <th>Format</th>
          <th>Target Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hero banner</td>
          <td>600 px</td>
          <td>JPG</td>
          <td>&lt; 80 KB</td>
        </tr>
        <tr>
          <td>Product image</td>
          <td>300 px</td>
          <td>JPG</td>
          <td>&lt; 40 KB</td>
        </tr>
        <tr>
          <td>Logo</td>
          <td>200 px</td>
          <td>PNG</td>
          <td>&lt; 15 KB</td>
        </tr>
      </tbody>
    </table>

    <h2>Quick Optimization Checklist</h2>
    <ul>
      <li>
        Resize images to the display dimensions — never serve larger than
        needed.
      </li>
      <li>Compress with ShrinkImg at quality 75–85 for photos.</li>
      <li>Use WebP or AVIF for websites, JPG/PNG for email.</li>
      <li>Add lazy loading to below-the-fold images.</li>
      <li>
        Use responsive images with <code>srcset</code> for multi-device support.
      </li>
      <li>Always visually check the compressed output before publishing.</li>
    </ul>

    <a class="guide-cta" href="/">
      Optimize Your Images Now — Free
    </a>
  </Fragment>
);

export default CompressImagesForWebEn;
