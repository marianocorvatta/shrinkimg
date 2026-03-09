import { h, Fragment, FunctionalComponent } from 'preact';

const JpgVsPngVsWebpVsAvifEn: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>JPG is best for photographs when broad compatibility is needed</li>
        <li>
          PNG is the go-to for graphics with transparency or pixel-perfect
          detail
        </li>
        <li>
          WebP delivers 25–35% smaller files than JPG with near-universal
          browser support
        </li>
        <li>
          AVIF offers the best compression overall — up to 50% smaller than JPG
          — but encoding is slower
        </li>
        <li>
          Choosing the right format for each image type is one of the easiest
          performance wins
        </li>
      </ul>
    </div>

    <p>
      Choosing the right image format is one of the most impactful decisions you
      can make for web performance. Each format — JPG, PNG, WebP, and AVIF — has
      distinct strengths and trade-offs. Use the wrong one and you're either
      serving unnecessarily large files or sacrificing quality where it matters.
    </p>

    <p>
      This guide covers what each format does well, where it falls short, and
      when to use it. Whether you're building a portfolio site, an e-commerce
      store, or a blog, understanding these formats will help you deliver
      fast-loading pages without compromising visual quality.
    </p>

    <h2 id="jpg-format">JPG (JPEG): The Universal Photograph Format</h2>

    <p>
      JPG has been the standard photographic format on the web since the 1990s.
      It uses lossy compression, meaning it permanently discards some image data
      to achieve smaller files. The encoder analyzes the image and removes
      details the human eye is least likely to notice — subtle color
      transitions, fine noise, and high-frequency texture.
    </p>

    <h3 id="jpg-strengths">JPG Strengths</h3>
    <ul>
      <li>
        <strong>Universal support</strong> — every browser, device, email
        client, and image editor handles JPG without issues.
      </li>
      <li>
        <strong>Excellent for photos</strong> — the lossy algorithm is
        specifically designed for continuous-tone photographic images.
      </li>
      <li>
        <strong>Adjustable quality</strong> — you can dial the quality from 1 to
        100, trading file size for visual fidelity. Quality 75–85 is the sweet
        spot for most web use.
      </li>
      <li>
        <strong>Small file sizes</strong> — a high-quality JPG photo is
        typically 60–80% smaller than the equivalent uncompressed bitmap.
      </li>
    </ul>

    <h3 id="jpg-limitations">JPG Limitations</h3>
    <ul>
      <li>
        <strong>No transparency</strong> — JPG doesn't support alpha channels.
        If you need transparent backgrounds, look at PNG, WebP, or AVIF.
      </li>
      <li>
        <strong>Compression artifacts</strong> — at low quality settings, JPG
        produces visible blockiness and color banding, especially around sharp
        edges and text.
      </li>
      <li>
        <strong>No animation</strong> — JPG is a single-frame format. For
        animated images, consider WebP or GIF.
      </li>
      <li>
        <strong>Generational loss</strong> — re-saving a JPG compounds
        artifacts. Always compress from the original source, not from an
        already-compressed JPG.
      </li>
    </ul>

    <h2 id="png-format">PNG: Lossless Quality and Transparency</h2>

    <p>
      PNG was created as a patent-free replacement for GIF and has become the
      standard for graphics that require lossless reproduction or transparency.
      Unlike JPG, PNG preserves every pixel exactly as-is — the decompressed
      image is bit-for-bit identical to the original.
    </p>

    <h3 id="png-strengths">PNG Strengths</h3>
    <ul>
      <li>
        <strong>Lossless compression</strong> — no quality loss at all. Every
        pixel is preserved exactly.
      </li>
      <li>
        <strong>Full transparency</strong> — supports 8-bit alpha channels for
        smooth, partial transparency (semi-transparent shadows, anti-aliased
        edges).
      </li>
      <li>
        <strong>Sharp edges and text</strong> — ideal for screenshots, logos,
        diagrams, UI elements, and anything with crisp lines.
      </li>
      <li>
        <strong>Universal support</strong> — every modern browser and tool
        handles PNG.
      </li>
    </ul>

    <h3 id="png-limitations">PNG Limitations</h3>
    <ul>
      <li>
        <strong>Large file sizes for photos</strong> — a photographic PNG can be
        5–10x larger than an equivalent JPG. Lossless compression simply can't
        compete with lossy for continuous-tone images.
      </li>
      <li>
        <strong>No native animation</strong> — APNG exists but has limited
        support and large files compared to alternatives.
      </li>
    </ul>

    <h2 id="webp-format">WebP: The Modern All-Rounder</h2>

    <p>
      Developed by Google, WebP is designed to replace both JPG and PNG on the
      web. It supports lossy compression, lossless compression, transparency,
      and animation — all in a single format. Since 2023, WebP is supported by
      all major browsers including Chrome, Firefox, Safari, and Edge.
    </p>

    <h3 id="webp-strengths">WebP Strengths</h3>
    <ul>
      <li>
        <strong>Smaller than JPG</strong> — lossy WebP produces files 25–35%
        smaller than JPG at equivalent visual quality.
      </li>
      <li>
        <strong>Smaller than PNG</strong> — lossless WebP is typically 26%
        smaller than PNG.
      </li>
      <li>
        <strong>Transparency support</strong> — lossy WebP with alpha is
        dramatically smaller than PNG with transparency.
      </li>
      <li>
        <strong>Animation support</strong> — animated WebP is significantly
        smaller than GIF while offering better color depth.
      </li>
      <li>
        <strong>Near-universal browser support</strong> — over 97% of browsers
        in use today support WebP.
      </li>
    </ul>

    <h3 id="webp-limitations">WebP Limitations</h3>
    <ul>
      <li>
        <strong>Not ideal for print</strong> — design and print workflows still
        typically require JPG, TIFF, or PNG.
      </li>
      <li>
        <strong>Encoding speed</strong> — WebP encoding is slower than JPG,
        though this only matters for real-time processing.
      </li>
    </ul>

    <h2 id="avif-format">AVIF: Maximum Compression</h2>

    <p>
      AVIF is the newest format in this comparison, based on the AV1 video codec
      developed by the Alliance for Open Media. It pushes compression efficiency
      further than any previous image format, and browser support has grown
      rapidly — Chrome, Firefox, Safari (16.4+), and Edge all support it.
    </p>

    <h3 id="avif-strengths">AVIF Strengths</h3>
    <ul>
      <li>
        <strong>Best-in-class compression</strong> — AVIF files are typically
        50% smaller than JPG and 20% smaller than WebP at equivalent quality.
      </li>
      <li>
        <strong>Excellent color fidelity</strong> — supports HDR, wide color
        gamut (WCG), and 10/12-bit color depth.
      </li>
      <li>
        <strong>Transparency and animation</strong> — full alpha channel support
        and animated sequences.
      </li>
      <li>
        <strong>Clean at low bitrates</strong> — where JPG shows blocky
        artifacts, AVIF degrades more gracefully with a softer, less
        objectionable appearance.
      </li>
    </ul>

    <h3 id="avif-limitations">AVIF Limitations</h3>
    <ul>
      <li>
        <strong>Slow encoding</strong> — AVIF compression is computationally
        expensive. Encoding a single image can take 5–20x longer than JPG. This
        makes it less suited for real-time processing but perfectly fine for
        pre-compressed assets.
      </li>
      <li>
        <strong>Growing but not universal support</strong> — about 93% of
        browsers support AVIF. Older Safari versions and some niche browsers
        don't, so you may need a JPG or WebP fallback.
      </li>
      <li>
        <strong>Limited tool support</strong> — many image editors still lack
        native AVIF export. Browser-based tools like <a href="/">ShrinkImg</a>{' '}
        fill this gap nicely.
      </li>
    </ul>

    <h2 id="comparison-table">Format Comparison Table</h2>

    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>JPG</th>
          <th>PNG</th>
          <th>WebP</th>
          <th>AVIF</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Compression type</td>
          <td>Lossy</td>
          <td>Lossless</td>
          <td>Both</td>
          <td>Both</td>
        </tr>
        <tr>
          <td>Transparency</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Animation</td>
          <td>No</td>
          <td>No</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Browser support</td>
          <td>100%</td>
          <td>100%</td>
          <td>97%+</td>
          <td>93%+</td>
        </tr>
        <tr>
          <td>Best for</td>
          <td>Photos</td>
          <td>Graphics, screenshots</td>
          <td>General web use</td>
          <td>Maximum compression</td>
        </tr>
        <tr>
          <td>File size (photo, quality ~80)</td>
          <td>Baseline</td>
          <td>5–10x larger</td>
          <td>25–35% smaller</td>
          <td>50% smaller</td>
        </tr>
        <tr>
          <td>Encoding speed</td>
          <td>Fast</td>
          <td>Fast</td>
          <td>Moderate</td>
          <td>Slow</td>
        </tr>
        <tr>
          <td>Color depth</td>
          <td>8-bit</td>
          <td>8/16-bit</td>
          <td>8-bit</td>
          <td>8/10/12-bit</td>
        </tr>
      </tbody>
    </table>

    <h2 id="when-to-use">When to Use Each Format</h2>

    <h3 id="use-jpg">Use JPG when:</h3>
    <ul>
      <li>
        You need maximum compatibility (email, legacy systems, social media
        uploads)
      </li>
      <li>You're serving photographs and don't need transparency</li>
      <li>File size is less critical than universal support</li>
    </ul>

    <h3 id="use-png">Use PNG when:</h3>
    <ul>
      <li>You need lossless quality (screenshots, diagrams, pixel art)</li>
      <li>You need transparency with maximum compatibility</li>
      <li>The image has sharp edges, text, or flat colors</li>
    </ul>

    <h3 id="use-webp">Use WebP when:</h3>
    <ul>
      <li>You want the best balance of quality, size, and compatibility</li>
      <li>You need transparency with smaller files than PNG</li>
      <li>You want a single format that works for photos and graphics</li>
    </ul>

    <h3 id="use-avif">Use AVIF when:</h3>
    <ul>
      <li>Maximum file size reduction is the priority</li>
      <li>You can provide a WebP or JPG fallback for older browsers</li>
      <li>You're pre-compressing assets (not generating on the fly)</li>
      <li>You need HDR or wide color gamut support</li>
    </ul>

    <h2 id="practical-recommendation">Practical Recommendation for 2026</h2>

    <p>
      For most websites today, the best approach is to serve AVIF as the primary
      format with a WebP fallback. This covers 97%+ of browsers with optimal
      compression. For the remaining edge cases, a JPG fallback ensures
      universal compatibility.
    </p>

    <p>
      If managing multiple formats sounds like too much work, simply converting
      everything to WebP is an excellent single-format strategy. You'll get
      25–35% smaller files than JPG with negligible compatibility concerns.
    </p>

    <p>
      No matter which format you choose, always compress your images before
      publishing. <a href="/">ShrinkImg</a> lets you compare formats side by
      side in your browser, so you can see exactly how much space each one saves
      with your specific images — all without uploading a single file.
      Understanding{' '}
      <a href="/blog/why-image-compression-matters/">
        why image compression matters
      </a>{' '}
      is the first step toward building faster, more efficient websites.
    </p>
  </Fragment>
);

export default JpgVsPngVsWebpVsAvifEn;
