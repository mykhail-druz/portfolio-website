import { notFound } from 'next/navigation';

// Define metadata for each work
const workMetadata = {
  adv: {
    title: 'Adv Graphics Corp',
    description: 'Landing page for Adv Graphics Corp',
    images: ['/images/works/adv.png', '/images/works/adv_2.png', '/images/works/adv_3.png', '/images/works/adv_4.png'],
    website: 'https://advgraphicscorp.com/',
    stack: 'Next.js, Typescript, Tailwind, Aos, Sanity, NodeMailer, React Swiper, ReCaptcha'
  },
  bace: {
    title: 'Bace Agency',
    description: 'Website for Bace Agency',
    images: ['/images/works/bace_logo.jpg'],
    website: 'https://bace.agency/',
    stack: 'Next.js, Typescript, Tailwind, Framer Motion'
  },
  katcom: {
    title: 'Katcom, Inc.',
    description: 'Website for Katcom, Inc.',
    images: ['/images/works/katcom.jpg'],
    website: 'https://katcom.com/',
    stack: 'Next.js, Typescript, Tailwind, Framer Motion'
  },
  xpense: {
    title: 'Xpense',
    description: 'Expense tracking application',
    images: ['/images/works/xpense.png'],
    stack: 'React, Redux, Firebase'
  },
  'e-ushki': {
    title: 'E-ushki',
    description: 'E-commerce website for headphones',
    images: ['/images/works/e-ushki.png'],
    stack: 'HTML, CSS, JavaScript'
  },
  portfolio: {
    title: 'Designer`s portfolio',
    description: 'Portfolio website for a designer',
    images: ['/images/works/portfolio.png'],
    stack: 'HTML, CSS, JavaScript'
  },
  'currency-converter': {
    title: 'Currency Converter',
    description: 'Currency conversion application',
    images: ['/images/works/currency.png'],
    stack: 'React, API'
  }
};

// Generate metadata for the page
export function generateMetadata({ params }) {
  const { id } = params;

  // Check if the work exists
  if (!workMetadata[id]) {
    return {
      title: 'Work Not Found'
    };
  }

  return {
    title: `${workMetadata[id].title} - Mykhail Druz`,
    description: workMetadata[id].description
  };
}

// Export a default function to make this a valid route module
export default function Metadata() {
  return null;
}