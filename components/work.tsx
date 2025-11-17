'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Heading, Image, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
}

export const Title = ({children}: TitleProps) => {
    const params = useParams();
    const lang = (params?.lang as string) || 'uk';

    return (
        <Box>
            <Link href={`/${lang}/works`}>
                <Box as="span" color="teal.500" _hover={{ textDecoration: 'underline' }}>
                    Works
                </Box>
            </Link>

            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading display="inline-block" as="h2" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    );
}

interface WorkImageProps {
    src: string;
    alt: string;
}

export const WorkImage = ({src, alt}: WorkImageProps) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

interface MetaProps {
    children: ReactNode;
}

export const Meta = ({children}: MetaProps) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)

