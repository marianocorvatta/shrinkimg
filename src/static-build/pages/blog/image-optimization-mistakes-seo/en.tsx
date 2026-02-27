import { h, Fragment, FunctionalComponent } from 'preact';

const ImageOptimizationMistakesSeoEn: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>
          Most image SEO problems fall into two categories: files that are too
          large, or metadata that is missing or wrong
        </li>
        <li>
          Uncompressed images are the single biggest cause of slow page speed
          scores
        </li>
        <li>
          Missing alt text is both an accessibility failure and a missed SEO
          signal
        </li>
        <li>
          Serving oversized images (wider than the display slot) wastes
          bandwidth with no visual benefit
        </li>
        <li>
          Generic file names like IMG_4532.jpg provide zero keyword signal to
          search engines
        </li>
      </ul>
    </div>

    <p>
      Images are the most common source of page speed problems and one of the
      most overlooked areas of on-page SEO. The mistakes are rarely exotic —
      most sites make the same handful of errors that are straightforward to fix
      once you know what to look for.
    </p>

    <p>
      Here are the ten most common image optimization mistakes, why they hurt
      your rankings, and how to fix them.
    </p>

    <h2 id="mistake-1">1. Not Compressing Images Before Upload</h2>

    <p>
      The most common and most impactful mistake: uploading camera-resolution
      images (3–15 MB each) directly to a CMS without compression. A single
      uncompressed JPEG from a modern camera can be larger than an entire
      well-optimized web page.
    </p>

    <p>
      <strong>Why it hurts:</strong> Page load time directly impacts Core Web
      Vitals scores — LCP in particular is often blocked by the download time of
      a large hero image. Google uses page experience signals including Core Web
      Vitals as a ranking factor. Slow pages also see higher bounce rates, which
      compounds the SEO damage.
    </p>

    <p>
      <strong>Fix:</strong> Compress every image before uploading it to your
      CMS. Use ShrinkImg to compress images entirely in your browser — no
      uploads to third-party servers required. Target 80–150 KB for blog post
      images, 150–300 KB for hero images, and 60–120 KB for product thumbnails.
    </p>

    <h2 id="mistake-2">2. Using JPEG When WebP Is Available</h2>

    <p>
      JPEG was the web standard for photographs for decades, but WebP supersedes
      it in every measurable way. In 2026, browser support for WebP is universal
      — there is no reason to serve JPEG for new content.
    </p>

    <p>
      <strong>Why it hurts:</strong> WebP produces files 25–35% smaller than
      JPEG at equivalent quality. That's a significant amount of unnecessary
      page weight that every visitor has to download. For e-commerce sites with
      hundreds of product images, the aggregate impact is substantial.
    </p>

    <p>
      <strong>Fix:</strong> Convert all new images to WebP before uploading. For
      existing JPEG libraries, prioritize converting high-traffic pages first.
      ShrinkImg converts any image to WebP directly in your browser. See our{' '}
      <a href="/blog/webp-guide-2026">complete WebP guide</a> for more detail.
    </p>

    <h2 id="mistake-3">3. Missing or Generic Alt Text</h2>

    <p>
      Alt text (the <code>alt</code> attribute on <code>&lt;img&gt;</code> tags)
      serves two purposes: it provides a text description for screen readers
      (accessibility), and it gives search engines a textual description of the
      image content (SEO).
    </p>

    <p>
      <strong>Why it hurts:</strong> Search engines cannot interpret image
      content the way humans can. Alt text is the primary signal they use to
      understand what an image is about. Missing alt text means the image
      contributes nothing to your keyword targeting. Generic alt text like
      "image" or "photo" is only marginally better than missing entirely. This
      also creates accessibility failures that can have legal implications.
    </p>

    <p>
      <strong>Fix:</strong> Write descriptive alt text for every non-decorative
      image. Include relevant keywords naturally — describe what the image
      shows, not what you want to rank for. For product images: "Blue leather
      running shoe, side view" is better than "shoe" or leaving it blank.
      Decorative images (dividers, background patterns) should have{' '}
      <code>alt=""</code>.
    </p>

    <h2 id="mistake-4">4. Serving Oversized Images</h2>

    <p>
      A common mistake when building responsive sites: uploading a single large
      image (2000px wide) and letting CSS scale it down to fit smaller
      containers. The browser downloads the full-resolution image regardless of
      the display size.
    </p>

    <p>
      <strong>Why it hurts:</strong> Mobile users with smaller screens download
      the same large file as desktop users — wasting bandwidth and slowing load
      times. Google's PageSpeed Insights will flag this as "Properly size
      images" and it directly impacts your performance score.
    </p>

    <p>
      <strong>Fix:</strong> Resize images to match their display dimensions
      before uploading. If a blog post image is displayed at 800px wide on
      desktop and 400px on mobile, serve an 800px image (not a 2400px one). For
      optimal results, implement responsive images with the HTML{' '}
      <code>srcset</code> attribute to serve different sizes to different
      devices. ShrinkImg lets you set a maximum width when compressing — use
      this to resize and compress in one step.
    </p>

    <h2 id="mistake-5">5. Generic File Names</h2>

    <p>
      File names like <code>IMG_4532.jpg</code>, <code>DSC00291.jpg</code>, or{' '}
      <code>image (1).jpg</code> provide zero contextual information to search
      engines. They're also useless for Google Image Search ranking.
    </p>

    <p>
      <strong>Why it hurts:</strong> File names are a weak but real SEO signal.
      More importantly, they affect how images appear in Google Image Search —
      images with descriptive file names appear for relevant queries, while
      camera-default names don't.
    </p>

    <p>
      <strong>Fix:</strong> Name image files descriptively using hyphens to
      separate words: <code>blue-leather-running-shoes-side-view.webp</code> is
      better than <code>IMG_4532.jpg</code>. Include the primary keyword for the
      page naturally. Rename files before uploading — renaming after the fact
      breaks existing URLs and requires redirects.
    </p>

    <h2 id="mistake-6">6. Not Using Lazy Loading</h2>

    <p>
      By default, browsers download all images on a page as part of the initial
      load — including images that are far below the fold and won't be seen
      until the user scrolls.
    </p>

    <p>
      <strong>Why it hurts:</strong> Downloading off-screen images delays the
      rendering of visible content, worsening LCP and other Core Web Vitals. It
      also wastes bandwidth for users who don't scroll to the bottom of long
      pages.
    </p>

    <p>
      <strong>Fix:</strong> Add <code>loading="lazy"</code> to all images that
      are not in the initial viewport. For the hero image or the first image a
      user sees, use <code>loading="eager"</code> (or omit the attribute — eager
      is the default). Most modern CMS platforms and page builders support
      native lazy loading.
    </p>

    <h2 id="mistake-7">7. Missing Width and Height Attributes</h2>

    <p>
      When images don't have explicit width and height attributes in their HTML,
      the browser doesn't know their dimensions until they download. This causes
      layout shifts as images load in.
    </p>

    <p>
      <strong>Why it hurts:</strong> Layout shifts are measured by the CLS
      (Cumulative Layout Shift) Core Web Vitals metric. High CLS scores indicate
      a poor user experience — content jumping around as images load — and
      Google uses CLS as a ranking signal. It also degrades perceived
      performance.
    </p>

    <p>
      <strong>Fix:</strong> Always include <code>width</code> and{' '}
      <code>height</code> attributes on <code>&lt;img&gt;</code> tags. Modern
      CSS can then use these to calculate the aspect ratio and reserve space,
      preventing layout shifts. Most CMS platforms do this automatically when
      images are uploaded through the media library.
    </p>

    <h2 id="mistake-8">8. Over-Compressing Small Images</h2>

    <p>
      In the pursuit of small file sizes, some sites apply aggressive
      compression to images that are displayed small — thumbnails, avatars,
      icons. At small display sizes, compression artifacts become proportionally
      more visible.
    </p>

    <p>
      <strong>Why it hurts:</strong> A thumbnail compressed to quality 50 at
      150px display size will show visible artifacts — blocky textures, color
      banding — that look unprofessional and reflect badly on site quality. This
      matters for E-A-T (Expertise, Authoritativeness, Trustworthiness), which
      Google uses to assess site quality.
    </p>

    <p>
      <strong>Fix:</strong> For thumbnails displayed below 300px, use quality
      80–85 rather than lower values. The additional file size is minimal
      (thumbnail files are small regardless), and the quality improvement is
      visible. Reserve aggressive compression for large images where the file
      size impact is significant.
    </p>

    <h2 id="mistake-9">9. Ignoring Open Graph Images</h2>

    <p>
      Open Graph (OG) images are the preview images shown when a URL is shared
      on social media. Most sites either ignore them (relying on automatic image
      selection) or use the same unoptimized large image for every page.
    </p>

    <p>
      <strong>Why it hurts:</strong> Unoptimized OG images can be very large —
      often full-resolution screenshots or banners. While they don't directly
      affect page speed (they're not in the page), they affect how the site
      appears when shared and can impact click-through rates from social
      traffic, which affects overall site engagement metrics.
    </p>

    <p>
      <strong>Fix:</strong> Create dedicated OG images sized at 1200×630px for
      each key page. Compress them as WebP or JPEG at quality 80. Set them via
      the <code>og:image</code> meta tag. Make them visually distinct per page —
      don't use the same generic image for your entire site.
    </p>

    <h2 id="mistake-10">10. No Image Sitemap or Missing Structured Data</h2>

    <p>
      Google discovers images through crawling, but image sitemaps make this
      more reliable. For e-commerce, structured data for product images is an
      additional missed opportunity.
    </p>

    <p>
      <strong>Why it hurts:</strong> Without an image sitemap, Google may miss
      images embedded via CSS background-image or JavaScript. For e-commerce,
      product image structured data can enable rich results in Google Shopping
      and image search, which drives additional traffic.
    </p>

    <p>
      <strong>Fix:</strong> Include image information in your XML sitemap (add{' '}
      <code>&lt;image:image&gt;</code> tags for each page's key images). For
      e-commerce, implement Product schema markup including the{' '}
      <code>image</code> property. Most SEO plugins (Yoast, RankMath) handle
      image sitemaps automatically if configured.
    </p>

    <h2 id="getting-started">Getting Started: A Prioritized Fix List</h2>

    <p>
      If you're facing multiple issues on your site, tackle them in order of
      impact:
    </p>

    <ol>
      <li>Compress all images (mistake #1) — the largest impact by far</li>
      <li>Convert to WebP (mistake #2) — easy to combine with compression</li>
      <li>
        Fix missing alt text (mistake #3) — accessibility and SEO combined
      </li>
      <li>
        Add lazy loading (mistake #6) — one attribute change, measurable impact
      </li>
      <li>
        Resize oversized images (mistake #4) — especially for mobile performance
      </li>
      <li>
        Fix file names on new content (mistake #5) — don't rename existing files
        without redirects
      </li>
    </ol>

    <p>
      For a comprehensive approach to image performance that covers{' '}
      <a href="/blog/core-web-vitals-images">Core Web Vitals</a> in detail, or a
      complete optimization workflow for{' '}
      <a href="/blog/image-optimization-ecommerce">e-commerce product images</a>
      , see those dedicated guides. Start with compression — fixing mistake #1
      alone often produces 30–60% reduction in total page weight and a
      measurable improvement in search performance.
    </p>
  </Fragment>
);

export default ImageOptimizationMistakesSeoEn;
