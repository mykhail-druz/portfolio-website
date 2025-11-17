'use client';

import React from 'react';
import Navbar from '../../components/navbar-new.js';
import NoSsr from '../../components/no-ssr.js';
import { Box, Container } from '@chakra-ui/react';
import VoxelComp from '../../components/voxel-comp.js';
import { notFound } from 'next/navigation';

// List of supported locales
const locales = ['en', 'uk'];

export default function Layout({ children, params }) {
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
