import { works, Work } from './works';

export type Language = 'en' | 'uk';

/**
 * Get all works
 */
export function getAllWorks(): Work[] {
  return works;
}

/**
 * Get work by ID
 */
export function getWorkById(id: string): Work | undefined {
  return works.find(work => work.id === id);
}

/**
 * Get works by category
 */
export function getWorksByCategory(category: 'commercial' | 'pet'): Work[] {
  return works.filter(work => work.category === category);
}

/**
 * Get featured works
 */
export function getFeaturedWorks(): Work[] {
  return works.filter(work => work.featured === true);
}

/**
 * Get work title in specified language
 */
export function getWorkTitle(work: Work, lang: Language): string {
  return work.title[lang];
}

/**
 * Get work short description in specified language
 */
export function getWorkShortDescription(work: Work, lang: Language): string {
  return work.shortDescription[lang];
}

/**
 * Get work full description in specified language
 */
export function getWorkFullDescription(work: Work, lang: Language): string {
  return work.fullDescription[lang];
}

/**
 * Get work stack as comma-separated string
 */
export function getWorkStackString(work: Work): string {
  return work.stack.join(', ');
}

/**
 * Get all work IDs (useful for static generation)
 */
export function getAllWorkIds(): string[] {
  return works.map(work => work.id);
}

