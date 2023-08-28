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
    <Layout title="Adv graphics corp">
      <Container>
        <Title>
          Adv Graphics Corp <Badge>Landing</Badge>
        </Title>
        <Paragraph>{t.adv_page}</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://advgraphicscorp.com/" target="_blank">
              https://advgraphicscorp.com/ <ExternalLinkIcon mx={2} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>STACK</Meta>
            <span>Next.js, Typescript, Tailwind, Aos, Sanity, NodeMailer, React Swiper, ReCaptcha</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/adv.png" alt="Adv graphics corp" />
        <WorkImage src="/images/works/adv_2.png" alt="Adv graphics corp" />
        <WorkImage src="/images/works/adv_3.png" alt="Adv graphics corp" />
        <WorkImage src="/images/works/adv_4.png" alt="Adv graphics corp" />
      </Container>
    </Layout>
  )
}

export default Work
