import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbUshki from '../public/images/works/e-ushki.png'
import thumbPortfolio from '../public/images/works/portfolio.png';
import Layout from '../components/layouts/article';

const Works = () => {
  return (
    <>
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="portfolio" title="Designer`s portfolio" thumbnail={thumbPortfolio}>
            A simple portfolio website based on HTML/CSS ( my first project)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="e-ushki" title="E-ushki" thumbnail={thumbUshki}>
            An e-commerce site for headphones based on Next.js (PET-project)
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
    </>
  )
}

export default Works
