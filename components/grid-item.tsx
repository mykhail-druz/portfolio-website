'use client';

import { ReactNode } from 'react';
import NextLink from "next/link";
import Image, { StaticImageData } from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { useParams } from "next/navigation";

interface GridItemProps {
    children: ReactNode;
    href: string;
    title: string;
    thumbnail: string | StaticImageData;
}

export const GridItem = ({ children, href, title, thumbnail }: GridItemProps) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            width={300}
            height={200}
            loading="lazy"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

interface WorkGridItemProps {
    children: ReactNode;
    id: string;
    title: string;
    thumbnail: string | StaticImageData;
}

export const WorkGridItem = ({ children, id, title, thumbnail }: WorkGridItemProps) => {
    const params = useParams();
    const lang = (params?.lang as string) || 'uk';

    return (
        <Box w="100%" textAlign="center">
            <LinkBox
            as={NextLink}
            href={`/${lang}/works/${id}`}
            scroll={false}
            cursor="pointer"
            >
            <Image 
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                width={300}
                height={200}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <LinkOverlay as="div" href={`/${lang}/works/${id}`}>
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>
                {children}
            </Text>
            </LinkBox>
        </Box>
    );
}

export const GridItemStyle = () => (
    <Global
        styles={`
            .grid-item-thumbnail {
                border-radius: 12px;
            }
        `}
    />
)

