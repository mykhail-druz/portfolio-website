'use client';

import Link from "next/link";
import PrintIcon from "../icons/print.js";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover svg {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.svg`

    return (
        (<Link href="/">
                <LogoBox>
                    <PrintIcon />
                    <Text
                     color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                     fontFamily='M PLUS Rounded 1c'
                     fontWeight="bold"
                     ml={1}>
                        Mykhail Druz
                     </Text>
                </LogoBox>
        </Link>)
    )
}

export default Logo
