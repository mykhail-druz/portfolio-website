'use client';

import React from 'react';
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../../../components/work';
import Paragraph from '../../../../components/paragraph';
import ArticleLayout from '../../../../components/article-layout';
import { getWorkById, getWorkTitle, getWorkFullDescription, getWorkStackString } from '../../../../lib/works-utils';
import type { Language } from '../../../../lib/works-utils';
import { notFound } from 'next/navigation';

interface WorkProps {
  params: Promise<{ id: string; lang: string }>;
}

export default function Work({ params }: WorkProps) {
  const unwrappedParams = React.use(params);
  const { id, lang } = unwrappedParams;
  const language = lang as Language;

  // Get work data from centralized source
  const work = getWorkById(id);

  // Check if the work exists
  if (!work) {
    notFound();
  }

  return (
    <ArticleLayout>
      <Container>
        <Title>
          {getWorkTitle(work, language)} <Badge>Project</Badge>
        </Title>
        <Paragraph>{getWorkFullDescription(work, language)}</Paragraph>
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
            <span>{getWorkStackString(work)}</span>
          </ListItem>
        </List>

        {work.images.map((image, index) => (
          <WorkImage 
            key={index} 
            src={image} 
            alt={getWorkTitle(work, language)} 
          />
        ))}
      </Container>
    </ArticleLayout>
  );
}

