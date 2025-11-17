'use client';

import React from 'react';
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../../../components/work';
import Paragraph from '../../../../components/paragraph';
import ArticleLayout from '../../../../components/article-layout';
import { getDictionary } from '../../translations';
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


export default function Work({ params }) {
  const { id, lang } = params;
  const t = getDictionary(lang);

  // Check if the work exists
  if (!workMetadata[id]) {
    notFound();
  }

  const work = workMetadata[id];

  return (
    <ArticleLayout>
      <Container>
        <Title>
          {work.title} <Badge>Project</Badge>
        </Title>
        <Paragraph>{t[`${id}_page`] || t[id]}</Paragraph>
        <List ml={4} my={4}>
          {work.website && (
            <ListItem>
              <Meta>Website</Meta>
              <Link href={work.website} target="_blank">
                {work.website} <ExternalLinkIcon mx={2} />
              </Link>
            </ListItem>
          )}
          <ListItem>
            <Meta>STACK</Meta>
            <span>{work.stack}</span>
          </ListItem>
        </List>

        {work.images.map((image, index) => (
          <WorkImage 
            key={index} 
            src={image} 
            alt={work.title} 
          />
        ))}
      </Container>
    </ArticleLayout>
  );
}
