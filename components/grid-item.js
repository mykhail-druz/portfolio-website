'use client';

import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            // Remove placeholder="blur" as it requires blurDataURL
            loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
    const params = useParams();
    const lang = params?.lang || 'uk';

    return (
        <Box w="100%" align="center">
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
                // Remove placeholder="blur" as it requires blurDataURL
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
