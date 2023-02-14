import NextLink from 'next/link'
import {
  Link,
  Container,
  Box,
  Heading,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const HomePage = () => {
  return (
    <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a Front-end developer from Ukraine!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mykhail Druz
          </Heading>
          <p>FE Developer (Markup developing / Landings / eCommerce sites)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/misha.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading h={3} variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Mykhail is an aspiring frontend developer with a strong command of
          HTML, CSS, JavaScript, React, Next.js, Bootstrap and Tailwind
          technologies. With 4.5 months of training at ProgAcademy and a
          relentless passion for learning, Mykhail continues to improve his
          skills and knowledge. In addition to programming, I`m is pursuing a
          degree in international management at university.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Was born in Donetsk, Ukraine.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Graduated from school in Kyiv and entered the Kiev National University
          of Trade and Economics for International Management
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Started a career in Web-developing. Lots of effort for learning and
          self-improvement.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
      </Section>
    </Container>
    </Layout>
  )
}

export default HomePage
export { getServerSideProps } from '../components/chakra'
