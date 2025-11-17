'use client';

import Link from 'next/link';
import {
  Box,
  Heading,
  Container,
  Text,
  Divider,
  Button
} from '@chakra-ui/react';


export default function NotFound() {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Link href="/">
          <Button colorScheme="teal">Return to home</Button>
        </Link>
      </Box>
    </Container>
  );
}
