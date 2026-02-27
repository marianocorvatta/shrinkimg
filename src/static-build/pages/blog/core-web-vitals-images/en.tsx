import { h, Fragment, FunctionalComponent } from 'preact';

const CoreWebVitalsImagesEn: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>
          Core Web Vitals measure real user experience — not lab scores — and
          directly affect Google rankings
        </li>
        <li>
          LCP (Largest Contentful Paint) is almost always an image; compressing
          it is the fastest way to improve your score
        </li>
        <li>
          Images without width/height attributes cause layout shifts (CLS) —
          always include dimensions
        </li>
        <li>
          WebP and AVIF reduce image weight by 25–50% versus JPG, directly
          lowering LCP times
        </li>
        <li>
          Test with PageSpeed Insights after every change to track before/after
          improvement
        </li>
      </ul>
    </div>

    <p>
      In May 2021, Google officially made Core Web Vitals a ranking signal.
      Since then, how fast and stable your pages feel to real visitors directly
      influences where you appear in search results. Images are the dominant
      factor behind poor Core Web Vitals scores — and also the easiest to fix
      without touching your code.
    </p>

    <p>
      This guide explains what each Core Web Vital means, how images affect it,
      and exactly what to do to improve your scores using better image
      optimization practices.
    </p>

    <h2 id="what-are-cwv">What Are Core Web Vitals?</h2>

    <p>
      Core Web Vitals are three specific metrics Google uses to measure the
      quality of a user's experience on a web page. Unlike traditional
      performance metrics that measure server response times or arbitrary
      benchmarks, Core Web Vitals are collected from real Chrome users through
      the Chrome User Experience Report (CrUX).
    </p>

    <p>
      This matters because your score isn't based on a lab test — it's based on
      what real people on real devices with real connections actually experience
      when they visit your pages. A score that looks good in a local test but
      feels slow to mobile users on 4G will reflect that in your CrUX data.
    </p>

    <h2 id="lcp">LCP — Largest Contentful Paint</h2>

    <p>
      LCP measures how long it takes for the largest visible element in the
      viewport to finish rendering. Google's threshold:
    </p>

    <ul>
      <li>
        <strong>Good:</strong> Under 2.5 seconds
      </li>
      <li>
        <strong>Needs improvement:</strong> 2.5–4.0 seconds
      </li>
      <li>
        <strong>Poor:</strong> Over 4.0 seconds
      </li>
    </ul>

    <p>
      For the vast majority of pages, the LCP element is an image — specifically
      the hero image, the featured photo, or the main product image at the top
      of the page. This makes image optimization the single most impactful lever
      for improving LCP.
    </p>

    <h3 id="lcp-images">How Large Images Hurt LCP</h3>
    <p>
      The browser discovers the LCP image by parsing the HTML, then it must
      download, decode, and render that image before LCP is recorded. Every
      extra byte in the image file adds download time. On a typical 4G mobile
      connection (~25 Mbps), a 2 MB image takes about 640 ms to download alone.
      Add DNS lookups, SSL handshakes, server response time, and rendering
      overhead, and that image easily accounts for 1.5–2+ seconds of LCP time.
    </p>

    <p>
      Compress the same image to 200 KB and the download drops to ~64 ms —
      saving over half a second directly off your LCP.
    </p>

    <h3 id="lcp-fixes">Practical Fixes for LCP Images</h3>
    <ul>
      <li>
        <strong>Compress aggressively.</strong> Use WebP or AVIF at quality
        75–85. The LCP image is typically displayed large, which makes very high
        quality settings unnecessary. Our{' '}
        <a href="/blog/jpg-vs-png-vs-webp-vs-avif">format comparison guide</a>{' '}
        shows the size savings in detail.
      </li>
      <li>
        <strong>Preload the LCP image.</strong> Add{' '}
        <code>{'<link rel="preload" as="image" href="hero.webp" />'}</code> in
        your document head so the browser starts downloading it before parsing
        the full page.
      </li>
      <li>
        <strong>Don't lazy-load the LCP image.</strong> Adding{' '}
        <code>loading="lazy"</code> to the LCP image delays it until the browser
        finishes layout — the opposite of what you want. Keep the LCP image
        eager.
      </li>
      <li>
        <strong>Serve from a CDN.</strong> Geographic proximity reduces download
        latency. Most CDNs also support automatic WebP conversion.
      </li>
    </ul>

    <h2 id="inp">INP — Interaction to Next Paint</h2>

    <p>
      INP replaced FID (First Input Delay) as a Core Web Vital in March 2024. It
      measures how quickly the page responds to user interactions — clicks,
      taps, keyboard input — throughout the entire page lifecycle, not just the
      initial load.
    </p>

    <ul>
      <li>
        <strong>Good:</strong> Under 200 ms
      </li>
      <li>
        <strong>Needs improvement:</strong> 200–500 ms
      </li>
      <li>
        <strong>Poor:</strong> Over 500 ms
      </li>
    </ul>

    <h3 id="inp-images">How Images Affect INP</h3>
    <p>
      Images affect INP indirectly through the main thread. When the browser
      decodes a large image, it blocks the main thread — the same thread that
      handles JavaScript, layout, and user interactions. Decoding a 4000 × 3000
      JPEG can consume 50–100 ms of main-thread time. If a user taps a button
      during this time, the response is delayed.
    </p>

    <p>
      Serving smaller, properly compressed images reduces decode time and keeps
      the main thread free to respond to interactions. Modern formats like AVIF
      and WebP are also designed with efficient decoding in mind.
    </p>

    <h2 id="cls">CLS — Cumulative Layout Shift</h2>

    <p>
      CLS measures visual stability — how much the page layout unexpectedly
      jumps or shifts as content loads. A score of 0 means no shift; anything
      above 0.1 needs improvement.
    </p>

    <ul>
      <li>
        <strong>Good:</strong> Under 0.1
      </li>
      <li>
        <strong>Needs improvement:</strong> 0.1–0.25
      </li>
      <li>
        <strong>Poor:</strong> Over 0.25
      </li>
    </ul>

    <h3 id="cls-images">How Images Cause Layout Shifts</h3>
    <p>
      Images without explicit <code>width</code> and <code>height</code>{' '}
      attributes are the number one cause of layout shift. Here's why: when the
      browser encounters an image without dimensions in the HTML, it doesn't
      reserve space for it. When the image eventually downloads and its
      dimensions become known, the browser inserts it — and everything below it
      jumps down. This push-down effect is exactly what CLS measures.
    </p>

    <p>
      The fix is straightforward: always include width and height on every image
      tag. Even if you resize images with CSS, the browser uses the HTML
      attributes to calculate the aspect ratio and reserve the correct space
      before the image loads.
    </p>

    <pre>
      <code>{`<!-- Causes layout shift: -->
<img src="product.webp" alt="Product">

<!-- Prevents layout shift: -->
<img src="product.webp" width="800" height="600" alt="Product">`}</code>
    </pre>

    <h3 id="cls-lazy-loading">Lazy Loading and CLS</h3>
    <p>
      Lazy loading is excellent for performance but requires width and height
      attributes to work without causing layout shift. When an image has
      explicit dimensions, the browser reserves the right amount of space in the
      layout immediately, even before the image loads. Without dimensions, a
      lazy-loaded image will shift the layout when it finally appears.
    </p>

    <h2 id="modern-formats-vitals">
      WebP and AVIF: Direct Impact on Core Web Vitals
    </h2>

    <p>
      Switching from JPG to WebP or AVIF is one of the fastest wins available
      for Core Web Vitals. Here's why:
    </p>

    <ul>
      <li>
        <strong>Smaller files → faster LCP.</strong> WebP at quality 80 produces
        files 25–35% smaller than equivalent JPG. AVIF at the same quality is
        40–50% smaller. Every byte saved is time saved downloading the LCP
        element.
      </li>
      <li>
        <strong>Better decode efficiency.</strong> Modern codec designs (AV1 for
        AVIF, VP8/VP9 for WebP) are specifically optimized for fast decoding in
        browsers, reducing main-thread blocking time.
      </li>
      <li>
        <strong>Smaller payloads → better INP.</strong> Less data to decode
        means less main-thread work, leaving more headroom for interaction
        responsiveness.
      </li>
    </ul>

    <p>
      Use <a href="/">ShrinkImg</a> to convert your images to WebP or AVIF
      directly in your browser. The side-by-side comparison makes it easy to
      verify quality before downloading.
    </p>

    <h2 id="pagespeed-testing">
      How to Test Your Score With PageSpeed Insights
    </h2>

    <p>
      Google PageSpeed Insights (PSI) is the canonical tool for measuring Core
      Web Vitals. It combines real-user data from CrUX with Lighthouse lab tests
      to give you both field data and actionable recommendations.
    </p>

    <p>To measure the impact of image optimization:</p>

    <ol>
      <li>
        Run PSI on your page before making changes and screenshot the results.
        Note your LCP value and any "Serve images in next-gen formats" or
        "Properly size images" warnings.
      </li>
      <li>
        Compress and convert your images using ShrinkImg. Prioritize the LCP
        image first — it has the highest individual impact.
      </li>
      <li>
        Deploy the optimized images and run PSI again. CrUX data takes 28 days
        to update, but the Lighthouse lab score updates immediately.
      </li>
      <li>
        Check back in 4 weeks to see your field data improve in Search Console's
        Core Web Vitals report.
      </li>
    </ol>

    <h2 id="practical-checklist">
      Practical Image Checklist for Core Web Vitals
    </h2>

    <ul>
      <li>
        Compress the LCP image to WebP or AVIF at quality 75–85 — this is your
        highest-impact change
      </li>
      <li>
        Add <code>width</code> and <code>height</code> to every{' '}
        <code>{'<img>'}</code> tag to prevent CLS
      </li>
      <li>
        Don't add <code>loading="lazy"</code> to the LCP image or any
        above-the-fold images
      </li>
      <li>
        Add <code>fetchpriority="high"</code> to the LCP image to tell the
        browser to prioritize it
      </li>
      <li>
        Preload the LCP image with a{' '}
        <code>{'<link rel="preload" as="image">'}</code> tag
      </li>
      <li>Resize images to their actual display size — never larger</li>
      <li>
        Use <code>loading="lazy"</code> on all below-the-fold images to reduce
        initial page payload
      </li>
      <li>Test before and after with PageSpeed Insights to measure impact</li>
    </ul>

    <p>
      Core Web Vitals are Google's most concrete signal that user experience
      matters for rankings. Image optimization is the fastest path to improving
      all three metrics — it requires no code changes, no infrastructure
      upgrades, and no specialized tools beyond a good image compressor.
    </p>

    <p>
      Start with your LCP image, compress it in <a href="/">ShrinkImg</a>, and
      run PageSpeed Insights before and after. The improvement will be immediate
      and measurable. For more context, read our guide on{' '}
      <a href="/blog/why-image-compression-matters">
        why image compression matters for web performance
      </a>
      .
    </p>
  </Fragment>
);

export default CoreWebVitalsImagesEn;
