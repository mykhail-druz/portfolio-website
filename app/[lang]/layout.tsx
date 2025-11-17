'use client';

import React from 'react';
import { ReactNode } from 'react';
import Navbar from '../../components/navbar-new';
import NoSsr from '../../components/no-ssr';
import { Box, Container } from '@chakra-ui/react';
import VoxelComp from '../../components/voxel-comp';
import { notFound } from 'next/navigation';

// List of supported locales
const locales = ['en', 'uk'];

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default function Layout({ children, params }: LayoutProps) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some(cur => cur === unwrappedParams.lang);

  // If the locale is not valid, trigger a 404
  if (!isValidLocale) {
    notFound();
  }

  return (
    <Box as="main" pb={8}>
      <Navbar />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelComp />
        </NoSsr>
        {children}
      </Container>
    </Box>
  );
}

