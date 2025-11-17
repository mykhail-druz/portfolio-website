'use client';

import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  Button,
  IconButton,
  useColorModeValue,
  MenuButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { en, uk, TranslationDict } from './translations';

interface LinkItemProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  [key: string]: any;
}

const LinkItem = ({ href, children, target, ...props }: LinkItemProps) => {
  const pathname = usePathname();
  const params = useParams();
  const lang = params.lang as string;

  // Construct the full path with language
  const fullHref = href.startsWith('http') ? href : `/${lang}${href}`;

  // Check if the current path matches this link
  const active = pathname === fullHref;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');

  return (
    <Link
      href={fullHref}
      scroll={false}
      style={{
        padding: '0.5rem',
        backgroundColor: active ? 'var(--chakra-colors-glassTeal)' : undefined,
        color: active ? '#202023' : inactiveColor,
        textDecoration: 'none',
        display: 'inline-block'
      }}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const lang = (params.lang as string) || 'uk';
  const t: TranslationDict = lang === 'uk' ? uk : en;

  // Исправленная функция переключения языка
  const toggleLanguage = () => {
    const newLang = lang === 'uk' ? 'en' : 'uk';

    // Получаем текущий путь без языка
    const pathWithoutLang = pathname.replace(`/${lang}`, '') || '';

    // Создаем новый путь с новым языком
    const newPath = `/${newLang}${pathWithoutLang}`;

    // Используем router.push вместо window.location.href для лучшей производительности
    router.push(newPath);
  };

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works">
            {t.works}
          </LinkItem>
          <LinkItem href="https://t.me/mykhail_druz" target="_blank">
            {t.contact}
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <Button
            mr={2}
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
          >
            {lang === 'uk' ? 'EN' : 'УК'}
          </Button>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as="div">
                  <Link href={`/${lang}`} style={{ width: '100%', textDecoration: 'none' }}>
                    {t.main}
                  </Link>
                </MenuItem>
                <MenuItem as="div">
                  <Link href={`/${lang}/works`} style={{ width: '100%', textDecoration: 'none' }}>
                    {t.works}
                  </Link>
                </MenuItem>
                <MenuItem as="div">
                  <Link href="https://t.me/mykhail_druz" target="_blank" style={{ width: '100%', textDecoration: 'none' }}>
                    {t.contact}
                  </Link>
                </MenuItem>
                <MenuItem onClick={toggleLanguage}>
                  {lang === 'uk' ? 'English' : 'Українська'}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;

