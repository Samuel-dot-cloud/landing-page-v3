import 'styled-components'

// type RGB = `${number}, ${number}, ${number}`;
// type RGBA = `${number}, ${number}, ${number}, ${number}`;
// type HEX = `#${string}`;
//
// type Color = RGB | RGBA | HEX;

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
        bodyRgba: string;
        textRgba: string;
        carouselColor: string;
        fontxs: string;
        fontsm: string;
        fontmd: string;
        fontlg: string;
        fontxl: string;
        fontxxl: string;
        fontxxxl: string;
        fontButton: string;
        navHeight: string;
    }
}