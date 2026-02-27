import { h, Fragment, FunctionalComponent } from 'preact';

const OptimizeImagesWordpressEn: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>
          WordPress generates multiple sizes for every uploaded image,
          multiplying wasted space
        </li>
        <li>
          Compressing images before uploading is more effective than relying on
          plugins
        </li>
        <li>
          Targeting quality 75–85 in WebP or AVIF cuts file sizes by 60–80% with
          no visible loss
        </li>
        <li>
          Proper dimensions, lazy loading, and format choice are the three
          pillars of WordPress image optimization
        </li>
        <li>
          Optimized images directly improve Core Web Vitals scores and search
          rankings
        </li>
      </ul>
    </div>

    <p>
      WordPress powers over 40% of all websites on the internet, and images are
      the number one reason most of those sites load slower than they should.
      The default WordPress media handling is convenient but far from optimal —
      it generates multiple image sizes on upload, stores them all uncompressed,
      and serves whichever size the theme requests without regard for actual
      file weight.
    </p>

    <p>
      The typical advice is to install an image optimization plugin. But plugins
      add overhead, many require paid subscriptions for the best compression,
      and they process images on your server (using CPU and memory) or upload
      them to third-party services. There's a better approach: optimize your
      images before they ever touch WordPress.
    </p>

    <h2 id="why-wordpress-slow">
      Why WordPress Sites Get Slow With Unoptimized Images
    </h2>

    <p>
      When you upload a single image to WordPress, the system typically creates
      four to six additional sizes: thumbnail (150x150), medium (300px wide),
      medium-large (768px wide), large (1024px wide), and sometimes 1536px and
      2048px variants. If your theme or page builder registers custom sizes, the
      count climbs higher.
    </p>

    <p>
      Upload a 5 MB photo from your camera and WordPress might generate 20–30 MB
      of total image data from that single upload. Do this 50 times for a
      product catalog and your media library suddenly holds over a gigabyte of
      largely unoptimized images.
    </p>

    <p>
      The result is predictable:{' '}
      <a href="/blog/why-image-compression-matters">pages load slowly</a>, Core
      Web Vitals scores suffer, visitors bounce, and search rankings decline.
      The good news is that this problem is entirely preventable.
    </p>

    <h2 id="compress-before-upload">
      Compress Before Uploading With ShrinkImg
    </h2>

    <p>
      The single most effective step you can take is compressing every image
      before uploading it to WordPress. This way, every derivative size
      WordPress generates inherits the optimization from your already-compressed
      source.
    </p>

    <p>
      Here's the workflow with <a href="/">ShrinkImg</a>:
    </p>

    <h3 id="step-1">Step 1 — Resize to Your Maximum Display Size</h3>
    <p>
      Before compressing, determine the widest your image will ever display on
      your site. For most WordPress themes, the content area is 800–1200 px
      wide. Full-width hero images might need 1600–2000 px. There's no reason to
      upload a 4000 px image if the largest it will ever appear is 1200 px.
    </p>

    <p>
      Open your image in ShrinkImg, use the resize option to set the target
      width, and then apply compression. Resizing first dramatically reduces
      file size because you're eliminating millions of unnecessary pixels before
      compression even starts.
    </p>

    <h3 id="step-2">Step 2 — Choose the Right Format</h3>
    <p>
      WordPress has supported WebP since version 5.8, and AVIF support is
      improving with each release. For the best results:
    </p>

    <ul>
      <li>
        <strong>WebP</strong> is the safest modern choice — 25–35% smaller than
        JPG with native WordPress support. Most themes and page builders handle
        WebP without issues.
      </li>
      <li>
        <strong>AVIF</strong> offers even better compression (up to 50% smaller
        than JPG) but WordPress support is still maturing. Test with your theme
        before committing to AVIF site-wide.
      </li>
      <li>
        <strong>JPG</strong> remains a solid fallback when maximum compatibility
        is needed, especially for email newsletters or social sharing where the
        platform may not support newer formats.
      </li>
    </ul>

    <p>
      Not sure which format is best for your images? Our{' '}
      <a href="/blog/jpg-vs-png-vs-webp-vs-avif">
        complete format comparison guide
      </a>{' '}
      breaks down the strengths and trade-offs of each option.
    </p>

    <h3 id="step-3">Step 3 — Target the Right Quality Level</h3>
    <p>
      For photographs, quality 75–85 is the sweet spot. At this range, files
      shrink by 60–80% while remaining visually identical at the sizes displayed
      on a typical WordPress page. ShrinkImg shows the original and compressed
      versions side by side, so you can confirm there's no visible difference
      before downloading.
    </p>

    <p>
      For graphics, logos, and screenshots — anything with text or sharp edges —
      use PNG at maximum compression or lossless WebP. These need pixel-perfect
      accuracy, and lossy compression would create visible artifacts.
    </p>

    <h3 id="step-4">Step 4 — Upload to WordPress</h3>
    <p>
      Once compressed, upload your optimized image to the WordPress Media
      Library as usual. WordPress will generate its derivative sizes from your
      already-optimized source, keeping all variants lean. A 200 KB WebP source
      might produce thumbnails of 5–15 KB each, compared to 30–80 KB from an
      uncompressed original.
    </p>

    <h2 id="recommended-dimensions">
      Recommended Image Dimensions for WordPress
    </h2>

    <p>
      Different content areas need different image sizes. Here's a practical
      reference for common WordPress layouts:
    </p>

    <table>
      <thead>
        <tr>
          <th>Image Use</th>
          <th>Recommended Width</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Blog post featured image</td>
          <td>1200 px</td>
          <td>Covers most themes and social sharing</td>
        </tr>
        <tr>
          <td>Full-width hero / banner</td>
          <td>1600–2000 px</td>
          <td>Wider screens need more pixels</td>
        </tr>
        <tr>
          <td>In-content images</td>
          <td>800–1000 px</td>
          <td>Matches typical content column width</td>
        </tr>
        <tr>
          <td>WooCommerce product images</td>
          <td>800–1000 px</td>
          <td>Check your theme's product gallery size</td>
        </tr>
        <tr>
          <td>Thumbnails / gallery grids</td>
          <td>400–600 px</td>
          <td>Let WordPress handle smaller derivatives</td>
        </tr>
        <tr>
          <td>Logo</td>
          <td>300–500 px</td>
          <td>Use PNG or SVG for crisp rendering</td>
        </tr>
      </tbody>
    </table>

    <p>
      Uploading images larger than needed wastes storage and bandwidth. Resize
      before compressing, and your WordPress media library stays lean and fast.
    </p>

    <h2 id="lazy-loading">Enable and Understand Lazy Loading</h2>

    <p>
      Since WordPress 5.5, native lazy loading is enabled by default. This means
      images below the visible viewport aren't loaded until the visitor scrolls
      near them. It's a significant performance win — instead of downloading 20
      images at once, the browser only fetches the 3–4 visible in the initial
      viewport.
    </p>

    <p>
      Lazy loading works automatically for images added through the block
      editor. However, there are a few things to keep in mind:
    </p>

    <ul>
      <li>
        <strong>Don't lazy-load the LCP image</strong> — the main hero or
        featured image at the top of the page should load immediately. Adding{' '}
        <code>loading="eager"</code> or <code>fetchpriority="high"</code>{' '}
        ensures the browser prioritizes it. Many modern themes handle this
        automatically.
      </li>
      <li>
        <strong>Always set width and height</strong> — lazy-loaded images
        without dimensions cause layout shifts (CLS). The WordPress block editor
        adds these automatically, but verify if you're inserting images via
        custom code.
      </li>
      <li>
        <strong>Lazy loading doesn't fix large files</strong> — it delays when
        images load, not how much data they consume. A 3 MB image is still 3 MB
        when it finally loads. Compression and proper sizing matter regardless.
      </li>
    </ul>

    <h2 id="core-web-vitals-wordpress">Impact on SEO and Core Web Vitals</h2>

    <p>
      Google's Core Web Vitals directly measure the kind of problems unoptimized
      images cause. Here's how image optimization maps to each metric:
    </p>

    <ul>
      <li>
        <strong>Largest Contentful Paint (LCP)</strong> — your hero image is
        almost always the LCP element. Compressing it from 2 MB to 200 KB can
        improve LCP by 1–3 seconds. Google's threshold is 2.5 seconds.
      </li>
      <li>
        <strong>Interaction to Next Paint (INP)</strong> — heavy images consume
        bandwidth and main-thread time for decoding. Smaller images free
        resources for handling user interactions.
      </li>
      <li>
        <strong>Cumulative Layout Shift (CLS)</strong> — images without explicit
        width/height attributes cause layout shifts. Always include dimensions,
        and WordPress's block editor does this by default.
      </li>
    </ul>

    <p>
      WordPress sites that pass all three Core Web Vitals consistently rank
      higher in search results. Image optimization is the single highest-impact
      change most WordPress site owners can make — it requires no code changes,
      no server upgrades, and no paid tools.
    </p>

    <h2 id="complete-checklist">
      Complete WordPress Image Optimization Checklist
    </h2>

    <ul>
      <li>Resize images to their maximum display size before uploading</li>
      <li>
        Compress with <a href="/">ShrinkImg</a> at quality 75–85 (for photos)
      </li>
      <li>Use WebP as your default format (AVIF if your theme supports it)</li>
      <li>
        Use PNG only for graphics with transparency or pixel-perfect
        requirements
      </li>
      <li>
        Verify that lazy loading is active (it's on by default since WP 5.5)
      </li>
      <li>Ensure the hero/featured image loads eagerly, not lazily</li>
      <li>Always include width and height attributes on images</li>
      <li>
        Test your pages with Google PageSpeed Insights to verify improvements
      </li>
      <li>
        Periodically audit your media library for oversized legacy uploads
      </li>
    </ul>

    <p>
      You don't need plugins, paid services, or server-side processing to have a
      fast WordPress site. By compressing and resizing images before uploading —
      a process that takes seconds with ShrinkImg — you ensure every page loads
      quickly, ranks well, and delivers a smooth experience for every visitor.
    </p>
  </Fragment>
);

export default OptimizeImagesWordpressEn;
