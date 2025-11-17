'use client';

import React from 'react';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../../../components/section';
import { WorkGridItem } from '../../../components/grid-item';
import ArticleLayout from '../../../components/article-layout';
import { getDictionary } from '../translations';

import thumbUshki from '../../../public/images/works/e-ushki.png';
import thumbPortfolio from '../../../public/images/works/portfolio.png';
import thumbCurrency from '../../../public/images/works/currency.png';
import thumbXpense from '../../../public/images/works/xpense.png';
import thumbKatcom from '../../../public/images/works/katcom.jpg';
import thumbAdv from '../../../public/images/works/adv.png';
import thumbBace from '../../../public/images/works/bace_logo.jpg';

interface WorksProps {
  params: Promise<{ lang: string }>;
}

export default function Works({ params }: WorksProps) {
  const unwrappedParams = React.use(params);
  const t = getDictionary(unwrappedParams.lang);

  return (
    <ArticleLayout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Commercial projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="bace"
              title="Bace Agency"
              thumbnail={thumbBace}
            >
              {t.bace}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="adv"
              title="Adv Graphics Corp."
              thumbnail={thumbAdv}
            >
              {t.adv}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="katcom"
              title="Katcom, Inc."
              thumbnail={thumbKatcom}
            >
              {t.katcom}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mt={4} mb={4}>
          PET projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="xpense"
              title="Xpense"
              thumbnail={thumbXpense}
            >
              {t.xpense}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem 
              id="e-ushki" 
              title="E-ushki" 
              thumbnail={thumbUshki}
            >
              {t.ushki}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="portfolio"
              title="Designer`s portfolio"
              thumbnail={thumbPortfolio}
            >
              {t.designer}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  );
}

