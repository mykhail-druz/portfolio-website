import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="eUshki">
            <Container>
                <Title>
                    eUshki <Badge>eCommerce</Badge>
                </Title>
                <Paragraph>
                    An e-commerce site for headphones based on: sanity studio, stripe, vercel app(PET-project)
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://e-ushki.vercel.app/" target="_blank">
                        https://e-ushki.vercel.app/ <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>HTML, CSS, Next.js, Tailwind</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/e-ushki_02.png" alt="E-ushki" />
                <WorkImage src="/images/works/e-ushki.png" alt="E-ushki" />
                <WorkImage src="/images/works/e-ushki_03.png" alt="E-ushki" />
                <WorkImage src="/images/works/e-ushki_04.png" alt="E-ushki" />
            </Container>
        </Layout>
    )
}

export default Work