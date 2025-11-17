'use client'

import React from 'react'
import Link from 'next/link'
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
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import ArticleLayout from '../../components/article-layout'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'
import { BioSection, BioYear } from '../../components/bio'
import Image from 'next/image'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { FaTelegramPlane } from 'react-icons/fa'
import { getDictionary } from './translations'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

interface HomePageProps {
  params: Promise<{ lang: string }>
}

export default function HomePage({ params }: HomePageProps) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params)
  const t = getDictionary(unwrappedParams.lang)

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
                src="/images/misha.webp"
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
          <Box whiteSpace="pre-line">
            <Paragraph>{t.about_desc}</Paragraph>
          </Box>
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
          <Box whiteSpace="pre-line">
            <Paragraph>{t.skills_1}</Paragraph>
            <Paragraph>{t.skills_2}</Paragraph>
            <Paragraph>{t.skills_3}</Paragraph>
            <Paragraph>{t.skills_4}</Paragraph>
          </Box>
        </Section>
        <Section delay={0.25}>
          <Heading as="h3" variant="section-title">
            {t.experience}
          </Heading>
          
          <Box mb={6}>
            <Heading as="h4" fontSize={18} mb={1}>
              {t.experience_wildtraff_title}
            </Heading>
            <Box fontSize={14} color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
              {t.experience_wildtraff_period}
            </Box>
            <Box fontSize={16} fontWeight="semibold" mb={2}>
              {t.experience_wildtraff_role}
            </Box>
            <Box mb={2}>
              <Paragraph>{t.experience_wildtraff_desc}</Paragraph>
            </Box>
            <List spacing={1} ml={4}>
              <ListItem fontSize={14}>{t.experience_wildtraff_achievement_1}</ListItem>
              <ListItem fontSize={14}>{t.experience_wildtraff_achievement_2}</ListItem>
              <ListItem fontSize={14}>{t.experience_wildtraff_achievement_3}</ListItem>
              <ListItem fontSize={14}>{t.experience_wildtraff_achievement_4}</ListItem>
            </List>
          </Box>

          <Box mb={6}>
            <Heading as="h4" fontSize={18} mb={1}>
              {t.experience_techcortex_title}
            </Heading>
            <Box fontSize={14} color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
              {t.experience_techcortex_period}
            </Box>
            <Box fontSize={16} fontWeight="semibold" mb={2}>
              {t.experience_techcortex_role}
            </Box>
            <Box mb={2}>
              <Paragraph>{t.experience_techcortex_desc}</Paragraph>
            </Box>
            <List spacing={1} ml={4}>
              <ListItem fontSize={14}>{t.experience_techcortex_achievement_1}</ListItem>
              <ListItem fontSize={14}>{t.experience_techcortex_achievement_2}</ListItem>
              <ListItem fontSize={14}>{t.experience_techcortex_achievement_3}</ListItem>
              <ListItem fontSize={14}>{t.experience_techcortex_achievement_4}</ListItem>
              <ListItem fontSize={14}>{t.experience_techcortex_achievement_5}</ListItem>
              <ListItem fontSize={14}>{t.experience_techcortex_achievement_6}</ListItem>
            </List>
          </Box>

          <Box mb={6}>
            <Heading as="h4" fontSize={18} mb={1}>
              {t.experience_forhotel_title}
            </Heading>
            <Box fontSize={14} color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
              {t.experience_forhotel_period}
            </Box>
            <Box fontSize={16} fontWeight="semibold" mb={2}>
              {t.experience_forhotel_role}
            </Box>
            <Box mb={2}>
              <Paragraph>{t.experience_forhotel_desc}</Paragraph>
            </Box>
            <List spacing={1} ml={4}>
              <ListItem fontSize={14}>{t.experience_forhotel_achievement_1}</ListItem>
              <ListItem fontSize={14}>{t.experience_forhotel_achievement_2}</ListItem>
              <ListItem fontSize={14}>{t.experience_forhotel_achievement_3}</ListItem>
              <ListItem fontSize={14}>{t.experience_forhotel_achievement_4}</ListItem>
            </List>
          </Box>

          <Box mb={6}>
            <Heading as="h4" fontSize={18} mb={1}>
              {t.experience_bace_title}
            </Heading>
            <Box fontSize={14} color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
              {t.experience_bace_period}
            </Box>
            <Box fontSize={16} fontWeight="semibold" mb={2}>
              {t.experience_bace_role}
            </Box>
            <Paragraph>{t.experience_bace_desc}</Paragraph>
          </Box>

          <Box mb={6}>
            <Heading as="h4" fontSize={18} mb={1}>
              {t.experience_self_title}
            </Heading>
            <Box fontSize={14} color={useColorModeValue('gray.600', 'gray.400')} mb={2}>
              {t.experience_self_period}
            </Box>
            <Box fontSize={16} fontWeight="semibold" mb={2}>
              {t.experience_self_role}
            </Box>
            <Paragraph>{t.experience_self_desc}</Paragraph>
          </Box>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            {t.edu}
          </Heading>
          <Paragraph>{t.edu_1}</Paragraph>
          <Paragraph>{t.edu_2}</Paragraph>
          <Box display="flex" flexDirection="column" gap={4} mt={4}>
            <Image
              src="/images/diplom.webp"
              width={500}
              height={400}
              alt="Diploma"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <Image
              src="/images/IBM-Diplom.webp"
              width={500}
              height={400}
              alt="IBM SkillsBuild Certificate"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            {t.tech}
          </Heading>
          <Paragraph>{t.tech_1}</Paragraph>
          <Paragraph>{t.tech_2}</Paragraph>
          <Paragraph>{t.tech_3}</Paragraph>
          <Paragraph>{t.tech_4}</Paragraph>
          <Paragraph>{t.tech_5}</Paragraph>
          <Paragraph>{t.tech_6}</Paragraph>
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
            <BioYear>May 2025</BioYear>
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
  )
}
