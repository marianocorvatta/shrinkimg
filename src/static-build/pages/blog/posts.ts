import type { Locale } from 'shared/i18n';
import type { FunctionalComponent } from 'preact';

import WhyImageCompressionMattersEn from './why-image-compression-matters/en';
import WhyImageCompressionMattersEs from './why-image-compression-matters/es';
import JpgVsPngVsWebpVsAvifEn from './jpg-vs-png-vs-webp-vs-avif/en';
import JpgVsPngVsWebpVsAvifEs from './jpg-vs-png-vs-webp-vs-avif/es';
import OptimizeImagesWordpressEn from './optimize-images-wordpress/en';
import OptimizeImagesWordpressEs from './optimize-images-wordpress/es';
import ReduceImageSizeEmailEn from './reduce-image-size-email/en';
import ReduceImageSizeEmailEs from './reduce-image-size-email/es';
import ImageOptimizationEcommerceEn from './image-optimization-ecommerce/en';
import ImageOptimizationEcommerceEs from './image-optimization-ecommerce/es';
import CoreWebVitalsImagesEn from './core-web-vitals-images/en';
import CoreWebVitalsImagesEs from './core-web-vitals-images/es';
import CompressImagesBulkEn from './compress-images-bulk/en';
import CompressImagesBulkEs from './compress-images-bulk/es';
import OnlineImageCompressionPrivacyEn from './online-image-compression-privacy/en';
import OnlineImageCompressionPrivacyEs from './online-image-compression-privacy/es';
import WebpGuide2026En from './webp-guide-2026/en';
import WebpGuide2026Es from './webp-guide-2026/es';
import ImageOptimizationMistakesSeoEn from './image-optimization-mistakes-seo/en';
import ImageOptimizationMistakesSeoEs from './image-optimization-mistakes-seo/es';

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
  {
    slug: 'reduce-image-size-email',
    titleMap: {
      en: 'How to Reduce Image Size for Email Without Losing Quality — ShrinkImg Blog',
      es: 'Cómo Reducir el Tamaño de Imágenes para Email Sin Perder Calidad — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'Learn how to compress images for email the right way. Discover size limits for Gmail, Outlook and Yahoo, recommended dimensions, best formats, and a step-by-step workflow with ShrinkImg.',
      es: 'Aprendé a comprimir imágenes para email correctamente. Límites de peso en Gmail, Outlook y Yahoo, dimensiones recomendadas, mejores formatos y flujo de trabajo paso a paso con ShrinkImg.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'email-size-limits',
        text: {
          en: 'Email Client Image Size Limits',
          es: 'Límites de Peso en Clientes de Email',
        },
        level: 2,
      },
      {
        id: 'recommended-dimensions',
        text: {
          en: 'Recommended Image Dimensions for Email',
          es: 'Dimensiones Recomendadas para Imágenes de Email',
        },
        level: 2,
      },
      {
        id: 'best-formats',
        text: {
          en: 'Best Image Formats for Email',
          es: 'Mejores Formatos de Imagen para Email',
        },
        level: 2,
      },
      {
        id: 'compress-without-quality-loss',
        text: {
          en: 'How to Compress Email Images Without Losing Quality',
          es: 'Cómo Comprimir Imágenes de Email Sin Perder Calidad',
        },
        level: 2,
      },
      {
        id: 'step-by-step',
        text: {
          en: 'Step-by-Step With ShrinkImg',
          es: 'Paso a Paso Con ShrinkImg',
        },
        level: 3,
      },
      {
        id: 'spam-and-deliverability',
        text: {
          en: 'Images, Spam Filters, and Deliverability',
          es: 'Imágenes, Filtros de Spam y Entregabilidad',
        },
        level: 2,
      },
      {
        id: 'quick-reference',
        text: {
          en: 'Quick Reference: Email Image Checklist',
          es: 'Referencia Rápida: Checklist de Imágenes para Email',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: ReduceImageSizeEmailEn,
      es: ReduceImageSizeEmailEs,
    },
  },
  {
    slug: 'image-optimization-ecommerce',
    titleMap: {
      en: 'Image Optimization for E-commerce: Boost Sales with Faster Product Pages — ShrinkImg Blog',
      es: 'Optimización de Imágenes para E-commerce: Vendé Más con Páginas Más Rápidas — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'Discover how image optimization drives e-commerce conversions. Learn the right sizes for product images, thumbnails and zoom views, plus how to compress them for faster Shopify and WooCommerce pages.',
      es: 'Descubrí cómo la optimización de imágenes impulsa las conversiones en e-commerce. Conocé los tamaños correctos para imágenes de producto, miniaturas y zoom, y cómo comprimirlas para páginas más rápidas.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'speed-conversions',
        text: {
          en: 'How Page Speed Affects E-commerce Conversions',
          es: 'Cómo la Velocidad Afecta las Conversiones',
        },
        level: 2,
      },
      {
        id: 'product-image-sizes',
        text: {
          en: 'Recommended Sizes for Product Images',
          es: 'Tamaños Recomendados para Imágenes de Producto',
        },
        level: 2,
      },
      {
        id: 'best-format',
        text: {
          en: 'Best Format for Product Images',
          es: 'Mejor Formato para Imágenes de Producto',
        },
        level: 2,
      },
      {
        id: 'shopify-platforms',
        text: {
          en: 'Platform-Specific Notes',
          es: 'Notas por Plataforma',
        },
        level: 2,
      },
      {
        id: 'google-shopping',
        text: {
          en: 'Google Shopping Image Requirements',
          es: 'Requisitos de Imagen de Google Shopping',
        },
        level: 2,
      },
      {
        id: 'mobile-shopping',
        text: {
          en: 'Mobile Shopping Experience',
          es: 'Experiencia de Compra Móvil',
        },
        level: 2,
      },
      {
        id: 'batch-workflow',
        text: {
          en: 'How to Compress Product Images With ShrinkImg',
          es: 'Cómo Comprimir Imágenes de Producto Con ShrinkImg',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: ImageOptimizationEcommerceEn,
      es: ImageOptimizationEcommerceEs,
    },
  },
  {
    slug: 'core-web-vitals-images',
    titleMap: {
      en: 'What Are Core Web Vitals and How Images Affect Your Google Ranking — ShrinkImg Blog',
      es: 'Qué Son los Core Web Vitals y Cómo las Imágenes Afectan Tu Ranking en Google — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'Learn what LCP, INP, and CLS mean and how images directly affect your Core Web Vitals scores. Discover practical steps to fix image-related performance issues and improve your Google ranking.',
      es: 'Aprendé qué significan LCP, INP y CLS y cómo las imágenes afectan directamente tus puntajes de Core Web Vitals. Descubrí pasos prácticos para corregir problemas de rendimiento y mejorar tu posicionamiento en Google.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'what-are-cwv',
        text: {
          en: 'What Are Core Web Vitals?',
          es: '¿Qué Son los Core Web Vitals?',
        },
        level: 2,
      },
      {
        id: 'lcp',
        text: {
          en: 'LCP — Largest Contentful Paint',
          es: 'LCP — Largest Contentful Paint',
        },
        level: 2,
      },
      {
        id: 'lcp-images',
        text: {
          en: 'How Large Images Hurt LCP',
          es: 'Cómo las Imágenes Grandes Perjudican el LCP',
        },
        level: 3,
      },
      {
        id: 'lcp-fixes',
        text: {
          en: 'Practical Fixes for LCP Images',
          es: 'Correcciones Prácticas para Imágenes LCP',
        },
        level: 3,
      },
      {
        id: 'inp',
        text: {
          en: 'INP — Interaction to Next Paint',
          es: 'INP — Interaction to Next Paint',
        },
        level: 2,
      },
      {
        id: 'cls',
        text: {
          en: 'CLS — Cumulative Layout Shift',
          es: 'CLS — Cumulative Layout Shift',
        },
        level: 2,
      },
      {
        id: 'cls-images',
        text: {
          en: 'How Images Cause Layout Shifts',
          es: 'Cómo las Imágenes Causan Saltos de Diseño',
        },
        level: 3,
      },
      {
        id: 'modern-formats-vitals',
        text: {
          en: 'WebP and AVIF: Direct Impact on Core Web Vitals',
          es: 'WebP y AVIF: Impacto Directo en los Core Web Vitals',
        },
        level: 2,
      },
      {
        id: 'pagespeed-testing',
        text: {
          en: 'How to Test Your Score With PageSpeed Insights',
          es: 'Cómo Probar Tu Puntaje con PageSpeed Insights',
        },
        level: 2,
      },
      {
        id: 'practical-checklist',
        text: {
          en: 'Practical Image Checklist for Core Web Vitals',
          es: 'Checklist Práctico de Imágenes para Core Web Vitals',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: CoreWebVitalsImagesEn,
      es: CoreWebVitalsImagesEs,
    },
  },
  {
    slug: 'compress-images-bulk',
    titleMap: {
      en: 'How to Compress Images in Bulk: A Complete Guide — ShrinkImg Blog',
      es: 'Cómo Comprimir Imágenes en Lote: Guía Completa — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'Learn how to compress multiple images at once efficiently. Covers when bulk compression is necessary, how to maintain quality consistency, file organization best practices, and a step-by-step workflow.',
      es: 'Aprendé cómo comprimir múltiples imágenes a la vez de forma eficiente. Cubre cuándo es necesaria la compresión masiva, cómo mantener la consistencia de calidad, mejores prácticas de organización y un flujo de trabajo paso a paso.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'when-you-need-bulk',
        text: {
          en: 'When You Need Bulk Image Compression',
          es: 'Cuándo Necesitás Comprimir Imágenes en Lote',
        },
        level: 2,
      },
      {
        id: 'site-migration',
        text: { en: 'Website Migration', es: 'Migración de Sitio Web' },
        level: 3,
      },
      {
        id: 'ecommerce-catalog',
        text: {
          en: 'E-commerce Product Catalog',
          es: 'Catálogo de Productos E-commerce',
        },
        level: 3,
      },
      {
        id: 'portfolio-gallery',
        text: {
          en: 'Portfolio or Photo Gallery',
          es: 'Portfolio o Galería de Fotos',
        },
        level: 3,
      },
      {
        id: 'content-audit',
        text: {
          en: 'Content Library Audit',
          es: 'Auditoría de Biblioteca de Contenido',
        },
        level: 3,
      },
      {
        id: 'how-shrinkimg-handles-bulk',
        text: {
          en: 'How ShrinkImg Handles Multiple Files',
          es: 'Cómo ShrinkImg Maneja Múltiples Archivos',
        },
        level: 2,
      },
      {
        id: 'consistent-settings',
        text: {
          en: 'Maintaining Consistency Across a Batch',
          es: 'Mantener Consistencia en un Lote',
        },
        level: 2,
      },
      {
        id: 'organize-before',
        text: {
          en: 'Organize Files Before You Start',
          es: 'Organizá los Archivos Antes de Empezar',
        },
        level: 2,
      },
      {
        id: 'workflow-recommendations',
        text: {
          en: 'Bulk Compression Workflow',
          es: 'Flujo de Trabajo para Compresión Masiva',
        },
        level: 2,
      },
      {
        id: 'quality-control',
        text: {
          en: 'Quality Control at Scale',
          es: 'Control de Calidad a Escala',
        },
        level: 2,
      },
      {
        id: 'post-batch-audit',
        text: {
          en: 'After the Batch: Verify Before Publishing',
          es: 'Después del Lote: Verificá Antes de Publicar',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: CompressImagesBulkEn,
      es: CompressImagesBulkEs,
    },
  },
  {
    slug: 'online-image-compression-privacy',
    titleMap: {
      en: 'Is Online Image Compression Safe? Privacy and Security Explained — ShrinkImg Blog',
      es: '¿Es Segura la Compresión de Imágenes Online? Privacidad y Seguridad — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'Understand the privacy difference between server-side and browser-based image compression. Learn what happens to your files, why it matters for sensitive content, and how ShrinkImg keeps your images on your device.',
      es: 'Entendé la diferencia de privacidad entre la compresión del lado del servidor y la basada en navegador. Aprendé qué pasa con tus archivos, por qué importa para contenido sensible y cómo ShrinkImg mantiene tus imágenes en tu dispositivo.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'how-server-side-works',
        text: {
          en: 'How Server-Side Compression Works',
          es: 'Cómo Funciona la Compresión del Lado del Servidor',
        },
        level: 2,
      },
      {
        id: 'how-browser-based-works',
        text: {
          en: 'How Browser-Based Compression Works',
          es: 'Cómo Funciona la Compresión Basada en Navegador',
        },
        level: 2,
      },
      {
        id: 'what-this-means-for-sensitive-content',
        text: {
          en: 'What This Means for Sensitive Content',
          es: 'Qué Significa Esto para Contenido Sensible',
        },
        level: 2,
      },
      {
        id: 'client-photos',
        text: {
          en: 'Client Photography and Professional Work',
          es: 'Fotografía de Clientes y Trabajo Profesional',
        },
        level: 3,
      },
      {
        id: 'product-images-pre-launch',
        text: {
          en: 'Pre-Launch Product Images',
          es: 'Imágenes de Producto Previas al Lanzamiento',
        },
        level: 3,
      },
      {
        id: 'medical-legal-documents',
        text: {
          en: 'Medical or Legal Documents',
          es: 'Documentos Médicos o Legales',
        },
        level: 3,
      },
      {
        id: 'gdpr-and-compliance',
        text: {
          en: 'GDPR, HIPAA, and Compliance',
          es: 'GDPR, HIPAA y Cumplimiento Normativo',
        },
        level: 2,
      },
      {
        id: 'questions-to-ask',
        text: {
          en: 'Questions to Ask When Evaluating Any Compression Tool',
          es: 'Preguntas para Evaluar Cualquier Herramienta de Compresión',
        },
        level: 2,
      },
      {
        id: 'shrinkimg-approach',
        text: {
          en: 'How ShrinkImg Handles This',
          es: 'Cómo Maneja Esto ShrinkImg',
        },
        level: 2,
      },
      {
        id: 'practical-recommendations',
        text: {
          en: 'Practical Recommendations',
          es: 'Recomendaciones Prácticas',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: OnlineImageCompressionPrivacyEn,
      es: OnlineImageCompressionPrivacyEs,
    },
  },
  {
    slug: 'webp-guide-2026',
    titleMap: {
      en: 'WebP in 2026: Everything You Need to Know — ShrinkImg Blog',
      es: 'WebP en 2026: Todo lo que Necesitás Saber — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'The complete guide to WebP in 2026. Learn how WebP compares to JPEG, PNG, and AVIF, when to use it, browser support status, WordPress integration, and how to convert your images with no software required.',
      es: 'La guía completa de WebP en 2026. Aprendé cómo se compara WebP con JPEG, PNG y AVIF, cuándo usarlo, el estado del soporte en navegadores, integración con WordPress y cómo convertir tus imágenes sin software adicional.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'what-is-webp',
        text: { en: 'What Is WebP?', es: '¿Qué Es WebP?' },
        level: 2,
      },
      {
        id: 'browser-support-2026',
        text: {
          en: 'Browser Support in 2026',
          es: 'Soporte de Navegadores en 2026',
        },
        level: 2,
      },
      {
        id: 'webp-vs-jpeg',
        text: { en: 'WebP vs JPEG', es: 'WebP vs JPEG' },
        level: 2,
      },
      {
        id: 'webp-vs-png',
        text: { en: 'WebP vs PNG', es: 'WebP vs PNG' },
        level: 2,
      },
      {
        id: 'webp-vs-avif',
        text: { en: 'WebP vs AVIF', es: 'WebP vs AVIF' },
        level: 2,
      },
      {
        id: 'when-to-use-webp',
        text: { en: 'When to Use WebP', es: 'Cuándo Usar WebP' },
        level: 2,
      },
      {
        id: 'converting-to-webp',
        text: {
          en: 'Converting Your Images to WebP',
          es: 'Convertir tus Imágenes a WebP',
        },
        level: 2,
      },
      {
        id: 'webp-and-wordpress',
        text: { en: 'WebP and WordPress', es: 'WebP y WordPress' },
        level: 2,
      },
      {
        id: 'common-webp-mistakes',
        text: {
          en: 'Common WebP Mistakes to Avoid',
          es: 'Errores Comunes con WebP que Evitar',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: WebpGuide2026En,
      es: WebpGuide2026Es,
    },
  },
  {
    slug: 'image-optimization-mistakes-seo',
    titleMap: {
      en: '10 Common Image Optimization Mistakes That Hurt Your SEO — ShrinkImg Blog',
      es: '10 Errores Comunes de Optimización de Imágenes que Perjudican tu SEO — Blog de ShrinkImg',
    },
    descriptionMap: {
      en: 'Avoid the most common image SEO mistakes: uncompressed files, missing alt text, oversized images, wrong formats, and more. Includes a prioritized fix list to improve your search rankings fast.',
      es: 'Evitá los errores más comunes de SEO de imágenes: archivos sin comprimir, texto alternativo faltante, imágenes sobredimensionadas, formatos incorrectos y más. Incluye una lista de correcciones priorizadas para mejorar tu posicionamiento rápido.',
    },
    datePublished: '2026-02-27',
    headings: [
      {
        id: 'mistake-1',
        text: {
          en: '1. Not Compressing Images Before Upload',
          es: '1. No Comprimir las Imágenes Antes de Subirlas',
        },
        level: 2,
      },
      {
        id: 'mistake-2',
        text: {
          en: '2. Using JPEG When WebP Is Available',
          es: '2. Usar JPEG Cuando WebP Está Disponible',
        },
        level: 2,
      },
      {
        id: 'mistake-3',
        text: {
          en: '3. Missing or Generic Alt Text',
          es: '3. Texto Alternativo Faltante o Genérico',
        },
        level: 2,
      },
      {
        id: 'mistake-4',
        text: {
          en: '4. Serving Oversized Images',
          es: '4. Servir Imágenes Sobredimensionadas',
        },
        level: 2,
      },
      {
        id: 'mistake-5',
        text: {
          en: '5. Generic File Names',
          es: '5. Nombres de Archivos Genéricos',
        },
        level: 2,
      },
      {
        id: 'mistake-6',
        text: {
          en: '6. Not Using Lazy Loading',
          es: '6. No Usar Carga Diferida (Lazy Loading)',
        },
        level: 2,
      },
      {
        id: 'mistake-7',
        text: {
          en: '7. Missing Width and Height Attributes',
          es: '7. Atributos de Ancho y Alto Faltantes',
        },
        level: 2,
      },
      {
        id: 'mistake-8',
        text: {
          en: '8. Over-Compressing Small Images',
          es: '8. Sobrecomprimir Imágenes Pequeñas',
        },
        level: 2,
      },
      {
        id: 'mistake-9',
        text: {
          en: '9. Ignoring Open Graph Images',
          es: '9. Ignorar las Imágenes Open Graph',
        },
        level: 2,
      },
      {
        id: 'mistake-10',
        text: {
          en: '10. No Image Sitemap or Missing Structured Data',
          es: '10. Sin Sitemap de Imágenes o Datos Estructurados Faltantes',
        },
        level: 2,
      },
      {
        id: 'getting-started',
        text: {
          en: 'Getting Started: A Prioritized Fix List',
          es: 'Por Dónde Empezar: Lista de Correcciones Priorizadas',
        },
        level: 2,
      },
    ],
    contentMap: {
      en: ImageOptimizationMistakesSeoEn,
      es: ImageOptimizationMistakesSeoEs,
    },
  },
];
