'use client';

import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./fonts";
import theme from "../lib/theme";

export default function ChakraWrapper({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
}