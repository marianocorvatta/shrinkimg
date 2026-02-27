import { h, Fragment, FunctionalComponent } from 'preact';

const WhyImageCompressionMattersEn: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>
          Unoptimized images account for up to 75% of a web page's total weight
        </li>
        <li>A 1-second delay in page load can reduce conversions by 7%</li>
        <li>
          Google Core Web Vitals directly reward fast-loading pages with better
          rankings
        </li>
        <li>
          Image compression can cut file sizes by 60–80% with no visible quality
          loss
        </li>
        <li>
          Faster pages mean lower bounce rates, less bandwidth usage, and
          reduced hosting costs
        </li>
      </ul>
    </div>

    <p>
      If your website takes more than three seconds to load, you're likely
      losing nearly half your visitors before they even see your content. The
      single biggest factor behind slow pages? Images. They're essential for
      engaging design, but without proper compression they quietly sabotage your
      site's performance, SEO rankings, and bottom line.
    </p>

    <p>
      In this guide, we'll break down exactly why image compression matters in
      2026, what it means for your search rankings, and how you can start
      optimizing today.
    </p>

    <h2 id="page-load-speed">The Impact on Page Load Speed</h2>

    <p>
      According to the HTTP Archive, images make up roughly 50% of the average
      web page's total bytes — and on image-heavy sites like e-commerce stores
      or portfolios, that figure climbs to 75% or more. A single uncompressed
      hero image can weigh 3–5 MB on its own. Multiply that by a gallery of
      product photos and you're asking visitors to download tens of megabytes
      before they can interact with your page.
    </p>

    <p>
      Research from Google shows that as page load time increases from 1 second
      to 3 seconds, the probability of a user bouncing rises by 32%. Push it to
      5 seconds and that number jumps to 90%. Every fraction of a second
      matters, and image compression is the fastest way to shave off load time
      without touching your code or server infrastructure.
    </p>

    <p>
      A well-compressed image that was originally 2.5 MB can easily drop to
      200–400 KB — an 80–90% reduction — while remaining visually identical at
      the sizes displayed on screen. That translates directly into pages that
      load in under two seconds instead of five.
    </p>

    <h2 id="core-web-vitals">Google Core Web Vitals and SEO Ranking</h2>

    <p>
      Since Google introduced Core Web Vitals as a ranking signal, page
      experience has become a measurable factor in where your site appears in
      search results. Three metrics drive the score:
    </p>

    <ul>
      <li>
        <strong>Largest Contentful Paint (LCP)</strong> — measures how quickly
        the main visible content loads. For most pages, the LCP element is an
        image. Google recommends an LCP under 2.5 seconds.
      </li>
      <li>
        <strong>Interaction to Next Paint (INP)</strong> — measures
        responsiveness. Heavy images block the main thread and delay
        interactivity.
      </li>
      <li>
        <strong>Cumulative Layout Shift (CLS)</strong> — measures visual
        stability. Images without explicit dimensions cause layout shifts as
        they load.
      </li>
    </ul>

    <p>
      Oversized images directly hurt LCP. If your hero image is a 4 MB
      uncompressed PNG, the browser spends precious seconds downloading and
      decoding it before anything appears on screen. Compress that same image to
      WebP or AVIF at quality 80 and it drops to 150–300 KB, bringing your LCP
      well under the 2.5-second threshold.
    </p>

    <p>
      Sites that pass all three Core Web Vitals see measurably better search
      rankings. A study by Searchmetrics found that top-ranking pages load 20%
      faster than those on the second page of results. Image optimization is one
      of the simplest changes you can make with the highest return on SEO
      investment.
    </p>

    <h2 id="mobile-experience">Mobile User Experience</h2>

    <p>
      Mobile devices now account for over 60% of global web traffic, and mobile
      users are even less patient than desktop users. They're often on slower
      cellular connections — 4G averages around 25 Mbps in practice, and 3G
      connections still exist in many regions.
    </p>

    <p>
      A page loaded with uncompressed images that takes 2 seconds on a fast
      broadband connection can take 8–12 seconds on a typical mobile connection.
      That's the difference between a sale and a lost customer. Compressing
      images ensures your site loads quickly regardless of the visitor's
      connection speed.
    </p>

    <p>
      Modern formats like{' '}
      <a href="/blog/jpg-vs-png-vs-webp-vs-avif">WebP and AVIF</a> offer
      significantly better compression ratios than traditional JPG and PNG. AVIF
      in particular can produce files 50% smaller than JPG at equivalent visual
      quality — a game-changer for mobile performance.
    </p>

    <h2 id="bandwidth-savings">Bandwidth Savings and Hosting Costs</h2>

    <p>
      Every byte your server delivers costs money. CDN providers like
      Cloudflare, AWS CloudFront, and Fastly charge based on data transfer. If
      your site serves 100,000 page views per month with an average of 3 MB of
      images per page, that's 300 GB of image data alone.
    </p>

    <p>
      Compress those images by 70% and you're down to 90 GB — a saving of 210 GB
      per month. Depending on your CDN pricing, that can translate to hundreds
      of dollars saved annually. For high-traffic sites, the savings multiply
      quickly.
    </p>

    <p>
      Bandwidth savings also benefit your visitors directly. Users on metered
      mobile data plans consume less of their allowance, and visitors in regions
      with expensive data — common across parts of Africa, South America, and
      Southeast Asia — will appreciate a lighter page.
    </p>

    <h2 id="bounce-rate">Bounce Rate Reduction</h2>

    <p>
      The relationship between page speed and bounce rate is well documented.
      Akamai research found that a 100-millisecond delay in page load time
      reduces conversion rates by up to 7%. Amazon famously reported that every
      100 ms of latency cost them 1% in sales.
    </p>

    <p>
      Your visitors make snap judgments. If a page feels sluggish — even
      subconsciously — they're more likely to hit the back button. Slow-loading
      images create a cascade of negative impressions: blank spaces where photos
      should be, layout jumps as images pop in, and a general sense that the
      site isn't trustworthy or well-maintained.
    </p>

    <p>
      Compressed images eliminate these problems. The page renders quickly, the
      layout stays stable, and visitors can focus on your content instead of
      waiting for it to appear.
    </p>

    <h2 id="how-to-compress">How to Start Compressing Your Images Today</h2>

    <p>
      The good news is that image compression doesn't require expensive tools or
      technical expertise. With <a href="/">ShrinkImg</a>, you can compress
      images directly in your browser — no uploads, no installations, and
      complete privacy since everything runs locally on your device.
    </p>

    <p>Here's a practical workflow:</p>

    <ul>
      <li>
        <strong>Resize first</strong> — if your image is 4000 px wide but
        displays at 800 px, resize it before compressing. You'll eliminate
        unnecessary pixels and get a much smaller file.
      </li>
      <li>
        <strong>Choose the right format</strong> — use WebP for the best balance
        of quality and size, AVIF for maximum compression, and PNG only when you
        need lossless transparency. Check our{' '}
        <a href="/blog/jpg-vs-png-vs-webp-vs-avif">format comparison guide</a>{' '}
        for detailed recommendations.
      </li>
      <li>
        <strong>Target quality 75–85</strong> — for photographs, this range
        delivers 60–80% file size reduction with no perceptible quality loss at
        normal viewing sizes.
      </li>
      <li>
        <strong>Always compare</strong> — ShrinkImg shows the original and
        compressed versions side by side so you can verify the result before
        downloading.
      </li>
    </ul>

    <h2 id="real-world-impact">The Real-World Impact: Before and After</h2>

    <p>
      Consider a typical small business website with 10 pages, each containing
      3–5 images. Without optimization, the total image payload might be 50 MB
      across the site. After compression:
    </p>

    <ul>
      <li>Total image weight drops to ~10 MB (80% reduction)</li>
      <li>Average page load time decreases from 4.5 seconds to 1.8 seconds</li>
      <li>
        LCP improves from 3.8 seconds to 1.5 seconds (passing Core Web Vitals)
      </li>
      <li>
        Monthly bandwidth usage drops by 200+ GB for a moderately trafficked
        site
      </li>
      <li>
        Bounce rate typically decreases by 15–25% following speed improvements
      </li>
    </ul>

    <p>
      These aren't theoretical numbers — they're the kind of results site owners
      see consistently when they commit to compressing every image before
      publishing. The effort is minimal, but the impact on performance, SEO, and
      user experience is substantial.
    </p>

    <p>
      If you're running a{' '}
      <a href="/blog/optimize-images-wordpress">WordPress site</a>, image
      optimization is even more critical since themes and page builders tend to
      add multiple image sizes for every upload.
    </p>

    <p>
      Image compression isn't optional in 2026 — it's a fundamental part of
      building fast, accessible, and search-friendly websites. Start compressing
      your images today and see the difference for yourself.
    </p>
  </Fragment>
);

export default WhyImageCompressionMattersEn;
