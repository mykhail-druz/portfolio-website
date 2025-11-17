import ChakraWrapper from "../components/chakra-wrapper";

export default function RootLayout({ children }) {
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
