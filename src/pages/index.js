import NextLink from 'next/link';
import {
    Link,
    Container,
    Box,
    Heading,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from "@chakra-ui/react";
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })

const HomePage = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a Front-end developer from Ukraine!
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Mykhail Druz
                    </Heading>
                    <p>Technologies ( JavaScript / React / Next.js / Tailwind / Bootstrap )</p>
                </Box>
                <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                textAlign="center"
                >
                    <Box
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    w="100px"
                    h="100px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden"
                    >
                        <ProfileImage
                        src="/image/mykhail.jpg"
                        alt="Profile image"
                        borderRadius="full"
                        width="100"
                        height="100"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default HomePage
export { getServerSideProps } from '../components/chakra'