import { Container, Box, Heading } from "@chakra-ui/react"


const HomePage = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m a Front-end developer from Ukraine!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Mykhail Druz
                    </Heading>
                    <p>Technologies ( JavaScript / React / Next.js / Tailwind / Bootstrap )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default HomePage