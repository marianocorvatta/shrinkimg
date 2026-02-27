import { h, Component } from 'preact';

import { linkRef } from 'shared/prerendered-app/util';
import '../../custom-els/loading-spinner';
import logo from 'url:./imgs/logo.svg';
import githubLogo from 'url:./imgs/github-logo.svg';
import largePhoto from 'url:./imgs/demos/demo-large-photo.jpg';
import artwork from 'url:./imgs/demos/demo-artwork.jpg';
import deviceScreen from 'url:./imgs/demos/demo-device-screen.png';
import largePhotoIcon from 'url:./imgs/demos/icon-demo-large-photo.jpg';
import artworkIcon from 'url:./imgs/demos/icon-demo-artwork.jpg';
import deviceScreenIcon from 'url:./imgs/demos/icon-demo-device-screen.jpg';
import smallSectionAsset from 'url:./imgs/info-content/small.svg';
import simpleSectionAsset from 'url:./imgs/info-content/simple.svg';
import secureSectionAsset from 'url:./imgs/info-content/secure.svg';
import logoIcon from 'url:./imgs/demos/icon-demo-logo.png';
import logoImg from 'url:static-build/assets/logo-w.png';
import * as style from './style.css';
import type SnackBarElement from 'shared/custom-els/snack-bar';
import 'shared/custom-els/snack-bar';
import { startBlobs } from './blob-anim/meta';
import SlideOnScroll from './SlideOnScroll';
import { t, getLocale } from 'shared/i18n';
import type { TranslationKey } from 'shared/i18n';

const demos = [
  {
    descriptionKey: 'intro.demoLargePhoto' as TranslationKey,
    size: '2.8MB',
    filename: 'photo.jpg',
    url: largePhoto,
    iconUrl: largePhotoIcon,
  },
  {
    descriptionKey: 'intro.demoArtwork' as TranslationKey,
    size: '2.9MB',
    filename: 'art.jpg',
    url: artwork,
    iconUrl: artworkIcon,
  },
  {
    descriptionKey: 'intro.demoDeviceScreen' as TranslationKey,
    size: '1.6MB',
    filename: 'pixel3.png',
    url: deviceScreen,
    iconUrl: deviceScreenIcon,
  },
  {
    descriptionKey: 'intro.demoSvgIcon' as TranslationKey,
    size: '13KB',
    filename: 'icon.svg',
    url: logo,
    iconUrl: logoIcon,
  },
] as const;

const blobAnimImport =
  !__PRERENDER__ && matchMedia('(prefers-reduced-motion: reduce)').matches
    ? undefined
    : import('./blob-anim');
const supportsClipboardAPI =
  !__PRERENDER__ && navigator.clipboard && navigator.clipboard.read;

async function getImageClipboardItem(
  items: ClipboardItem[],
): Promise<undefined | Blob> {
  for (const item of items) {
    const type = item.types.find((type) => type.startsWith('image/'));
    if (type) return item.getType(type);
  }
}

interface Props {
  onFile?: (file: File) => void;
  showSnack?: SnackBarElement['showSnackbar'];
}
interface State {
  fetchingDemoIndex?: number;
  showBlobSVG: boolean;
}

export default class Intro extends Component<Props, State> {
  state: State = {
    showBlobSVG: true,
  };
  private fileInput?: HTMLInputElement;
  private blobCanvas?: HTMLCanvasElement;

  componentDidMount() {
    if (blobAnimImport) {
      blobAnimImport.then((module) => {
        this.setState(
          {
            showBlobSVG: false,
          },
          () => module.startBlobAnim(this.blobCanvas!),
        );
      });
    }
  }

  private onFileChange = (event: Event): void => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    this.fileInput!.value = '';
    this.props.onFile!(file);
  };

  private onOpenClick = () => {
    this.fileInput!.click();
  };

  private onDemoClick = async (index: number, event: Event) => {
    try {
      this.setState({ fetchingDemoIndex: index });
      const demo = demos[index];
      const blob = await fetch(demo.url).then((r) => r.blob());
      const file = new File([blob], demo.filename, { type: blob.type });
      this.props.onFile!(file);
    } catch (err) {
      this.setState({ fetchingDemoIndex: undefined });
      this.props.showSnack!(t('snack.fetchDemoError'));
    }
  };

  private onPasteClick = async () => {
    let clipboardItems: ClipboardItem[];

    try {
      clipboardItems = await navigator.clipboard.read();
    } catch (err) {
      this.props.showSnack!(t('snack.clipboardNoPermission'));
      return;
    }

    const blob = await getImageClipboardItem(clipboardItems);

    if (!blob) {
      this.props.showSnack!(t('snack.clipboardNoImage'));
      return;
    }

    this.props.onFile!(new File([blob], 'image.unknown'));
  };

  render({}: Props, { fetchingDemoIndex, showBlobSVG }: State) {
    const locale = getLocale();
    const prefix = locale === 'en' ? '' : `/${locale}`;

    return (
      <div class={style.intro}>
        <input
          class={style.hide}
          ref={linkRef(this, 'fileInput')}
          type="file"
          onChange={this.onFileChange}
        />
        <div class={style.main}>
          {!__PRERENDER__ && (
            <canvas
              ref={linkRef(this, 'blobCanvas')}
              class={style.blobCanvas}
            />
          )}
          <div class={style.langSwitcher}>
            <a
              class={`${style.langLink} ${
                locale === 'en' ? style.langActive : ''
              }`}
              href="/"
            >
              {t('lang.en')}
            </a>
            <span class={style.langSep}>|</span>
            <a
              class={`${style.langLink} ${
                locale === 'es' ? style.langActive : ''
              }`}
              href="/es/"
            >
              {t('lang.es')}
            </a>
          </div>
          <h1 class={style.logoContainer}>
            <img class={style.logo} src={logoImg} alt={t('intro.logoAlt')} />
            <span class={style.logoBrandName}>{t('intro.brand')}</span>
            <span class={style.logoTagline}>{t('intro.tagline')}</span>
          </h1>
          <div class={style.loadImg}>
            {showBlobSVG && (
              <svg
                class={style.blobSvg}
                viewBox="-1.25 -1.25 2.5 2.5"
                preserveAspectRatio="xMidYMid slice"
              >
                {startBlobs.map((points) => (
                  <path
                    d={points
                      .map((point, i) => {
                        const nextI = i === points.length - 1 ? 0 : i + 1;
                        let d = '';
                        if (i === 0) {
                          d += `M${point[2]} ${point[3]}`;
                        }
                        return (
                          d +
                          `C${point[4]} ${point[5]} ${points[nextI][0]} ${points[nextI][1]} ${points[nextI][2]} ${points[nextI][3]}`
                        );
                      })
                      .join('')}
                  />
                ))}
              </svg>
            )}
            <div
              class={style.loadImgContent}
              style={{ visibility: __PRERENDER__ ? 'hidden' : '' }}
            >
              <button class={style.loadBtn} onClick={this.onOpenClick}>
                <svg viewBox="0 0 24 24" class={style.loadIcon}>
                  <path d="M19 7v3h-2V7h-3V5h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z" />
                </svg>
              </button>
              <div>
                <span class={style.dropText}>{t('intro.drop')}</span>
                {t('intro.or')}{' '}
                {supportsClipboardAPI ? (
                  <button class={style.pasteBtn} onClick={this.onPasteClick}>
                    {t('intro.paste')}
                  </button>
                ) : (
                  t('intro.paste')
                )}
              </div>
            </div>
          </div>
        </div>
        <div class={style.demosContainer}>
          <svg viewBox="0 0 1920 140" class={style.topWave}>
            <path
              d="M1920 0l-107 28c-106 29-320 85-533 93-213 7-427-36-640-50s-427 0-533 7L0 85v171h1920z"
              class={style.subWave}
            />
            <path
              d="M0 129l64-26c64-27 192-81 320-75 128 5 256 69 384 64 128-6 256-80 384-91s256 43 384 70c128 26 256 26 320 26h64v96H0z"
              class={style.mainWave}
            />
          </svg>
          <div class={style.contentPadding}>
            <p
              class={style.demoTitle}
              dangerouslySetInnerHTML={{ __html: t('intro.demoTitle') }}
            />
            <ul class={style.demos}>
              {demos.map((demo, i) => (
                <li>
                  <button
                    class="unbutton"
                    onClick={(event) => this.onDemoClick(i, event)}
                  >
                    <div class={style.demoContainer}>
                      <div class={style.demoIconContainer}>
                        <img
                          class={style.demoIcon}
                          src={demo.iconUrl}
                          alt={t(demo.descriptionKey)}
                        />
                        {fetchingDemoIndex === i && (
                          <div class={style.demoLoader}>
                            <loading-spinner />
                          </div>
                        )}
                      </div>
                      <div class={style.demoSize}>{demo.size}</div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class={style.bottomWave}>
          <svg viewBox="0 0 1920 79" class={style.topWave}>
            <path
              d="M0 59l64-11c64-11 192-34 320-43s256-5 384 4 256 23 384 34 256 21 384 14 256-30 320-41l64-11v94H0z"
              class={style.infoWave}
            />
          </svg>
        </div>

        {/* Ad Slot 1 — horizontal banner between demos and feature sections */}
        <div
          class={`${style.adSlot} ${style.adSlotHorizontal}`}
          id="ad-slot-top"
          aria-label={t('ad.label')}
        >
          <span class={style.adLabel}>{t('ad.label')}</span>
        </div>

        <section class={style.info}>
          <div class={style.infoContainer}>
            <SlideOnScroll>
              <div class={style.infoContent}>
                <div class={style.infoTextWrapper}>
                  <h2 class={style.infoTitle}>{t('info.smallTitle')}</h2>
                  <p class={style.infoCaption}>{t('info.smallCaption')}</p>
                </div>
                <div class={style.infoImgWrapper}>
                  <img
                    class={style.infoImg}
                    src={smallSectionAsset}
                    alt={t('info.smallAlt')}
                    width="536"
                    height="522"
                  />
                </div>
              </div>
            </SlideOnScroll>
          </div>
        </section>

        <section class={style.info}>
          <div class={style.infoContainer}>
            <SlideOnScroll>
              <div class={style.infoContent}>
                <div class={style.infoTextWrapper}>
                  <h2 class={style.infoTitle}>{t('info.simpleTitle')}</h2>
                  <p class={style.infoCaption}>{t('info.simpleCaption')}</p>
                </div>
                <div class={style.infoImgWrapper}>
                  <img
                    class={style.infoImg}
                    src={simpleSectionAsset}
                    alt={t('info.simpleAlt')}
                    width="538"
                    height="384"
                  />
                </div>
              </div>
            </SlideOnScroll>
          </div>
        </section>

        <section class={style.info}>
          <div class={style.infoContainer}>
            <SlideOnScroll>
              <div class={style.infoContent}>
                <div class={style.infoTextWrapper}>
                  <h2 class={style.infoTitle}>{t('info.secureTitle')}</h2>
                  <p class={style.infoCaption}>{t('info.secureCaption')}</p>
                </div>
                <div class={style.infoImgWrapper}>
                  <img
                    class={style.infoImg}
                    src={secureSectionAsset}
                    alt={t('info.secureAlt')}
                    width="498"
                    height="333"
                  />
                </div>
              </div>
            </SlideOnScroll>
          </div>
        </section>

        {/* Ad Slot 2 — rectangle between "Secure" section and FAQ */}
        <div
          class={`${style.adSlot} ${style.adSlotRectangle}`}
          id="ad-slot-mid"
          aria-label={t('ad.label')}
        >
          <span class={style.adLabel}>{t('ad.label')}</span>
        </div>

        <section class={style.info}>
          <div class={style.infoContainer}>
            <h2 class={style.infoTitle}>{t('faq.heading')}</h2>
            <div class={style.faqList}>
              <details class={style.faqItem}>
                <summary>{t('faq.q1')}</summary>
                <p>{t('faq.a1')}</p>
              </details>
              <details class={style.faqItem}>
                <summary>{t('faq.q2')}</summary>
                <p>{t('faq.a2')}</p>
              </details>
              <details class={style.faqItem}>
                <summary>{t('faq.q3')}</summary>
                <p>{t('faq.a3')}</p>
              </details>
              <details class={style.faqItem}>
                <summary>{t('faq.q4')}</summary>
                <p>{t('faq.a4')}</p>
              </details>
            </div>
          </div>
        </section>

        {/* Ad Slot 3 — horizontal banner between FAQ and footer */}
        <div
          class={`${style.adSlot} ${style.adSlotHorizontal}`}
          id="ad-slot-bottom"
          aria-label={t('ad.label')}
        >
          <span class={style.adLabel}>{t('ad.label')}</span>
        </div>

        <footer class={style.footer}>
          <div class={style.footerContainer}>
            <svg viewBox="0 0 1920 79" class={style.topWave}>
              <path
                d="M0 59l64-11c64-11 192-34 320-43s256-5 384 4 256 23 384 34 256 21 384 14 256-30 320-41l64-11v94H0z"
                class={style.footerWave}
              />
            </svg>
            <div class={style.footerPadding}>
              <footer class={style.footerItems}>
                <a class={style.footerLink} href={`${prefix}/privacy`}>
                  {t('footer.privacy')}
                </a>
                <a class={style.footerLink} href={`${prefix}/terms`}>
                  {t('footer.terms')}
                </a>
                <a
                  class={style.footerLink}
                  href={`${prefix}/guides/compress-images-online`}
                >
                  {t('footer.guides')}
                </a>
                <a
                  class={style.footerLinkWithLogo}
                  href="https://github.com/marianocorvatta/shrinkimg"
                >
                  <img src={githubLogo} alt="" width="10" height="10" />
                  {t('footer.github')}
                </a>
              </footer>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
