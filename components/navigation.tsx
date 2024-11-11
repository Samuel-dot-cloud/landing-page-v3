import {
    HamburgerMenu,
    Menu,
    MenuItem,
    MoonIcon,
    NavBar,
    Section,
    SunIcon,
    Volume2Icon,
    VolumeXIcon
} from "./navigation-elements";
import Logo from "./logo";
import {Howl} from 'howler';
import {useEffect, useRef, useState} from "react";
import {LottieRefCurrentProps} from "lottie-react";
import {useTheme} from "./use-theme";
import {Tooltip} from "@mui/material";

const Navigation = ({isGlobal}: { isGlobal: boolean }) => {
    const {theme, isSoundOn, toggleTheme, toggleMode} = useTheme();

    const [click, setClick] = useState<boolean>(false);
    const lottieThemeRef = useRef<LottieRefCurrentProps | null>(null);
    const lottieVolumeRef = useRef<LottieRefCurrentProps | null>(null);

    const sound1 = new Howl({
        src: ['/lights-on.wav']
    });
    const sound2 = new Howl({
        src: ['/lights-off.mp3']
    });
    const sound3 = new Howl({
        src: ['/volume-up.mp3']
    });
    const sound4 = new Howl({
        src: ['/volume-down.mp3']
    });

    const scrollTo = (id: string) => {
        let element = document.getElementById(id);

        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

        setClick(!click);
    }

    useEffect(() => {
        theme.type === "light" ? sound2.play() : sound1.play();
        lottieThemeRef.current?.playSegments(
            theme.type === "light" ? [0, 49] : [49, 0],
            true
        );
    }, [theme.type]);

    useEffect(() => {
        isSoundOn ? sound4.play() : null;
        lottieVolumeRef.current?.playSegments(isSoundOn ? [60, 0] : [0, 60], true);
    }, [isSoundOn]);

    useEffect(() => {
        lottieThemeRef.current?.goToAndStop(theme.type === "light" ? 0 : 49, true);
        lottieVolumeRef.current?.goToAndStop(!isSoundOn ? 60 : 0, true);
    }, [])

    return (
        <Section id="navigation">
            <NavBar>
                <Logo/>
                {!isGlobal ? <div>
                    <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                        &nbsp;
                    </HamburgerMenu>
                    <Menu click={click}>
                        <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                        <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
                        <MenuItem onClick={() => scrollTo('experience')}>Experience</MenuItem>
                        <MenuItem onClick={() => scrollTo('projects')}>Projects</MenuItem>
                    </Menu>
                </div> : null}
                <div className="row">
                    <Tooltip title={theme.type === "light" ? "Switch to dark mode" : "Switch to light mode"}>
                        <div className="desktop-1" onClick={toggleTheme} style={{ cursor: "pointer"}}>
                            {theme.type === "light" ? <MoonIcon size={24} /> : <SunIcon size={24} />}
                        </div>
                    </Tooltip>
                    <Tooltip title={isSoundOn ? "Mute sounds" : "Unmute sounds"}>
                        <div className="desktop-2" onClick={toggleMode} style={{cursor: "pointer"}}>
                            {isSoundOn ? <Volume2Icon size={24} /> : <VolumeXIcon size={24} />}
                        </div>
                    </Tooltip>
                </div>
            </NavBar>
        </Section>
    )
}

export default Navigation