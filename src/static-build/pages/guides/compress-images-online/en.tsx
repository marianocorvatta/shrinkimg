import { h, Fragment, FunctionalComponent } from 'preact';

const CompressImagesOnlineEn: FunctionalComponent = () => (
  <Fragment>
    <h1>How to Compress Images Online</h1>

    <p>
      Large image files slow down websites, eat up storage and make sharing
      difficult. Compressing images reduces their file size while keeping them
      looking good — and you can do it right in your browser without installing
      anything or uploading files to a server.
    </p>

    <h2>Why Compress Images?</h2>
    <p>
      Images typically account for the largest portion of a web page's total
      weight. A single unoptimized photo can easily be 3–5 MB, while the same
      image compressed can weigh under 200 KB. Smaller images mean:
    </p>
    <ul>
      <li>
        <strong>Faster page loads</strong> — visitors see content sooner and
        bounce rates drop.
      </li>
      <li>
        <strong>Lower bandwidth costs</strong> — important for mobile users on
        metered connections.
      </li>
      <li>
        <strong>Better SEO</strong> — Google uses page speed as a ranking
        factor, and Core Web Vitals reward optimized images.
      </li>
      <li>
        <strong>Easier sharing</strong> — email attachments, messaging apps and
        social media all have file-size limits.
      </li>
    </ul>

    <h2>Lossy vs Lossless Compression</h2>
    <p>
      There are two fundamental approaches to image compression, and
      understanding the difference helps you make the right choice for each
      situation.
    </p>

    <h3>Lossy Compression</h3>
    <p>
      Lossy compression permanently removes some image data to achieve much
      smaller files. The encoder discards details that the human eye is least
      likely to notice — subtle color gradients, fine texture in busy areas, and
      high-frequency noise. JPG, WebP (lossy mode), and AVIF all use lossy
      compression. A quality setting of 75–85 typically produces files 60–80%
      smaller than the original with no visible difference at normal viewing
      sizes.
    </p>

    <h3>Lossless Compression</h3>
    <p>
      Lossless compression reduces file size without discarding any data — the
      decompressed image is bit-for-bit identical to the original. PNG, WebP
      (lossless mode), and AVIF (lossless mode) support this. File-size
      reductions are more modest (10–50%), but this is the right choice for
      screenshots, technical diagrams, pixel art, and any image where every
      detail matters.
    </p>

    <h2>How to Compress Images with ShrinkImg</h2>
    <p>
      ShrinkImg runs entirely in your browser using WebAssembly, so your images
      never leave your device. Here's how to use it:
    </p>

    <h3>Step 1 — Open Your Image</h3>
    <p>
      Drag and drop an image onto the ShrinkImg window, or click to browse your
      files. You can also paste an image directly from your clipboard.
    </p>

    <h3>Step 2 — Choose a Format and Quality</h3>
    <p>
      ShrinkImg shows your original image on one side and the compressed version
      on the other. Pick an output format — JPG, PNG, WebP, or AVIF — and adjust
      the quality slider. The file-size difference updates in real time, so you
      can find the sweet spot between quality and size.
    </p>

    <h3>Step 3 — Compare and Download</h3>
    <p>
      Slide the comparison handle to inspect details. When you're happy with the
      result, hit <strong>Download</strong>. The compressed file is generated
      locally and saved straight to your device.
    </p>

    <h2>Best Practices for Image Compression</h2>
    <ul>
      <li>
        <strong>Start from the highest quality source</strong> — compressing an
        already-compressed JPG will introduce more artifacts. Always work from
        the original or a lossless copy.
      </li>
      <li>
        <strong>Resize before compressing</strong> — a 4000 × 3000 photo
        displayed at 800 px wide wastes bandwidth. Resize to the dimensions you
        actually need first.
      </li>
      <li>
        <strong>Use the right format</strong> — JPG for photos, PNG for graphics
        with transparency, WebP or AVIF for the best of both worlds. See our{' '}
        <a href="/guides/jpg-vs-png-vs-webp-vs-avif/">
          format comparison guide
        </a>{' '}
        for details.
      </li>
      <li>
        <strong>Aim for quality 75–85</strong> — for most photos, this range
        delivers major size savings with imperceptible quality loss.
      </li>
      <li>
        <strong>Check the result</strong> — always visually compare the
        compressed output. Some images (text, fine lines, gradients) are more
        sensitive to compression than others.
      </li>
    </ul>

    <h2>Privacy Matters</h2>
    <p>
      Many online compressors upload your images to their servers for
      processing. ShrinkImg is different: everything happens locally in your
      browser. Your photos, screenshots, and documents never leave your device —
      not even temporarily. This makes it safe for personal photos, confidential
      documents, and anything else you'd rather keep private.
    </p>

    <a class="guide-cta" href="/">
      Compress Your Images Now — Free
    </a>
  </Fragment>
);

export default CompressImagesOnlineEn;
