import { h, Fragment, FunctionalComponent } from 'preact';

const JpgVsPngVsWebpVsAvifEn: FunctionalComponent = () => (
  <Fragment>
    <h1>JPG vs PNG vs WebP vs AVIF — Which Format to Use?</h1>

    <p>
      Choosing the right image format can cut file sizes in half — or double
      them — depending on the content. This guide breaks down the four most
      common web image formats so you can pick the best one for every situation.
    </p>

    <h2>Quick Comparison</h2>
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
          <td>Compression</td>
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
          <td>No (APNG)</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Browser support</td>
          <td>Universal</td>
          <td>Universal</td>
          <td>96%+</td>
          <td>92%+</td>
        </tr>
        <tr>
          <td>Best for</td>
          <td>Photos</td>
          <td>Graphics, screenshots</td>
          <td>General web use</td>
          <td>Maximum compression</td>
        </tr>
      </tbody>
    </table>

    <h2>JPG (JPEG)</h2>
    <p>
      JPG has been the default photo format on the web since the 1990s. It uses
      lossy compression tuned for continuous-tone photographs, and every
      browser, device, and image editor supports it.
    </p>
    <h3>When to Use JPG</h3>
    <ul>
      <li>Photos and complex images with many colors and gradients.</li>
      <li>When you need universal compatibility with no exceptions.</li>
      <li>Email attachments — every mail client handles JPG.</li>
    </ul>
    <h3>When to Avoid JPG</h3>
    <ul>
      <li>
        Images that need transparency — JPG doesn't support alpha channels.
      </li>
      <li>
        Text-heavy screenshots or line art — JPG creates visible artifacts
        around sharp edges.
      </li>
      <li>
        When you need lossless quality — each save degrades the image further.
      </li>
    </ul>

    <h2>PNG</h2>
    <p>
      PNG uses lossless compression and supports full alpha transparency. It's
      the go-to format for graphics, logos, icons, and screenshots where sharp
      edges and text must stay crisp.
    </p>
    <h3>When to Use PNG</h3>
    <ul>
      <li>Graphics, logos, and icons with sharp edges or text.</li>
      <li>Images requiring transparency.</li>
      <li>Screenshots and diagrams where every pixel matters.</li>
    </ul>
    <h3>When to Avoid PNG</h3>
    <ul>
      <li>Photographs — PNG files for photos are enormous compared to JPG.</li>
      <li>When file size is the priority and lossy quality is acceptable.</li>
    </ul>

    <h2>WebP</h2>
    <p>
      Developed by Google, WebP supports both lossy and lossless compression,
      transparency, and animation — all in one format. Lossy WebP files are
      typically 25–35% smaller than equivalent JPGs, and lossless WebP is about
      25% smaller than PNG. Learn more in our{' '}
      <a href="/guides/what-is-webp">What is WebP</a> guide.
    </p>
    <h3>When to Use WebP</h3>
    <ul>
      <li>General web use — it handles photos and graphics well.</li>
      <li>
        When you want smaller files than JPG/PNG without switching to AVIF.
      </li>
      <li>Animated images as a lighter alternative to GIF.</li>
    </ul>
    <h3>When to Avoid WebP</h3>
    <ul>
      <li>
        When targeting very old browsers or software that doesn't support it.
      </li>
      <li>Print workflows that require TIFF or uncompressed formats.</li>
    </ul>

    <h2>AVIF</h2>
    <p>
      AVIF is the newest format in this list, based on the AV1 video codec. It
      delivers the best compression ratios — often 50% smaller than JPG at
      equivalent visual quality — and supports transparency, HDR, and wide color
      gamut.
    </p>
    <h3>When to Use AVIF</h3>
    <ul>
      <li>When you want the smallest possible file size for photos.</li>
      <li>
        High-quality images where every kilobyte matters (e.g., mobile-first
        sites).
      </li>
      <li>HDR or wide-gamut content.</li>
    </ul>
    <h3>When to Avoid AVIF</h3>
    <ul>
      <li>
        When you need encoding speed — AVIF is slower to encode than other
        formats.
      </li>
      <li>
        When browser support gaps are unacceptable (older Safari, some Android
        browsers).
      </li>
    </ul>

    <h2>Recommendations</h2>
    <p>For most use cases, here's a simple decision guide:</p>
    <ul>
      <li>
        <strong>Photos for the web</strong> → use WebP with JPG fallback, or
        AVIF if you can serve fallbacks.
      </li>
      <li>
        <strong>Logos, icons, screenshots</strong> → use PNG, or lossless WebP
        for smaller files.
      </li>
      <li>
        <strong>Maximum compression</strong> → use AVIF where supported, WebP as
        fallback.
      </li>
      <li>
        <strong>Universal compatibility</strong> → stick with JPG for photos,
        PNG for graphics.
      </li>
    </ul>
    <p>
      No matter which format you choose, compressing your images before
      publishing is the single most impactful optimization you can make. See our{' '}
      <a href="/guides/compress-images-for-web">
        guide to compressing images for the web
      </a>{' '}
      for practical tips.
    </p>

    <a class="guide-cta" href="/">
      Try All Formats in ShrinkImg — Free
    </a>
  </Fragment>
);

export default JpgVsPngVsWebpVsAvifEn;
