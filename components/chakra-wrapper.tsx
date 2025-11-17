'use client';

import { ReactNode } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./fonts";
import theme from "../lib/theme";

interface ChakraWrapperProps {
  children: ReactNode;
}

export default function ChakraWrapper({ children }: ChakraWrapperProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}

