import type { Locale } from 'shared/i18n';
import type { FunctionalComponent } from 'preact';

import WhyImageCompressionMattersEn from './why-image-compression-matters/en';
import WhyImageCompressionMattersEs from './why-image-compression-matters/es';
import JpgVsPngVsWebpVsAvifEn from './jpg-vs-png-vs-webp-vs-avif/en';
import JpgVsPngVsWebpVsAvifEs from './jpg-vs-png-vs-webp-vs-avif/es';
import OptimizeImagesWordpressEn from './optimize-images-wordpress/en';
import OptimizeImagesWordpressEs from './optimize-images-wordpress/es';

export interface BlogPostMeta {
  slug: string;
  titleMap: Record<Locale, string>;
  descriptionMap: Record<Locale, string>;
  datePublished: string; // ISO 8601
  headings: { id: string; text: Record<Locale, string>; level: 2 | 3 }[];
  contentMap: Record<Locale, FunctionalComponent>;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'why-image-compression-matters',
    titleMap: {
      en: 'Why Image Compression Matters for Your Website in 2026 — ShrinkImg Blog',
      es: 'Por Qué Comprimir Imágenes es Clave para Tu Sitio Web en 2026 — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'Learn why image compression is essential for website speed, SEO rankings, Core Web Vitals, and user experience. Discover how to reduce file sizes by up to 80% without losing quality.',
      es: 'Descubrí por qué la compresión de imágenes es esencial para la velocidad web, el posicionamiento SEO, los Core Web Vitals y la experiencia de usuario. Aprendé a reducir archivos hasta un 80% sin perder calidad.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'page-load-speed',
        text: {
          en: 'The Impact on Page Load Speed',
          es: 'El Impacto en la Velocidad de Carga',
        },
        level: 2,
      },
      {
        id: 'core-web-vitals',
        text: {
          en: 'Google Core Web Vitals and SEO Ranking',
          es: 'Core Web Vitals de Google y Posicionamiento SEO',
        },
        level: 2,
      },
      {
        id: 'mobile-experience',
        text: {
          en: 'Mobile User Experience',
          es: 'Experiencia de Usuario en Móviles',
        },
        level: 2,
      },
      {
        id: 'bandwidth-savings',
        text: {
          en: 'Bandwidth Savings and Hosting Costs',
          es: 'Ahorro de Ancho de Banda y Costos de Hosting',
        },
        level: 2,
      },
      {
        id: 'bounce-rate',
        text: {
          en: 'Bounce Rate Reduction',
          es: 'Reducción de la Tasa de Rebote',
        },
        level: 2,
      },
      {
        id: 'how-to-compress',
        text: {
          en: 'How to Start Compressing Your Images Today',
          es: 'Cómo Empezar a Comprimir Tus Imágenes Hoy',
        },
        level: 2,
      },
      {
        id: 'real-world-impact',
        text: {
          en: 'The Real-World Impact: Before and After',
          es: 'El Impacto Real: Antes y Después',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: WhyImageCompressionMattersEn,
      es: WhyImageCompressionMattersEs,
    },
  },
  {
    slug: 'jpg-vs-png-vs-webp-vs-avif',
    titleMap: {
      en: 'JPG vs PNG vs WebP vs AVIF: Complete Guide to Image Formats — ShrinkImg Blog',
      es: 'JPG vs PNG vs WebP vs AVIF: Guía Completa de Formatos de Imagen — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'Compare JPG, PNG, WebP, and AVIF image formats. Learn the differences in compression, transparency, browser support, and file size to choose the best format for your website.',
      es: 'Compará los formatos de imagen JPG, PNG, WebP y AVIF. Aprendé las diferencias en compresión, transparencia, soporte de navegadores y tamaño de archivo para elegir el mejor formato para tu sitio web.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'jpg-format',
        text: {
          en: 'JPG (JPEG): The Universal Photograph Format',
          es: 'JPG (JPEG): El Formato Fotográfico Universal',
        },
        level: 2,
      },
      {
        id: 'jpg-strengths',
        text: { en: 'JPG Strengths', es: 'Fortalezas de JPG' },
        level: 3,
      },
      {
        id: 'jpg-limitations',
        text: { en: 'JPG Limitations', es: 'Limitaciones de JPG' },
        level: 3,
      },
      {
        id: 'png-format',
        text: {
          en: 'PNG: Lossless Quality and Transparency',
          es: 'PNG: Calidad Sin Pérdida y Transparencia',
        },
        level: 2,
      },
      {
        id: 'png-strengths',
        text: { en: 'PNG Strengths', es: 'Fortalezas de PNG' },
        level: 3,
      },
      {
        id: 'png-limitations',
        text: { en: 'PNG Limitations', es: 'Limitaciones de PNG' },
        level: 3,
      },
      {
        id: 'webp-format',
        text: {
          en: 'WebP: The Modern All-Rounder',
          es: 'WebP: El Todoterreno Moderno',
        },
        level: 2,
      },
      {
        id: 'webp-strengths',
        text: { en: 'WebP Strengths', es: 'Fortalezas de WebP' },
        level: 3,
      },
      {
        id: 'webp-limitations',
        text: { en: 'WebP Limitations', es: 'Limitaciones de WebP' },
        level: 3,
      },
      {
        id: 'avif-format',
        text: {
          en: 'AVIF: Maximum Compression',
          es: 'AVIF: Compresión Máxima',
        },
        level: 2,
      },
      {
        id: 'avif-strengths',
        text: { en: 'AVIF Strengths', es: 'Fortalezas de AVIF' },
        level: 3,
      },
      {
        id: 'avif-limitations',
        text: { en: 'AVIF Limitations', es: 'Limitaciones de AVIF' },
        level: 3,
      },
      {
        id: 'comparison-table',
        text: {
          en: 'Format Comparison Table',
          es: 'Tabla Comparativa de Formatos',
        },
        level: 2,
      },
      {
        id: 'when-to-use',
        text: {
          en: 'When to Use Each Format',
          es: 'Cuándo Usar Cada Formato',
        },
        level: 2,
      },
      {
        id: 'practical-recommendation',
        text: {
          en: 'Practical Recommendation for 2026',
          es: 'Recomendación Práctica para 2026',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: JpgVsPngVsWebpVsAvifEn,
      es: JpgVsPngVsWebpVsAvifEs,
    },
  },
  {
    slug: 'optimize-images-wordpress',
    titleMap: {
      en: 'How to Optimize Images for WordPress Without Plugins — ShrinkImg Blog',
      es: 'Cómo Optimizar Imágenes para WordPress Sin Plugins — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'Learn how to optimize WordPress images without plugins. Compress before uploading, choose the right format and dimensions, and improve Core Web Vitals for better SEO rankings.',
      es: 'Aprendé cómo optimizar imágenes en WordPress sin plugins. Comprimí antes de subir, elegí el formato y dimensiones correctas, y mejorá los Core Web Vitals para mejor posicionamiento SEO.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'why-wordpress-slow',
        text: {
          en: 'Why WordPress Sites Get Slow With Unoptimized Images',
          es: 'Por Qué los Sitios WordPress Se Vuelven Lentos',
        },
        level: 2,
      },
      {
        id: 'compress-before-upload',
        text: {
          en: 'Compress Before Uploading With ShrinkImg',
          es: 'Comprimí Antes de Subir Con ShrinkImg',
        },
        level: 2,
      },
      {
        id: 'step-1',
        text: {
          en: 'Step 1 — Resize to Your Maximum Display Size',
          es: 'Paso 1 — Redimensioná al Tamaño Máximo',
        },
        level: 3,
      },
      {
        id: 'step-2',
        text: {
          en: 'Step 2 — Choose the Right Format',
          es: 'Paso 2 — Elegí el Formato Correcto',
        },
        level: 3,
      },
      {
        id: 'step-3',
        text: {
          en: 'Step 3 — Target the Right Quality Level',
          es: 'Paso 3 — Apuntá al Nivel de Calidad Correcto',
        },
        level: 3,
      },
      {
        id: 'step-4',
        text: {
          en: 'Step 4 — Upload to WordPress',
          es: 'Paso 4 — Subí a WordPress',
        },
        level: 3,
      },
      {
        id: 'recommended-dimensions',
        text: {
          en: 'Recommended Image Dimensions for WordPress',
          es: 'Dimensiones Recomendadas para WordPress',
        },
        level: 2,
      },
      {
        id: 'lazy-loading',
        text: {
          en: 'Enable and Understand Lazy Loading',
          es: 'Habilitá y Entendé el Lazy Loading',
        },
        level: 2,
      },
      {
        id: 'core-web-vitals-wordpress',
        text: {
          en: 'Impact on SEO and Core Web Vitals',
          es: 'Impacto en SEO y Core Web Vitals',
        },
        level: 2,
      },
      {
        id: 'complete-checklist',
        text: {
          en: 'Complete WordPress Image Optimization Checklist',
          es: 'Checklist Completo de Optimización',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: OptimizeImagesWordpressEn,
      es: OptimizeImagesWordpressEs,
    },
  },
];
