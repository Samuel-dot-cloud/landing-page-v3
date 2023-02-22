import '../styles/globals'
import type {AppProps} from 'next/app'
import {GlobalStyles} from "../styles/globals";
import {DefaultTheme, ThemeProvider} from "styled-components";
import {dark, light} from "../styles/themes";
import {useEffect, useState} from "react";
import {ThemeContext} from '../components/use-theme';
import {Howler} from 'howler';

export default function App({Component, pageProps}: AppProps) {
    const [theme, setTheme] = useState<DefaultTheme>(light);
    const [isSoundOn, setIsSoundOn] = useState<boolean>(false);

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const newTheme = currentTheme === light ? dark : light;
            localStorage.setItem('theme', JSON.stringify(newTheme));
            return newTheme;
        });
    }

    const toggleMode = () => {
        setIsSoundOn((prev) => {
            const next = !prev;
            localStorage.setItem('isSoundOn', JSON.stringify(next));
            return next;
        });
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(JSON.parse(storedTheme));
        }

        const storedSound = localStorage.getItem('isSoundOn');
        if (storedSound) {
            setIsSoundOn(JSON.parse(storedSound));
        }
    }, []);

    useEffect(() => {
        if (isSoundOn) {
            Howler.mute(false);
        } else {
            Howler.mute(true);
        }
    }, [isSoundOn]);

    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={theme}>
                <ThemeContext.Provider value={{theme, isSoundOn, toggleTheme, toggleMode}}>
                    <Component {...pageProps} />
                </ThemeContext.Provider>
            </ThemeProvider>
        </>
    );
}
