import { ColorModeScript } from "@chakra-ui/react";
import NextDocoment, { Html, Head, Main, NextScript } from 'next/document';
import theme from "../libs/theme";

export default class Document extends NextDocoment {
    render () {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}