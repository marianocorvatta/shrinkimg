import { h, Fragment, FunctionalComponent } from 'preact';

const ReduceImageSizeEmailEn: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>
          Most email clients impose a 10–15 MB total email size limit; images
          should stay well under this
        </li>
        <li>
          Aim for individual email images under 200 KB — 50–100 KB is ideal for
          fast rendering
        </li>
        <li>
          Resize to actual display dimensions first: 600 px wide is the standard
          email content width
        </li>
        <li>
          JPG is the safest format for email photos; PNG for logos and graphics
          with transparency
        </li>
        <li>
          Avoid WebP and AVIF in email — Outlook and many mobile clients don't
          support them
        </li>
      </ul>
    </div>

    <p>
      Email campaigns live and die by their images. A beautifully designed
      newsletter with oversized images may never fully render — images that are
      too heavy load slowly, trigger spam filters, and send Gmail clipping your
      message with a "View entire message" warning. Getting image sizes right is
      one of the most practical things you can do to improve email
      deliverability and engagement.
    </p>

    <p>
      This guide covers exactly what size limits apply, what dimensions to use,
      and how to compress images for email without any noticeable quality loss.
    </p>

    <h2 id="email-size-limits">Email Client Image Size Limits</h2>

    <p>
      Every major email provider has rules about how large an email can be
      before it gets clipped or rejected. Here's what you're working with:
    </p>

    <table>
      <thead>
        <tr>
          <th>Email Client / Provider</th>
          <th>Total Email Size Limit</th>
          <th>Behavior When Exceeded</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gmail</td>
          <td>102 KB (HTML)</td>
          <td>
            Clips message and hides content; images still load from server
          </td>
        </tr>
        <tr>
          <td>Outlook (desktop)</td>
          <td>~20 MB total</td>
          <td>May block or flag as potential spam</td>
        </tr>
        <tr>
          <td>Yahoo Mail</td>
          <td>25 MB total</td>
          <td>Rejects oversized messages</td>
        </tr>
        <tr>
          <td>Apple Mail</td>
          <td>No fixed limit</td>
          <td>Slower rendering with large images</td>
        </tr>
        <tr>
          <td>Most ESPs (Mailchimp, etc.)</td>
          <td>Typically 10–30 MB</td>
          <td>Upload rejected above threshold</td>
        </tr>
      </tbody>
    </table>

    <p>
      The Gmail clipping threshold is the most important one. Gmail clips the
      HTML of any email that exceeds 102 KB — images themselves are hosted
      externally and load separately, but heavy HTML around images pushes you
      over the limit. Keep your entire email lean.
    </p>

    <p>
      More practically: images in emails are almost always hosted on a server
      and referenced by URL, not embedded in the email itself. The size that
      matters is how quickly those images download in the recipient's email
      client. A 2 MB hero image renders slowly even on a fast connection, and
      not at all for users on mobile data.
    </p>

    <h2 id="recommended-dimensions">Recommended Image Dimensions for Email</h2>

    <p>
      Email design has converged on a standard width of <strong>600 px</strong>
      for the content area. This works across Outlook, Gmail, and Apple Mail on
      both desktop and mobile. Images wider than 600 px will be scaled down by
      the email client anyway, so you're just serving unnecessary pixels.
    </p>

    <table>
      <thead>
        <tr>
          <th>Image Type</th>
          <th>Recommended Width</th>
          <th>Target File Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hero / header image</td>
          <td>600 px</td>
          <td>Under 150 KB</td>
        </tr>
        <tr>
          <td>Product images (full width)</td>
          <td>600 px</td>
          <td>Under 100 KB</td>
        </tr>
        <tr>
          <td>Product images (2-column grid)</td>
          <td>280–300 px</td>
          <td>Under 50 KB</td>
        </tr>
        <tr>
          <td>Logo / header logo</td>
          <td>200–300 px</td>
          <td>Under 30 KB</td>
        </tr>
        <tr>
          <td>Thumbnail / icon</td>
          <td>100–150 px</td>
          <td>Under 15 KB</td>
        </tr>
        <tr>
          <td>Background / banner</td>
          <td>1200 px (for retina)</td>
          <td>Under 200 KB</td>
        </tr>
      </tbody>
    </table>

    <p>
      For retina (high-DPI) displays, you can serve images at 2x their display
      size — so a 600 px wide column would use a 1200 px image — but compress
      aggressively to keep file size in check.
    </p>

    <h2 id="best-formats">Best Image Formats for Email</h2>

    <p>
      Unlike web browsers, email clients have very uneven support for modern
      image formats. This makes format choice more conservative for email than
      for web pages.
    </p>

    <h3 id="jpg-for-photos">JPG for Photographs</h3>
    <p>
      JPG is your safest choice for photographs in email. Every email client on
      every device supports it. Use quality 70–80 for email — slightly lower
      than web because email images are typically smaller, so minor quality
      reduction is less noticeable.
    </p>

    <h3 id="png-for-graphics">PNG for Logos and Graphics</h3>
    <p>
      Use PNG for logos, icons, and any graphic with transparency or sharp
      edges. PNG renders crisp text and line art that JPG would soften or
      artifact. Compress PNG files before uploading — many design tools export
      PNGs with embedded metadata and unnecessary color profiles that inflate
      the file size significantly.
    </p>

    <h3 id="avoid-modern-formats">Avoid WebP and AVIF in Email</h3>
    <p>
      WebP and AVIF are excellent for web pages but should be avoided in email.
      Microsoft Outlook (all desktop versions) does not support WebP. Many
      mobile email clients — including some versions of Gmail on Android — have
      inconsistent WebP support. Since broken images in email are far worse than
      slightly larger JPG files, stick with JPG and PNG.
    </p>

    <h3 id="gif-for-animation">GIF for Simple Animation</h3>
    <p>
      If you need animation in email, GIF remains the universal choice. Outlook
      only shows the first frame of a GIF, so design the first frame to make
      sense as a static image. Keep animated GIFs under 500 KB — large GIFs are
      the most common cause of slow-rendering emails.
    </p>

    <h2 id="compress-without-quality-loss">
      How to Compress Email Images Without Losing Quality
    </h2>

    <p>
      The key insight is that email images are viewed at small sizes on screens
      that are often held at arm's length. At 600 px wide, a quality setting of
      70–80 on a JPG is visually indistinguishable from quality 95 — but the
      file is 3–4x smaller.
    </p>

    <h3 id="step-by-step">Step-by-Step With ShrinkImg</h3>

    <p>
      <a href="/">ShrinkImg</a> runs entirely in your browser, so your images
      never leave your device. Here's the workflow:
    </p>

    <ol>
      <li>
        <strong>Open your image in ShrinkImg.</strong> Drag and drop or paste
        directly from your clipboard.
      </li>
      <li>
        <strong>Resize to email dimensions.</strong> Set the width to 600 px (or
        the appropriate dimension for your email layout). This is the most
        impactful step — resizing from 3000 px to 600 px alone reduces file size
        by roughly 96% before any compression.
      </li>
      <li>
        <strong>Choose JPG and set quality 70–80.</strong> The side-by-side
        preview lets you verify the quality looks acceptable before downloading.
        For most photographs, 75 is the sweet spot.
      </li>
      <li>
        <strong>Check the file size.</strong> The target is under 100–150 KB for
        a full-width email image. If it's still over, nudge the quality down to
        65 and check again.
      </li>
      <li>
        <strong>Download and upload to your ESP.</strong> Upload the compressed
        file to Mailchimp, Klaviyo, Brevo, or whichever platform you use.
      </li>
    </ol>

    <h2 id="spam-and-deliverability">
      Images, Spam Filters, and Deliverability
    </h2>

    <p>
      Heavy images affect more than rendering speed — they can affect whether
      your email reaches the inbox. Spam filters look at the ratio of images to
      text. An email that's mostly images with little text is a classic spam
      pattern, so always include meaningful alt text and a reasonable amount of
      body copy alongside your images.
    </p>

    <p>Other image-related deliverability tips:</p>

    <ul>
      <li>
        <strong>Never embed images as base64 in the HTML.</strong> This
        massively inflates email size and triggers spam filters. Always host
        images externally and reference by URL.
      </li>
      <li>
        <strong>Always include alt text.</strong> Many recipients have images
        disabled by default (especially in Outlook). Alt text ensures your
        message communicates even when images don't load.
      </li>
      <li>
        <strong>Use HTTPS image URLs.</strong> HTTP image links may be blocked
        by email clients or flagged as insecure.
      </li>
      <li>
        <strong>Test before sending.</strong> Tools like Litmus or Email on Acid
        show how your email renders across clients and flag oversized images.
      </li>
    </ul>

    <h2 id="quick-reference">Quick Reference: Email Image Checklist</h2>

    <ul>
      <li>Hero images: 600 px wide, JPG quality 70–80, under 150 KB</li>
      <li>
        Product images: 280–600 px wide depending on columns, under 100 KB
      </li>
      <li>Logos: PNG, under 30 KB</li>
      <li>Animated GIFs: under 500 KB, first frame works as static fallback</li>
      <li>No WebP or AVIF (Outlook doesn't support them)</li>
      <li>Alt text on every image</li>
      <li>Host images externally — never embed as base64</li>
    </ul>

    <p>
      Getting email images right isn't complicated once you know the targets.
      Resize to 600 px, compress to quality 75, export as JPG, and you'll have
      images that load fast, render consistently, and never trigger the Gmail
      clipping warning. The entire workflow takes under a minute per image with{' '}
      <a href="/">ShrinkImg</a>.
    </p>

    <p>
      If you want to go deeper on format choices for other contexts, see our{' '}
      <a href="/blog/jpg-vs-png-vs-webp-vs-avif/">
        complete guide to image formats
      </a>{' '}
      or learn{' '}
      <a href="/blog/why-image-compression-matters/">
        why image compression matters for web performance
      </a>
      .
    </p>
  </Fragment>
);

export default ReduceImageSizeEmailEn;
