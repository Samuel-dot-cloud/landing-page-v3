import {createContext, useContext} from "react";
import {DefaultTheme} from "styled-components";
import {light} from "../styles/themes";

export interface ThemeContextType {
    theme: DefaultTheme;
    isSoundOn: boolean;
    toggleTheme: () => void;
    toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: light,
    isSoundOn: false,
    toggleTheme: () => {
    },
    toggleMode: () => {
    },
});

export const useTheme = (): ThemeContextType => {
    const {theme, isSoundOn, toggleTheme, toggleMode} = useContext(ThemeContext);
    return {theme, isSoundOn, toggleTheme, toggleMode};
}