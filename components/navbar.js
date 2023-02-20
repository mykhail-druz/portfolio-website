import React, { useState } from 'react'
import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
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
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { useRouter } from 'next/router'
import { en, uk } from './translations'
import LanguageButton from './language-button'

const LinkItem = ({ href, path, children, target, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

    const router = useRouter();
    const { locale } = router;

    const t = locale === "uk" ? uk : en;

    const handleLanguageToggle = () => {
        switch (locale) {
            case "uk":
                router.push("/", "/", { locale: "en" })
                break;
            case "en":
                router.push("/", "/", { locale: "uk" })
                break;
        }
    }

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
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
          <LinkItem href="/works" path={path}>
            {t.works}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            {t.posts}
          </LinkItem>
          <LinkItem href="https://t.me/mykhail_druz">{t.contact}</LinkItem>
        </Stack>
        <Box flex={1} align="right">
            <Button mr={2} backgroundColor="transparent"
            onClick={handleLanguageToggle}>
                {/* <LanguageButton /> */}
                {t.lang}
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
                <MenuItem as={MenuLink} href="/">
                  {t.main}
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  {t.works}
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  {t.posts}
                </MenuItem>
                <MenuItem as={MenuLink} href="https://t.me/mykhail_druz">
                  {t.contact}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
