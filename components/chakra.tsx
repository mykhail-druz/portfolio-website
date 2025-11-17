import { ReactNode } from 'react';
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

interface ChakraProps {
  cookies?: string;
  children: ReactNode;
}

export default function Chakra({ cookies, children }: ChakraProps) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }: { req: { headers: { cookie?: string } } }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

