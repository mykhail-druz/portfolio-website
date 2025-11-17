import { ReactNode } from 'react';
import ChakraWrapper from "../components/chakra-wrapper";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ChakraWrapper>
          {children}
        </ChakraWrapper>
      </body>
    </html>
  );
}

