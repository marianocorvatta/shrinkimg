import { h, Fragment, FunctionalComponent } from 'preact';

const CompressImagesBulkEn: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>
          Bulk compression is essential when migrating sites, building
          e-commerce catalogs, or preparing portfolios
        </li>
        <li>
          ShrinkImg lets you drop multiple files at once — each is processed
          independently in your browser with no uploads
        </li>
        <li>
          Consistent settings across a batch (same format, same quality) produce
          a visually uniform result
        </li>
        <li>
          Resize before compressing: establish a maximum width per image type
          and apply it uniformly
        </li>
        <li>
          Name files systematically before compressing to make post-processing
          organization fast
        </li>
      </ul>
    </div>

    <p>
      Most image compression guidance focuses on one image at a time. But the
      situations where compression matters most — launching a new site,
      migrating a content library, uploading a product catalog — involve dozens
      or hundreds of images at once. Handling each one individually is
      impractical. You need a repeatable bulk workflow.
    </p>

    <p>
      This guide covers when bulk image compression is necessary, how to handle
      it efficiently with ShrinkImg, and how to maintain quality and consistency
      across large batches.
    </p>

    <h2 id="when-you-need-bulk">When You Need Bulk Image Compression</h2>

    <h3 id="site-migration">Website Migration</h3>
    <p>
      Migrating a site to a new platform — from Squarespace to WordPress, from a
      custom CMS to Shopify, from one hosting provider to another — is an ideal
      moment to audit and optimize every image in your library. Images that were
      uploaded years ago, before modern format support, may be uncompressed
      JPEGs from camera exports. A bulk compression pass before importing can
      cut your media library size by 60–80%.
    </p>

    <h3 id="ecommerce-catalog">E-commerce Product Catalog</h3>
    <p>
      Launching a new store with 50, 200, or 500 products means processing an
      equal number of product photos — often in multiple sizes (main image,
      thumbnail, zoom). This is exactly the scenario where a systematic bulk
      approach pays off. See our{' '}
      <a href="/blog/image-optimization-ecommerce/">
        e-commerce image optimization guide
      </a>{' '}
      for size recommendations per image type.
    </p>

    <h3 id="portfolio-gallery">Portfolio or Photo Gallery</h3>
    <p>
      Photographers, designers, and illustrators frequently need to export an
      entire portfolio for the web. Camera RAW exports or high-res PSDs can run
      10–30 MB each. Bulk compression brings them down to web-ready sizes
      without degrading the visual quality that showcases your work.
    </p>

    <h3 id="content-audit">Content Library Audit</h3>
    <p>
      Established blogs and news sites accumulate years of unoptimized images.
      Running a bulk pass on legacy content images reduces page weight on older
      posts and can improve{' '}
      <a href="/blog/core-web-vitals-images/">Core Web Vitals</a> scores
      site-wide when those pages are crawled and the CrUX data updates.
    </p>

    <h2 id="how-shrinkimg-handles-bulk">
      How ShrinkImg Handles Multiple Files
    </h2>

    <p>
      ShrinkImg accepts multiple files in a single session. You can drag a
      folder of images onto the interface or select multiple files at once from
      the file picker. Each image is queued and processed independently — the
      compression runs entirely in your browser using WebAssembly, so nothing is
      uploaded to any server. Your entire image library stays on your device.
    </p>

    <p>
      This is particularly important for bulk workflows involving sensitive
      content — client photos, confidential product images before a launch,
      personal documents converted to images. For a full explanation of why
      browser-based compression is safer than server-side tools, see our guide
      on{' '}
      <a href="/blog/online-image-compression-privacy/">
        image compression privacy and security
      </a>
      .
    </p>

    <h2 id="consistent-settings">Maintaining Consistency Across a Batch</h2>

    <p>
      The biggest risk in bulk compression is inconsistency — some images end up
      crisper, others softer, with no visible logic to the variation. Here's how
      to avoid it:
    </p>

    <h3 id="same-format">
      Use the Same Format for All Images of the Same Type
    </h3>
    <p>
      Decide upfront: product photos get WebP at quality 80, logos get PNG at
      maximum compression, hero images get WebP at quality 85. Mixing formats
      without a clear rationale creates a maintenance headache and visual
      inconsistency when images are displayed together in a grid.
    </p>

    <h3 id="consistent-quality">Lock the Quality Setting</h3>
    <p>
      Choose one quality setting and apply it uniformly. For photographs, 75–80
      is the right range for web delivery — it yields 60–75% file size reduction
      with no perceptible difference at typical display sizes. Avoid the
      temptation to increase quality for "important" images — at web sizes, the
      difference between quality 80 and quality 95 is invisible but the file
      size difference is substantial.
    </p>

    <h3 id="max-width">Set a Maximum Width Per Image Category</h3>
    <p>Establish width targets before you begin and apply them uniformly:</p>
    <ul>
      <li>Hero images: 1600 px</li>
      <li>Blog post images: 1200 px</li>
      <li>Product images: 1000 px</li>
      <li>Gallery thumbnails: 500 px</li>
      <li>Related content cards: 400 px</li>
    </ul>
    <p>
      Resize every image in a category to its target width before applying
      compression. Consistent dimensions make the compressed output visually
      uniform and ensure you're not serving unnecessarily large files in any
      slot.
    </p>

    <h2 id="organize-before">Organize Files Before You Start</h2>

    <p>
      Bulk compression is easier when your source files are organized before you
      begin, not after. A few minutes of pre-organization saves hours of
      confusion when the compressed files land in your downloads folder.
    </p>

    <h3 id="naming-convention">Establish a Naming Convention</h3>
    <p>
      Name source files according to their destination before compressing. A
      naming scheme like <code>category-product-name-size.webp</code> (e.g.,
      <code>shoes-running-trail-1000.webp</code>) makes it immediately clear
      what the file is, where it belongs, and which size variant it represents.
    </p>

    <p>
      Avoid names like <code>IMG_4532.jpg</code> or <code>photo (1).jpg</code>.
      When you have 200 compressed files in a folder, generic names make
      matching them to their destinations a frustrating manual exercise.
    </p>

    <h3 id="folder-structure">Sort by Image Type</h3>
    <p>Group images by type before compressing:</p>
    <ul>
      <li>
        <code>/heroes/</code> — full-width images
      </li>
      <li>
        <code>/products/</code> — main product shots
      </li>
      <li>
        <code>/thumbnails/</code> — small card images
      </li>
      <li>
        <code>/logos/</code> — PNG graphics
      </li>
    </ul>
    <p>
      Process each folder separately, applying the correct settings for that
      image type. This way the output is already sorted by the time you're ready
      to upload.
    </p>

    <h2 id="workflow-recommendations">Bulk Compression Workflow</h2>

    <p>
      Here's a reliable step-by-step process for compressing a large batch
      without errors or rework:
    </p>

    <ol>
      <li>
        <strong>Audit your source files.</strong> Identify which images are
        already optimized (if any) and which need processing. Sort out any that
        don't need to be published — dead stock is better deleted than
        compressed.
      </li>
      <li>
        <strong>Rename all files</strong> according to your naming convention
        before touching the images. This is much easier to do on the original
        files than on the outputs.
      </li>
      <li>
        <strong>Sort by category</strong> (heroes, products, thumbnails, logos)
        into separate folders.
      </li>
      <li>
        <strong>Decide on settings per category:</strong> format (WebP for
        photos, PNG for graphics), quality (80 for standard, 85 for hero),
        maximum width.
      </li>
      <li>
        <strong>Open ShrinkImg and drop the first category folder.</strong>{' '}
        Apply consistent settings and download all outputs.
      </li>
      <li>
        <strong>Spot-check five random images</strong> from each batch before
        uploading. Verify quality looks correct and file sizes are in the
        expected range.
      </li>
      <li>
        <strong>Upload to your CMS or CDN</strong> in the same category-by-
        category order you compressed them.
      </li>
    </ol>

    <h2 id="quality-control">Quality Control at Scale</h2>

    <p>
      The side-by-side comparison in ShrinkImg lets you spot issues before
      downloading. When processing a batch, pay particular attention to:
    </p>

    <ul>
      <li>
        <strong>Images with fine text or sharp lines</strong> — these are more
        sensitive to lossy compression. Consider bumping quality to 85 for
        images that contain product labels, pricing, or instructional text.
      </li>
      <li>
        <strong>Images with flat areas of solid color</strong> — compression can
        introduce banding in gradients and solid fills. Check these carefully,
        especially for brand-critical images.
      </li>
      <li>
        <strong>Very dark or very bright images</strong> — shadow detail and
        highlight clipping are exaggerated by aggressive compression. Verify
        that important detail in highlights and shadows is preserved.
      </li>
    </ul>

    <h2 id="post-batch-audit">After the Batch: Verify Before Publishing</h2>

    <p>Before uploading compressed images to a live site:</p>

    <ul>
      <li>
        Confirm total file size is in the expected range. If your source batch
        was 500 MB, a 70% reduction should produce roughly 150 MB of output.
        Significantly more suggests settings weren't applied consistently.
      </li>
      <li>
        Open five randomly selected output images in a browser and compare them
        against the source. The difference should be imperceptible at the sizes
        they'll appear on the page.
      </li>
      <li>
        Run a test page through{' '}
        <a href="/blog/core-web-vitals-images/">PageSpeed Insights</a> after
        uploading the first batch to verify the expected performance
        improvement.
      </li>
    </ul>

    <p>
      Bulk image compression is a high-leverage operation — a few hours of
      systematic processing can dramatically improve your site's performance,
      reduce hosting costs, and fix{' '}
      <a href="/blog/why-image-compression-matters/">
        the number one cause of slow web pages
      </a>{' '}
      across your entire content library at once. Start with your heaviest pages
      first, work category by category, and use ShrinkImg to keep every image
      off the server until it's already optimized.
    </p>
  </Fragment>
);

export default CompressImagesBulkEn;
