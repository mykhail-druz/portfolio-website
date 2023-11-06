import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import { useRouter } from 'next/router'
import { en, uk } from '../../components/translations'

const Work = () => {
  const router = useRouter()
  const { locale } = router

  const t = locale === 'uk' ? uk : en

  return (
    <Layout title="Bace">
      <Container>
        <Title>
          Bace Agency <Badge>Website</Badge>
        </Title>
        <Paragraph>{t.bace_page}</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://baceagency.com/" target="_blank">
            https://baceagency.com/ <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>STACK</Meta>
            <span>Next.js, Typescript, Tailwind, Framer Motion, Sanity, NodeMailer, React Swiper, ReCaptcha</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/bace.png" alt="Bace agency" />
        <WorkImage src="/images/works/bace_2.png" alt="Bace agency" />
        <WorkImage src="/images/works/bace_3.png" alt="Bace agency" />
        <WorkImage src="/images/works/bace_4.png" alt="Bace agency" />
        <WorkImage src="/images/works/bace_5.png" alt="Bace agency" />
        <WorkImage src="/images/works/bace_6.png" alt="Bace agency" />
        <WorkImage src="/images/works/bace_7.png" alt="Bace agency" />
        <WorkImage src="/images/works/bace_8.png" alt="Bace agency" />
      </Container>
    </Layout>
  )
}

export default Work
