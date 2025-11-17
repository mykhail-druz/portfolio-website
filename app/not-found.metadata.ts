import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found - Mykhail Druz',
  description: 'Page not found'
};

// Export a default function to make this a valid route module
export default function NotFoundMetadata() {
  return null;
}

