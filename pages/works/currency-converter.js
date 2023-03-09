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
        <Layout title="Currency converter">
            <Container>
                <Title>
                    Currency converter <Badge>Currency</Badge>
                </Title>
                <Paragraph>
                    {t.currency_page}
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://currency-converter-nu-umber.vercel.app/" target="_blank">
                        https://currency-converter-nu-umber.vercel.app/ <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>React.js, Aos, Tailwind</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/currency.png" alt="Currency converter" />
            </Container>
        </Layout>
    )
}

export default Work