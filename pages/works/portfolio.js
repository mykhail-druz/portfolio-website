import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title ="Portfolio">
            <Container>
                <Title>
                    Portfolio <Badge>HTML/CSS LANDING</Badge>
                </Title>
                <Paragraph>
                    A simple portfolio website based on HTML/CSS (my first project)
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://candid-arithmetic-efbe5c.netlify.app/" target="_blank">
                            https://candid-arithmetic-efbe5c.netlify.app/ <ExternalLinkIcon mx={2} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>STACK</Meta>
                        <span>HTML, CSS</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/portfolio.png" alt="Portfolio" />
                <WorkImage src="/images/works/portfolio_02.png" alt="Portfolio" />
                <WorkImage src="/images/works/portfolio_03.png" alt="Portfolio" />
                <WorkImage src="/images/works/portfolio_04.png" alt="Portfolio" />
            </Container>
        </Layout>
    )
}

export default Work