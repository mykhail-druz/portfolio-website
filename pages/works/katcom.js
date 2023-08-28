import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

import { useRouter } from 'next/router'
import { en, uk } from '../../components/translations'

const Work = () => {

    const router = useRouter();
    const { locale } = router;
  
    const t = locale === "uk" ? uk : en;

    return (
        <Layout title="Katcom, Inc.">
            <Container>
                <Title>
                    Katcom, Inc. <Badge>Landing</Badge>
                </Title>
                <Paragraph>
                    {t.katcom_page}
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://katcom.us/" target="_blank">
                            katcom.us <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>Next.js, Typescript, React Swiper, NodeMailer, Aos, Tailwind, reCAPTCHA</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/katcom.jpg" alt="Katcom, Inc." />
                <WorkImage src="/images/works/katcom_2.jpg" alt="Katcom, Inc." />
                <WorkImage src="/images/works/katcom_3.jpg" alt="Katcom, Inc." />
                <WorkImage src="/images/works/katcom_4.jpg" alt="Katcom, Inc." />
                <WorkImage src="/images/works/katcom_5.jpg" alt="Katcom, Inc." />
                <WorkImage src="/images/works/katcom_6.jpg" alt="Katcom, Inc." />
            </Container>
        </Layout>
    )
}

export default Work