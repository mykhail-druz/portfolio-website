import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// List of supported locales
const locales = ['en', 'uk'];

interface GenerateMetadataProps {
  params: Promise<{ lang: string }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const unwrappedParams = await params;
  // Validate the locale
  const isValidLocale = locales.some(cur => cur === unwrappedParams.lang);
  if (!isValidLocale) {
    notFound();
  }

  return {
    title: 'Works - Mykhail Druz',
    description: 'Mykhail Druz works and projects'
  };
}

// Export a default function to make this a valid route module
export default function MetadataPage() {
  return null;
}

