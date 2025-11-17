import { notFound } from 'next/navigation';

// List of supported locales
const locales = ['en', 'uk'];

// Generate metadata for the page
export function generateMetadata({ params }) {
  // Validate the locale
  const isValidLocale = locales.some(cur => cur === params.lang);
  if (!isValidLocale) {
    notFound();
  }

  return {
    title: 'Mykhail Druz - Homepage',
    description: 'Mykhail Druz portfolio website'
  };
}

// Export a default function to make this a valid route module
export default function Metadata() {
  return null;
}
