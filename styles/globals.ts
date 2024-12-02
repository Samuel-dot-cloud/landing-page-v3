import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway";
import "@fontsource-variable/jetbrains-mono";

export const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'JetBrains Mono Variable', monospace;
        overflow-x: hidden;
    }

    #__next {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
