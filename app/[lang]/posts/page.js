'use client';

import React from 'react';
import { Container, Heading } from "@chakra-ui/react";
import ArticleLayout from "../../../components/article-layout";
import Section from "../../../components/section";
import { getDictionary } from "../translations";


export default function Posts({ params }) {
  const t = getDictionary(params.lang);

  return (
    <ArticleLayout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
        <Section delay={0.1}>
          There are no posts yet.
        </Section>
      </Container>
    </ArticleLayout>
  );
}
