'use client';

import React from 'react';
import Link from 'next/link';
import {
  Container,
  Box,
  Heading,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Icon
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import ArticleLayout from '../../components/article-layout';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph';
import { BioSection, BioYear } from '../../components/bio';
import Image from 'next/image';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';
import { getDictionary } from './translations';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
});

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default function HomePage({ params }: HomePageProps) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const t = getDictionary(unwrappedParams.lang);

  return (
    <ArticleLayout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          {t.hello}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t.misha}
            </Heading>
            <p>{t.desc}</p>
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
                src="/images/misha.JPG"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t.about}
          </Heading>
          <Paragraph>{t.about_desc}</Paragraph>
          <Box textAlign="center" my={4}>
            <Link href={`/${unwrappedParams.lang}/works`}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {t.works}
              </Button>
            </Link>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t.skills}
          </Heading>
          <Paragraph>{t.skills_1}</Paragraph>
          <Paragraph>{t.skills_2}</Paragraph>
          <Paragraph>{t.skills_3}</Paragraph>
          <Paragraph>{t.skills_4}</Paragraph>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            {t.edu}
          </Heading>
          <Paragraph>{t.edu_1}</Paragraph>
          <Paragraph>{t.edu_2}</Paragraph>
          <Image src="/images/diplom.png" width={500} height={400} alt="Diploma" />
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            {t.tech}
          </Heading>
          <Paragraph>-HTML5/CSS3</Paragraph>
          <Paragraph>-Bootstrap 5, TailWind, Chakra UI, AOS</Paragraph>
          <Paragraph>-JavaScript ES5/ES6, Typescript, OOP</Paragraph>
          <Paragraph>-React, Next.js</Paragraph>
          <Paragraph>-Git, GitHub, Figma</Paragraph>
          <Paragraph>-Jira, Slack</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t.bio}
          </Heading>
          <BioSection>
            <BioYear>2004</BioYear>
            {t.bio_1}
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            {t.bio_2}
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            {t.bio_3}
          </BioSection>
          <BioSection>
            <BioYear>March 2023</BioYear>
            {t.bio_4}
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            {t.web}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/mykhail-druz" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @mykhail-druz
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/mykhail.druz/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @mykhail.druz
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://t.me/mykhail_druz" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={FaTelegramPlane} />}
                >
                  Mykhail Druz
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/mykhail-druz-0903a9262/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  My LinkedIn
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </ArticleLayout>
  );
}

