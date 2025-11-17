'use client';

import React from 'react';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../../../components/section';
import { WorkGridItem } from '../../../components/grid-item';
import ArticleLayout from '../../../components/article-layout';
import { getDictionary } from '../translations';
import { getWorksByCategory, getWorkTitle, getWorkShortDescription } from '../../../lib/works-utils';
import type { Language } from '../../../lib/works-utils';

interface WorksProps {
  params: Promise<{ lang: string }>;
}

export default function Works({ params }: WorksProps) {
  const unwrappedParams = React.use(params);
  const lang = unwrappedParams.lang as Language;
  const t = getDictionary(lang);

  const commercialWorks = getWorksByCategory('commercial');
  const petWorks = getWorksByCategory('pet');

  return (
    <ArticleLayout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {lang === 'en' ? 'Commercial projects' : 'Комерційні проекти'}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {commercialWorks.map((work, index) => (
            <Section key={work.id} delay={index * 0.1}>
              <WorkGridItem
                id={work.id}
                title={getWorkTitle(work, lang)}
                thumbnail={work.thumbnail}
              >
                {getWorkShortDescription(work, lang)}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mt={4} mb={4}>
          {lang === 'en' ? 'PET projects' : 'PET проекти'}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {petWorks.map((work, index) => (
            <Section key={work.id} delay={index * 0.1}>
              <WorkGridItem
                id={work.id}
                title={getWorkTitle(work, lang)}
                thumbnail={work.thumbnail}
              >
                {getWorkShortDescription(work, lang)}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  );
}

