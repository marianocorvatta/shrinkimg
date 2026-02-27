import { h, Fragment, FunctionalComponent } from 'preact';

const OnlineImageCompressionPrivacyEn: FunctionalComponent = () => (
  <Fragment>
    <div class="blog-key-takeaways">
      <h2>Key Takeaways</h2>
      <ul>
        <li>
          Server-side compression tools upload your images to external servers —
          browser-based tools never do
        </li>
        <li>
          ShrinkImg runs entirely in your browser using WebAssembly: your images
          never leave your device
        </li>
        <li>
          For sensitive content (client photos, confidential product images,
          medical scans), browser-based compression is the only safe option
        </li>
        <li>
          No account, no login, no retention: nothing is stored, logged, or
          processed on any server
        </li>
        <li>
          GDPR and HIPAA compliance is far simpler when data never leaves your
          device
        </li>
      </ul>
    </div>

    <p>
      When you compress an image using an online tool, where does your image
      actually go? For most tools, the answer is: to a server somewhere. Your
      file is transmitted over the internet, processed on external hardware, and
      — depending on the tool's privacy policy — potentially logged, retained,
      or analyzed. For the vast majority of images, this is a minor concern. For
      sensitive content, it's a significant one.
    </p>

    <p>
      This guide explains the difference between server-side and browser-based
      image compression, what actually happens to your files with each approach,
      and why it matters for specific use cases.
    </p>

    <h2 id="how-server-side-works">How Server-Side Compression Works</h2>

    <p>
      Traditional online image compression tools operate on a straightforward
      model: your browser sends the image file to their servers, their server
      runs compression software (ImageMagick, libvips, Sharp, or similar), and
      sends back the compressed result. The image exists on external
      infrastructure for the duration of the process — and sometimes longer.
    </p>

    <p>
      The privacy implications depend entirely on the tool's data handling
      practices:
    </p>

    <ul>
      <li>
        <strong>Transmission:</strong> Your image travels over the internet to
        someone else's server. HTTPS encrypts it in transit, but the destination
        server can read it.
      </li>
      <li>
        <strong>Processing:</strong> The image is written to temporary storage
        on the server for processing. In busy infrastructure, temporary files
        may persist longer than expected due to caching or failure modes.
      </li>
      <li>
        <strong>Retention:</strong> Some tools retain uploaded images for a
        period (hours, days) to support features like re-downloading or
        processing history. Check the privacy policy. "We delete images after X
        hours" still means they existed on external servers.
      </li>
      <li>
        <strong>Logging:</strong> Server infrastructure logs requests. Access
        logs may capture file names, sizes, IP addresses, and timestamps, even
        when image content is not explicitly retained.
      </li>
    </ul>

    <p>
      None of this is necessarily malicious — it's just how server-side
      processing works. But it means your images have left your control.
    </p>

    <h2 id="how-browser-based-works">How Browser-Based Compression Works</h2>

    <p>
      Browser-based tools like ShrinkImg take a fundamentally different
      approach. Instead of sending your image to a server, they run compression
      code directly inside your browser using WebAssembly (WASM) — a binary
      instruction format that modern browsers can execute at near-native speed.
    </p>

    <p>
      The compression libraries (for WebP, AVIF, PNG, JPEG) are compiled to WASM
      and loaded into your browser tab. When you compress an image, the
      processing happens entirely in the browser's sandboxed environment. Your
      image data never leaves your device — it travels only from your file
      system into browser memory and back.
    </p>

    <p>
      From a network perspective, the only traffic is the initial page load and
      the WASM module download. After that, no outbound requests are made that
      contain your image data.
    </p>

    <h2 id="what-this-means-for-sensitive-content">
      What This Means for Sensitive Content
    </h2>

    <h3 id="client-photos">Client Photography and Professional Work</h3>
    <p>
      Photographers and videographers working with client images — weddings,
      corporate events, editorial — often have confidentiality obligations.
      Sending client photos through a third-party compression service, even
      briefly, raises questions about consent and data handling. Browser-based
      compression removes those questions entirely: client images stay on your
      hardware.
    </p>

    <h3 id="product-images-pre-launch">Pre-Launch Product Images</h3>
    <p>
      E-commerce teams preparing for product launches often need to compress
      images weeks before going live. Sending unreleased product photos to
      third-party servers — even reputable ones — creates an unnecessary data
      exposure. If you're optimizing images for a launch and those images
      represent trade secrets or unreleased products, browser-based compression
      keeps them off external infrastructure until you're ready to publish.
    </p>

    <h3 id="medical-legal-documents">Medical or Legal Documents</h3>
    <p>
      Scanned documents, medical images, and legal paperwork are often converted
      to image formats for sharing or archival. Compressing these through
      server-side tools raises immediate HIPAA, GDPR, and attorney-client
      privilege concerns. A browser-based tool with no server transmission
      sidesteps these issues entirely — there's no data processor to sign
      agreements with, no upload to audit.
    </p>

    <h3 id="corporate-confidential">Corporate Confidential Materials</h3>
    <p>
      Presentations, org charts, financial reports captured as screenshots,
      internal design mockups — organizations routinely compress images that
      contain information that wouldn't survive a security audit if sent to
      external servers. Browser-based compression is the straightforward
      solution.
    </p>

    <h2 id="gdpr-and-compliance">GDPR, HIPAA, and Compliance</h2>

    <p>
      GDPR defines "processing" broadly — it includes transmitting, storing, and
      analyzing personal data. If your images contain identifiable individuals
      (faces, names, addresses visible in documents), sending them to a
      third-party server for compression likely constitutes processing of
      personal data under GDPR. That means you need a legal basis, a data
      processing agreement with the tool provider, and potentially disclosure in
      your privacy notices.
    </p>

    <p>
      HIPAA is even more explicit: protected health information (PHI) cannot be
      transmitted to third parties without a Business Associate Agreement (BAA).
      Most online compression tools don't offer BAAs.
    </p>

    <p>
      With browser-based compression, these compliance questions disappear.
      There is no data processor. No transmission of personal data occurs. No
      BAA is required. The images stay on the device of the person performing
      the compression.
    </p>

    <h2 id="questions-to-ask">
      Questions to Ask When Evaluating Any Compression Tool
    </h2>

    <p>Before using any image compression tool for sensitive content, ask:</p>

    <ul>
      <li>
        <strong>Where is processing performed?</strong> Is it client-side
        (browser) or server-side? If the tool requires an internet connection to
        compress, it's server-side.
      </li>
      <li>
        <strong>What does the privacy policy say about image retention?</strong>{' '}
        "We don't store images" and "Images are deleted after 24 hours" are very
        different claims.
      </li>
      <li>
        <strong>Is there a data processing agreement available?</strong> For
        business use under GDPR or HIPAA, you need a DPA or BAA with any tool
        that processes data on your behalf.
      </li>
      <li>
        <strong>Does the tool work offline?</strong> A browser-based tool that
        works without internet access after the initial load is a strong signal
        of genuine client-side processing.
      </li>
      <li>
        <strong>Who owns the tool and where are their servers?</strong> For
        GDPR, the location of processing infrastructure matters — EU data
        residency requirements may apply.
      </li>
    </ul>

    <h2 id="shrinkimg-approach">How ShrinkImg Handles This</h2>

    <p>
      ShrinkImg was built specifically around browser-based processing. The
      compression pipeline — WebP encoding, AVIF encoding, PNG optimization,
      JPEG re-encoding — runs entirely via WebAssembly in your browser tab. No
      image data is transmitted to any server at any point in the compression
      process.
    </p>

    <p>
      This is why ShrinkImg works even if you disconnect from the internet after
      the page loads. The WASM modules are cached in your browser; the
      compression itself requires no network access. For bulk workflows
      involving sensitive images — see our{' '}
      <a href="/blog/compress-images-bulk">guide to bulk image compression</a> —
      this means you can process an entire library of confidential images
      without any of them leaving your device.
    </p>

    <p>
      There are no user accounts, no upload history, no session logging of image
      content. When you close the browser tab, the session ends. Nothing
      persists except the downloaded compressed files on your local storage.
    </p>

    <h2 id="practical-recommendations">Practical Recommendations</h2>

    <ul>
      <li>
        <strong>
          For general web images (stock photos, decorative graphics,
          non-sensitive product images):
        </strong>{' '}
        any reputable compression tool is fine. Convenience and output quality
        are the primary factors.
      </li>
      <li>
        <strong>
          For client work, pre-launch materials, or anything with
          confidentiality obligations:
        </strong>{' '}
        use a browser-based tool exclusively. The privacy difference is not
        theoretical.
      </li>
      <li>
        <strong>For healthcare, legal, or financial contexts:</strong> browser-
        based compression with no server transmission is the only compliant
        option unless you have explicit DPA/BAA arrangements in place.
      </li>
      <li>
        <strong>For organizations with information security policies:</strong>{' '}
        browser-based compression can be approved as a category without
        requiring per-tool security reviews, since no data egress occurs.
      </li>
    </ul>

    <p>
      Image compression is a routine task, but the tool you choose determines
      where your images go. For sensitive content, the gap between server-side
      and browser-based tools isn't minor — it's the difference between data
      staying on your device and data leaving it. If that distinction matters
      for your use case, <a href="/">ShrinkImg</a> is built to keep it on your
      side.
    </p>
  </Fragment>
);

export default OnlineImageCompressionPrivacyEn;
