import type { Metadata } from 'next';
import { getWorkById, getWorkTitle, getWorkShortDescription } from '../../../../lib/works-utils';
import type { Language } from '../../../../lib/works-utils';

interface GenerateMetadataProps {
  params: Promise<{ id: string; lang: string }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const unwrappedParams = await params;
  const { id, lang } = unwrappedParams;
  const language = lang as Language;

  // Get work data from centralized source
  const work = getWorkById(id);

  // Check if the work exists
  if (!work) {
    return {
      title: 'Work Not Found - Mykhail Druz'
    };
  }

  return {
    title: `${getWorkTitle(work, language)} - Mykhail Druz`,
    description: getWorkShortDescription(work, language)
  };
}

// Export a default function to make this a valid route module
export default function MetadataPage() {
  return null;
}

