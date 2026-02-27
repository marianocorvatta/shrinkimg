import { h, Fragment, FunctionalComponent } from 'preact';

const WebpGuide2026En: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>
          WebP has near-universal browser support in 2026 — every major browser
          has supported it for years
        </li>
        <li>
          WebP reduces file size 25–35% compared to JPEG at equivalent visual
          quality
        </li>
        <li>
          Use WebP for photographs, complex images, and anything that was
          previously a JPEG
        </li>
        <li>
          AVIF offers slightly better compression than WebP but has slower
          encoding — WebP is the practical default
        </li>
        <li>
          ShrinkImg converts any image to WebP entirely in your browser, with no
          uploads required
        </li>
      </ul>
    </div>

    <p>
      WebP has been around since 2010, but its adoption curve was slow — browser
      support was incomplete, WordPress didn't handle it natively, and most
      image pipelines weren't set up for it. In 2026, those barriers are gone.
      WebP is the practical default format for web images, supported everywhere
      and delivering meaningful compression improvements over JPEG.
    </p>

    <p>
      This guide covers everything you need to know about WebP in 2026: what it
      is, how it compares to alternatives, when to use it, and how to convert
      your existing image library.
    </p>

    <h2 id="what-is-webp">What Is WebP?</h2>

    <p>
      WebP is an image format developed by Google and released in 2010. It uses
      both lossy and lossless compression algorithms derived from the VP8 video
      codec. The key properties that make it useful for the web:
    </p>

    <ul>
      <li>
        <strong>Lossy compression:</strong> Better efficiency than JPEG at
        equivalent quality. A WebP at quality 80 produces a smaller file than a
        JPEG at quality 80 with less visible degradation.
      </li>
      <li>
        <strong>Lossless compression:</strong> Compresses better than PNG for
        images with many colors while maintaining exact pixel reproduction.
      </li>
      <li>
        <strong>Transparency support:</strong> Like PNG, WebP supports alpha
        channel transparency — unlike JPEG.
      </li>
      <li>
        <strong>Animation support:</strong> WebP can store animations like GIF,
        with far smaller file sizes.
      </li>
    </ul>

    <p>
      For web use, the lossy mode is most relevant. WebP's compression
      efficiency comes from its ability to model and discard visual information
      more intelligently than JPEG's DCT-based algorithm.
    </p>

    <h2 id="browser-support-2026">Browser Support in 2026</h2>

    <p>
      WebP support in 2026 is effectively universal for web users. Chrome,
      Firefox, Safari, Edge, and Opera have all supported WebP for years. Safari
      — historically the last major holdout — added full WebP support in Safari
      14 (released with iOS 14 in 2020). There are no meaningful segments of
      your user base that lack WebP support.
    </p>

    <p>
      The old workaround of serving JPEG fallbacks via the HTML{' '}
      <code>&lt;picture&gt;</code> element is no longer necessary for most
      sites. You can serve WebP files directly. The only exception is if you
      have analytics showing significant usage of very old browser versions —
      but in 2026, that audience is negligibly small for most sites.
    </p>

    <h2 id="webp-vs-jpeg">WebP vs JPEG</h2>

    <p>
      For photographs and complex images with gradients, textures, and many
      colors, WebP consistently outperforms JPEG:
    </p>

    <ul>
      <li>
        <strong>File size at equivalent quality:</strong> WebP is typically
        25–35% smaller than JPEG at the same perceptual quality level.
      </li>
      <li>
        <strong>Quality at equivalent file size:</strong> A WebP file of the
        same size as a JPEG will look visually better — less blocky compression
        artifacts, better edge preservation.
      </li>
      <li>
        <strong>Practical compression range:</strong> WebP at quality 75–80 is
        the sweet spot for web delivery — excellent visual quality with 60–75%
        file size reduction versus uncompressed source.
      </li>
    </ul>

    <p>
      The compression advantage comes from WebP's more sophisticated prediction
      model. JPEG operates on 8x8 pixel blocks and can produce visible
      "blockiness" at low quality settings. WebP uses variable block sizes and
      more advanced intra-frame prediction, which produces better results
      especially at lower bitrates.
    </p>

    <h2 id="webp-vs-png">WebP vs PNG</h2>

    <p>
      For images requiring transparency or exact color reproduction (logos,
      icons, UI graphics), the comparison is less clear-cut:
    </p>

    <ul>
      <li>
        <strong>Lossless WebP vs PNG:</strong> Lossless WebP is typically 25–34%
        smaller than PNG. For high-color images like photos with transparency,
        the savings are significant.
      </li>
      <li>
        <strong>Simple graphics:</strong> For icons, logos, and flat graphics
        with few colors, PNG often compresses comparably and has better tool
        support across design software.
      </li>
      <li>
        <strong>Recommendation:</strong> Convert transparency images with
        complex content (product photos with transparent backgrounds) to
        lossless WebP. Keep simple flat graphics as PNG or convert to SVG.
      </li>
    </ul>

    <h2 id="webp-vs-avif">WebP vs AVIF</h2>

    <p>
      AVIF is the newer contender — derived from the AV1 video codec, it
      typically achieves 10–20% better compression than WebP at equivalent
      quality. Browser support is now good (Chrome, Firefox, Safari all support
      it), but AVIF encoding is significantly slower than WebP encoding, which
      matters for build pipelines.
    </p>

    <p>The practical guidance for 2026:</p>

    <ul>
      <li>
        Use <strong>WebP</strong> as your default for all web images — it offers
        excellent compression with fast encoding and universal support.
      </li>
      <li>
        Use <strong>AVIF</strong> for high-traffic pages where maximum
        compression matters and you can afford slower build times, particularly
        for hero images and large feature images.
      </li>
      <li>
        Don't use <strong>JPEG</strong> for new content if WebP is an option.
        The compression gap is too significant.
      </li>
    </ul>

    <p>
      For a full format comparison including use cases, see our{' '}
      <a href="/blog/jpg-vs-png-vs-webp-vs-avif">
        JPG vs PNG vs WebP vs AVIF guide
      </a>
      .
    </p>

    <h2 id="when-to-use-webp">When to Use WebP</h2>

    <h3 id="photographs">Photographs and Complex Images</h3>
    <p>
      Any image that was previously a JPEG — product photos, blog post images,
      hero images, background textures — should be WebP. The compression benefit
      is consistent and meaningful: a typical product photography library
      converting from JPEG to WebP sees 25–35% total size reduction with no
      perceptible quality loss.
    </p>

    <h3 id="images-with-transparency">Images with Transparency</h3>
    <p>
      WebP supports alpha channel, making it a viable replacement for PNG where
      the image has photographic content with a transparent background — product
      cutouts, portrait photos with transparent backgrounds, overlays. Lossless
      WebP for simple graphics, lossy WebP for photographic content.
    </p>

    <h3 id="performance-sensitive-pages">Performance-Sensitive Pages</h3>
    <p>
      Pages where <a href="/blog/core-web-vitals-images">Core Web Vitals</a>{' '}
      performance is a priority — landing pages, product pages, checkout —
      benefit most from WebP. The file size reduction directly improves LCP
      (Largest Contentful Paint) by reducing the time to download the largest
      image on the page.
    </p>

    <h2 id="converting-to-webp">Converting Your Images to WebP</h2>

    <p>
      The simplest way to convert images to WebP without installing software is
      to use ShrinkImg. Drop your JPEG, PNG, or GIF files onto the interface,
      select WebP as the output format, set your quality (75–80 is the typical
      range for photographic content), and download. The conversion runs
      entirely in your browser — no uploads, no account required.
    </p>

    <p>
      For bulk conversion of an entire image library, ShrinkImg accepts multiple
      files in a single session. See our{' '}
      <a href="/blog/compress-images-bulk">bulk compression workflow guide</a>{' '}
      for a systematic approach to converting large image sets.
    </p>

    <h2 id="webp-and-wordpress">WebP and WordPress</h2>

    <p>
      WordPress has supported WebP uploads natively since version 5.8 (July
      2021). In 2026, there are no plugin requirements for using WebP in
      WordPress — you can upload WebP files directly via the Media Library.
    </p>

    <p>Common approaches for serving WebP in WordPress:</p>

    <ul>
      <li>
        <strong>Upload WebP directly:</strong> Convert your images to WebP
        before uploading. WordPress handles them natively and generates WebP
        thumbnails.
      </li>
      <li>
        <strong>Use a caching/CDN plugin:</strong> Plugins like WP Rocket and
        Cloudflare can serve WebP versions of your existing JPEG/PNG images
        automatically without re-uploading.
      </li>
      <li>
        <strong>CDN-level conversion:</strong> Cloudflare, Fastly, and
        Cloudfront support automatic WebP conversion at the CDN edge.
      </li>
    </ul>

    <p>
      For a complete guide to WordPress image optimization, see our{' '}
      <a href="/blog/optimize-images-wordpress">
        WordPress image optimization guide
      </a>
      .
    </p>

    <h2 id="common-webp-mistakes">Common WebP Mistakes to Avoid</h2>

    <ul>
      <li>
        <strong>Re-encoding WebP to WebP:</strong> If you already have a WebP
        file, don't re-compress it through another tool expecting further
        savings. Re-encoding a lossy file always introduces additional quality
        loss. Convert from original source files (RAW, PSD, high-quality JPEG).
      </li>
      <li>
        <strong>Using too high a quality setting:</strong> WebP at quality 90+
        produces files nearly as large as JPEG with minimal visual benefit at
        web display sizes. The 75–85 range is optimal for most web content.
      </li>
      <li>
        <strong>Forgetting to resize:</strong> Format conversion alone doesn't
        help if the image is 3000px wide for a 800px display slot. Always resize
        to the appropriate display dimensions as part of your optimization
        workflow.
      </li>
      <li>
        <strong>Using lossless WebP for photographs:</strong> Lossless WebP
        produces large files for photographic content. Use lossy mode for photos
        and lossless for graphics, logos, and flat illustrations.
      </li>
    </ul>

    <p>
      WebP is the format that should be powering most of the images on your site
      in 2026. The browser support concerns of earlier years are resolved. The
      compression advantages are real and measurable. Converting your existing
      JPEG library to WebP is one of the highest-impact image optimization tasks
      available — often 25–35% total page weight reduction with no change to
      visual presentation.
    </p>
  </Fragment>
);

export default WebpGuide2026En;
