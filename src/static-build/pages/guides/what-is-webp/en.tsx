import { h, Fragment, FunctionalComponent } from 'preact';

const WhatIsWebpEn: FunctionalComponent = () => (
  <Fragment>
    <h1>What is WebP and Why Should You Use It?</h1>

    <p>
      WebP is a modern image format developed by Google that provides superior
      compression for images on the web. It supports both lossy and lossless
      compression, transparency, and even animation — combining the best
      features of JPG, PNG, and GIF into a single format with smaller file
      sizes.
    </p>

    <h2>A Brief History of WebP</h2>
    <p>
      Google introduced WebP in 2010 as part of its effort to make the web
      faster. The format is based on the VP8 video codec (later updated to VP8L
      for lossless) and was designed from the ground up for web delivery.
      Initially controversial due to limited browser support, WebP has since
      been adopted by all major browsers and is now used by millions of websites
      worldwide.
    </p>

    <h2>WebP Advantages Over JPG and PNG</h2>

    <h3>Smaller File Sizes</h3>
    <p>
      This is WebP's biggest selling point. In Google's own testing, lossy WebP
      images are 25–34% smaller than comparable JPGs at the same visual quality.
      Lossless WebP files are about 26% smaller than PNGs. For a website serving
      thousands of images, these savings translate directly into faster load
      times and lower bandwidth costs.
    </p>

    <h3>Transparency Support</h3>
    <p>
      Unlike JPG, WebP supports alpha channel transparency in both lossy and
      lossless modes. Lossy WebP with transparency is particularly useful — it's
      something no other widely-supported format offers, and the files are
      dramatically smaller than equivalent PNGs.
    </p>

    <h3>Animation Support</h3>
    <p>
      Animated WebP is a modern alternative to GIF with far better compression
      and color depth. Animated WebP files support 24-bit color and alpha
      transparency, while GIF is limited to 256 colors. For sites that use
      animated images, switching from GIF to animated WebP can reduce file sizes
      by 50% or more.
    </p>

    <h3>Single Format for Everything</h3>
    <p>
      Instead of maintaining separate JPG files for photos and PNG files for
      graphics, you can use WebP for both. This simplifies your asset pipeline
      and reduces the number of format decisions you need to make.
    </p>

    <h2>Browser Support</h2>
    <p>WebP is now supported by all modern browsers:</p>
    <ul>
      <li>
        <strong>Chrome</strong> — since version 17 (2012)
      </li>
      <li>
        <strong>Firefox</strong> — since version 65 (2019)
      </li>
      <li>
        <strong>Safari</strong> — since version 14 (2020)
      </li>
      <li>
        <strong>Edge</strong> — since version 18 (2018)
      </li>
      <li>
        <strong>Opera</strong> — since version 12 (2012)
      </li>
    </ul>
    <p>
      According to Can I Use, WebP is supported by over 96% of browsers
      worldwide. The only notable holdouts are very old browser versions that
      represent a small fraction of traffic.
    </p>

    <h2>WebP vs AVIF</h2>
    <p>
      AVIF is the next evolution in web image formats, offering even better
      compression than WebP — typically 20–30% smaller at equivalent quality.
      However, WebP still has advantages:
    </p>
    <ul>
      <li>
        <strong>Broader browser support</strong> — WebP at 96%+ vs AVIF at 92%+.
      </li>
      <li>
        <strong>Faster encoding</strong> — WebP encodes significantly faster
        than AVIF, making it better for real-time conversion workflows.
      </li>
      <li>
        <strong>More mature ecosystem</strong> — better tool and CMS support.
      </li>
    </ul>
    <p>
      For a complete format comparison, check our{' '}
      <a href="/guides/jpg-vs-png-vs-webp-vs-avif">
        JPG vs PNG vs WebP vs AVIF guide
      </a>
      .
    </p>

    <h2>How to Convert Images to WebP</h2>
    <p>
      Converting your existing images to WebP is straightforward with ShrinkImg:
    </p>

    <h3>Step 1 — Open Your Image</h3>
    <p>
      Drag and drop any JPG, PNG, or other image into ShrinkImg. The app works
      entirely in your browser — nothing is uploaded to any server.
    </p>

    <h3>Step 2 — Select WebP as the Output Format</h3>
    <p>
      In the output settings panel, choose WebP. Adjust the quality slider — for
      photos, 75–85 is usually the sweet spot. For graphics and screenshots, try
      lossless mode for pixel-perfect output.
    </p>

    <h3>Step 3 — Compare and Download</h3>
    <p>
      Use the side-by-side comparison to verify the output looks good. Check the
      file size reduction displayed below the image. When satisfied, click{' '}
      <strong>Download</strong> to save the WebP file.
    </p>

    <h2>When to Use WebP</h2>
    <ul>
      <li>Website images — photos, banners, thumbnails, product images.</li>
      <li>Graphics that need transparency without PNG's large file sizes.</li>
      <li>Animated content as a replacement for GIF.</li>
      <li>
        Any scenario where you want a single, well-supported modern format. See
        our <a href="/guides/compress-images-for-web">web optimization guide</a>{' '}
        for recommended sizes and settings.
      </li>
    </ul>

    <h2>When Not to Use WebP</h2>
    <ul>
      <li>
        <strong>Email campaigns</strong> — many email clients don't support
        WebP. Stick with JPG and PNG for email.
      </li>
      <li>
        <strong>Print workflows</strong> — use TIFF or the original uncompressed
        format.
      </li>
      <li>
        <strong>When AVIF is an option</strong> — if your audience's browsers
        support it and you want even smaller files.
      </li>
    </ul>

    <a class="guide-cta" href="/">
      Convert to WebP Now — Free
    </a>
  </Fragment>
);

export default WhatIsWebpEn;
