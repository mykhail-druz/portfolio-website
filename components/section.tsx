'use client';

import { ReactNode } from 'react';
import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

interface SectionProps {
    children: ReactNode;
    delay?: number;
}

const Section = ({ children, delay = 0 }: SectionProps) => (
    <StyledDiv
    initial={{y: 10, opacity: 0}}
    animate={{y:0, opacity: 1}}
    // @ts-ignore - framer-motion transition type
    transition={{duration: 0.8, delay}}
    mb={6}
    >
        {children}
    </StyledDiv>
)

export default Section

