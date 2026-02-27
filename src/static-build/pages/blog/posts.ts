import type { Locale } from 'shared/i18n';
import type { FunctionalComponent } from 'preact';

export interface BlogPostMeta {
  slug: string;
  titleMap: Record<Locale, string>;
  descriptionMap: Record<Locale, string>;
  datePublished: string; // ISO 8601
  headings: { id: string; text: Record<Locale, string>; level: 2 | 3 }[];
  contentMap: Record<Locale, FunctionalComponent>;
}

// Add new posts here:
export const blogPosts: BlogPostMeta[] = [
  // Example (commented out — no posts yet):
  // {
  //   slug: 'my-first-post',
  //   titleMap: { en: 'My First Post — ShrinkImg Blog', es: 'Mi Primer Post — Blog de ShrinkImg' },
  //   descriptionMap: { en: '...', es: '...' },
  //   datePublished: '2026-03-01',
  //   headings: [],
  //   contentMap: { en: MyFirstPostEn, es: MyFirstPostEs },
  // },
];
