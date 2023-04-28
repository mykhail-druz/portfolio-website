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
        <Layout title="Xpense app">
            <Container>
                <Title>
                    Xpense app <Badge>Landing</Badge>
                </Title>
                <Paragraph>
                    {t.xpense_page}
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://xpense-starter.vercel.app/" target="_blank">
                        https://xpense-starter.vercel.app/ <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>React.js, Aos, Tailwind</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/xpense.png" alt="Xpense App" />
                <WorkImage src="/images/works/xpense_2.png" alt="Xpense App" />
                <WorkImage src="/images/works/xpense_3.png" alt="Xpense App" />
                <WorkImage src="/images/works/xpense_4.png" alt="Xpense App" />
                <WorkImage src="/images/works/xpense_5.png" alt="Xpense App" />
                <WorkImage src="/images/works/xpense_6.png" alt="Xpense App" />
            </Container>
        </Layout>
    )
}

export default Work