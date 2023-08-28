import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbUshki from '../public/images/works/e-ushki.png'
import thumbPortfolio from '../public/images/works/portfolio.png'
import thumbCurrency from '../public/images/works/currency.png'
import thumbXpense from '../public/images/works/xpense.png'
import thumbKatcom from '../public/images/works/katcom.jpg'
import thumbAdv from '../public/images/works/adv.png'
import Layout from '../components/layouts/article'

import { useRouter } from 'next/router'
import { en, uk } from '../components/translations'

const Works = () => {
  const router = useRouter()
  const { locale } = router

  const t = locale === 'uk' ? uk : en

  return (
    <>
      <Layout>
        <Container>
          <Heading as="h3" fontSize={20} mb={4}>
            Works
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
              <WorkGridItem
                id="adv"
                title="Adv Graphics Corp."
                thumbnail={thumbAdv}
              >
                {t.adv}
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="katcom"
                title="Katcom, Inc."
                thumbnail={thumbKatcom}
              >
                {t.katcom}
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="xpense"
                title="Xpense"
                thumbnail={thumbXpense}
              >
                {t.xpense}
              </WorkGridItem>
            </Section>
            {/* <Section>
              <WorkGridItem
                id="currency-converter"
                title="Currency converter"
                thumbnail={thumbCurrency}
              >
                {t.currency}
              </WorkGridItem>
            </Section> */}
            <Section>
              <WorkGridItem id="e-ushki" title="E-ushki" thumbnail={thumbUshki}>
                {t.ushki}
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                id="portfolio"
                title="Designer`s portfolio"
                thumbnail={thumbPortfolio}
              >
                {t.designer}
              </WorkGridItem>
            </Section>
          </SimpleGrid>
        </Container>
      </Layout>
    </>
  )
}

export default Works
