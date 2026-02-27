# ShrinkImg

[ShrinkImg] is a free online image compressor. Shrink JPG, PNG, WebP and AVIF files instantly in your browser. No upload needed — 100% private.

## Fork of Squoosh

ShrinkImg is a fork of [Squoosh](https://github.com/GoogleChromeLabs/squoosh) by Google Chrome Labs, licensed under the [Apache License 2.0](./LICENSE).

The original Squoosh copyright is retained in all modified source files. A summary of changes made to the original work is documented in the [NOTICE](./NOTICE) file, as required by the Apache License 2.0 (Section 4).

## Privacy

ShrinkImg does not send your image to a server. All image compression happens locally in your browser.

However, ShrinkImg uses Google Analytics to collect the following:

- [Basic visitor data](https://support.google.com/analytics/answer/6004245?ref_topic=2919631).
- The before and after image size value.

## Developing

To develop for ShrinkImg:

1. Clone the repository
1. Install node packages:
   ```sh
   npm install
   ```
1. Build the app:
   ```sh
   npm run build
   ```
1. Start the development server:
   ```sh
   npm run dev
   ```

## Contributing

ShrinkImg is open source and appreciates community involvement. To contribute, follow the [contribute guide](/CONTRIBUTING.md).

[shrinkimg]: https://shrinkimg.com
