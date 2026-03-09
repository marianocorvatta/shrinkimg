import { h, Fragment, FunctionalComponent } from 'preact';

const ImageOptimizationEcommerceEn: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>
          A 100 ms improvement in load time correlates with a 1% increase in
          revenue for e-commerce sites
        </li>
        <li>
          Product pages with optimized images convert up to 25% better than
          slow-loading equivalents
        </li>
        <li>
          Use 800–1200 px product images compressed to WebP at quality 80 for
          the best speed/quality balance
        </li>
        <li>
          Thumbnails should be under 15 KB each — they're loaded in bulk on
          category pages
        </li>
        <li>
          Google Shopping has specific image quality requirements; poorly
          optimized images can hurt ad performance
        </li>
      </ul>
    </div>

    <p>
      In e-commerce, milliseconds translate directly into dollars. A Deloitte
      study found that a 0.1-second improvement in mobile site speed increased
      conversion rates by 8.4% and average order value by 9.2%. Images are the
      single largest contributor to slow product pages — and the easiest to fix.
    </p>

    <p>
      This guide covers everything you need to know about optimizing product
      images: the right sizes, formats, and compression levels that maximize
      visual quality while keeping your product pages fast enough to convert.
    </p>

    <h2 id="speed-conversions">
      How Page Speed Affects E-commerce Conversions
    </h2>

    <p>
      The research on page speed and conversions is unambiguous. Google found
      that 53% of mobile users abandon a page that takes longer than 3 seconds
      to load. For a store generating $50,000 per month, shaving 2 seconds off
      your product page load time could mean $10,000–$15,000 in additional
      monthly revenue.
    </p>

    <p>
      Product pages are typically the heaviest pages on an e-commerce site. A
      single product listing might load 1 main image, 5–8 gallery shots, a zoom
      image, and 10–20 related product thumbnails. If each image is an
      uncompressed JPG from a camera or design tool, you could easily be serving
      30–50 MB of images on a single page.
    </p>

    <p>
      Compress those same images properly and the total drops to 2–4 MB — a 90%+
      reduction with no visible quality difference at display sizes. That
      translates to product pages that load in under 2 seconds instead of 8.
    </p>

    <h2 id="product-image-sizes">Recommended Sizes for Product Images</h2>

    <p>
      Different image contexts on a product page have different requirements.
      Here's a practical reference:
    </p>

    <table>
      <thead>
        <tr>
          <th>Image Type</th>
          <th>Recommended Size</th>
          <th>Target File Size</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Main product image</td>
          <td>1000–1200 px</td>
          <td>80–150 KB</td>
          <td>Supports zoom without being excessive</td>
        </tr>
        <tr>
          <td>Zoom / enlarged view</td>
          <td>2000–2400 px</td>
          <td>200–400 KB</td>
          <td>Only loaded on user interaction</td>
        </tr>
        <tr>
          <td>Gallery thumbnails</td>
          <td>100–150 px</td>
          <td>5–15 KB</td>
          <td>All loaded at once — keep very small</td>
        </tr>
        <tr>
          <td>Category / listing thumbnail</td>
          <td>400–600 px</td>
          <td>20–50 KB</td>
          <td>Multiple load simultaneously on category pages</td>
        </tr>
        <tr>
          <td>Related products</td>
          <td>300–400 px</td>
          <td>15–30 KB</td>
          <td>Often 8–20 displayed at once</td>
        </tr>
        <tr>
          <td>Cart / mini-cart</td>
          <td>80–120 px</td>
          <td>3–8 KB</td>
          <td>Tiny — keep under 10 KB</td>
        </tr>
      </tbody>
    </table>

    <h3 id="zoom-images">A Note on Zoom Images</h3>
    <p>
      Many stores use JavaScript zoom plugins that load a high-resolution image
      when the user hovers or taps a product. These zoom images need to be
      larger — 2000–2400 px — but they don't need to be loaded with the initial
      page. Configure your zoom plugin to load them lazily on interaction. A 400
      KB zoom image that loads only when requested has no impact on initial page
      load time.
    </p>

    <h2 id="best-format">Best Format for Product Images</h2>

    <p>
      <strong>WebP is the best choice for product images in 2026.</strong> It's
      supported by all modern browsers (97%+) and produces files 25–35% smaller
      than equivalent JPGs. For a store with 500 products, this translates to
      gigabytes of storage savings and dramatically faster category page loads.
    </p>

    <p>
      If your platform doesn't support WebP uploads natively (some older Shopify
      themes, Magento 1), use JPG at quality 80–85. Avoid PNG for product photos
      — the files are enormous and offer no quality benefit over JPG for
      photographic images.
    </p>

    <p>
      For graphics with transparency — lifestyle images with cutout backgrounds,
      branded overlays — WebP with alpha channel or PNG are both valid. WebP
      will be significantly smaller.
    </p>

    <h2 id="shopify-platforms">Platform-Specific Notes</h2>

    <h3 id="shopify">Shopify</h3>
    <p>
      Shopify automatically serves WebP to browsers that support it and JPEG to
      others, but only if you upload high-quality source images. Upload JPG at
      quality 85+ or WebP — Shopify re-encodes at its own settings. The source
      image quality matters because Shopify generates multiple sizes from it.
    </p>

    <h3 id="woocommerce">WooCommerce</h3>
    <p>
      WooCommerce behaves like WordPress — it generates multiple size variants
      from your upload. Compress and resize your images before uploading, as
      described in our{' '}
      <a href="/blog/optimize-images-wordpress/">
        WordPress image optimization guide
      </a>
      . WebP uploads are supported since WooCommerce 8.x with the right theme.
    </p>

    <h2 id="google-shopping">Google Shopping Image Requirements</h2>

    <p>
      If you run Google Shopping ads, image quality directly affects your ad's
      performance. Google's requirements and best practices:
    </p>

    <ul>
      <li>
        <strong>Minimum size:</strong> 100 × 100 px (250 × 250 px for clothing).
        Google recommends at least 800 × 800 px for best ad performance.
      </li>
      <li>
        <strong>Maximum file size:</strong> 16 MB. In practice, images over 2 MB
        may slow your feed crawling.
      </li>
      <li>
        <strong>No watermarks, borders, or promotional text</strong> overlaid on
        the main product image. Reject rates spike when images violate this.
      </li>
      <li>
        <strong>White or neutral backgrounds</strong> perform best for most
        product categories.
      </li>
    </ul>

    <p>
      An 800 × 800 px product image at WebP quality 80 typically comes out
      around 40–80 KB — well within limits and fast to crawl.
    </p>

    <h2 id="mobile-shopping">Mobile Shopping Experience</h2>

    <p>
      Mobile commerce accounts for over 70% of e-commerce traffic globally.
      Mobile shoppers are impatient — a 1-second delay on mobile increases
      bounce rate by 123%, according to Google research.
    </p>

    <p>
      On mobile, product images load sequentially as the user scrolls. Thumbnail
      grids are particularly punishing — a category page showing 24 products,
      each with a 200 KB thumbnail, is downloading 4.8 MB just for the product
      tiles. Cut thumbnails to 30 KB each and you're serving 720 KB instead —
      the page loads 6x faster.
    </p>

    <p>Practical mobile optimizations:</p>

    <ul>
      <li>
        Use lazy loading on images below the fold — let the browser load visible
        products first
      </li>
      <li>
        Serve smaller images to mobile viewports using <code>srcset</code> and{' '}
        <code>sizes</code> attributes where your platform supports it
      </li>
      <li>
        Keep above-the-fold product images (the first row of a category page)
        eager-loaded and under 50 KB each
      </li>
      <li>
        Never use full-resolution images for thumbnail grids — generate and
        compress dedicated thumbnail sizes
      </li>
    </ul>

    <h2 id="batch-workflow">How to Compress Product Images With ShrinkImg</h2>

    <p>For a product catalog, the workflow is:</p>

    <ol>
      <li>
        <strong>Start from the highest quality source.</strong> Use the original
        studio photos or renders before any compression. Compressing an already
        compressed JPG compounds artifacts.
      </li>
      <li>
        <strong>Resize to 1000–1200 px width.</strong> This is the right size
        for a main product image that also supports reasonable zoom.
      </li>
      <li>
        <strong>Compress to WebP at quality 80.</strong>{' '}
        <a href="/">ShrinkImg</a> shows the before/after side by side — verify
        there's no visible quality difference before downloading.
      </li>
      <li>
        <strong>Create separate thumbnail versions.</strong> For category pages,
        resize to 400–500 px and compress to quality 75. These load in bulk so
        every KB counts.
      </li>
      <li>
        <strong>Name files consistently.</strong> A consistent naming convention
        (product-slug-1.webp, product-slug-2.webp) makes asset management much
        easier at scale.
      </li>
    </ol>

    <p>
      The initial time investment of compressing your product catalog pays
      dividends continuously. Faster product pages, better Core Web Vitals
      scores, lower CDN bandwidth bills, and higher conversion rates are all
      downstream effects of this one-time effort.
    </p>

    <p>
      For a deeper understanding of{' '}
      <a href="/blog/why-image-compression-matters/">
        why image compression matters for web performance
      </a>{' '}
      or to learn about the differences between{' '}
      <a href="/blog/jpg-vs-png-vs-webp-vs-avif/">JPG, PNG, WebP, and AVIF</a>,
      check out those guides next.
    </p>
  </Fragment>
);

export default ImageOptimizationEcommerceEn;
