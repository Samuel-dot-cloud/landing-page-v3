import {HamburgerMenu, Menu, MenuItem, NavBar, Section} from "./navigation-elements";
import Logo from "./logo";
import {Howl, Howler} from 'howler';
import {useEffect, useRef, useState} from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import themeAnimation from "../assets/light-dark.json";
import volumeAnimation from "../assets/volume-on-off.json";

const Navigation = () => {

    const [click, setClick] = useState<boolean>(false);
    const lottieThemeRef = useRef<LottieRefCurrentProps | null>(null);
    const lottieVolumeRef = useRef<LottieRefCurrentProps | null>(null);
    const [mode, setMode] = useState<string>("dark");
    const [volume, setVolume] = useState<string>("mute");

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

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        mode === "light" ? sound2.play() : sound1.play();
        lottieThemeRef.current?.playSegments(mode === "light" ? [0, 49] : [49, 0], true);
    };

    const toggleVolume = () => {
        setVolume((prevMode) => (prevMode === "mute" ? "full" : "mute"));
        volume === "mute" ? sound3.play() : sound4.play();
        lottieVolumeRef.current?.playSegments(volume === "mute" ? [60, 0] : [0, 60], true);
    }

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
        lottieThemeRef.current?.goToAndStop(mode === "light" ? 0 : 49, true);
        lottieVolumeRef.current?.goToAndStop(mode === "mute" ? 60 : 0, true);
        // const frames = lottieVolumeRef.current?.getDuration(true);
        // console.log(frames + '----------------');
    }, [])

    return (
        <Section id="navigation">
            <NavBar>
                <Logo/>
                <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                    &nbsp;
                </HamburgerMenu>
                <Menu click={click}>
                    <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                    <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
                    <MenuItem onClick={() => scrollTo('experience')}>Experience</MenuItem>
                    <MenuItem onClick={() => scrollTo('projects')}>Projects</MenuItem>
                    <MenuItem>
                        <div className="mobile">
                            <Lottie lottieRef={lottieThemeRef} animationData={themeAnimation} loop={false}
                                    onClick={toggleMode}/>
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div className="mobile">
                            <Lottie lottieRef={lottieVolumeRef} animationData={volumeAnimation} loop={false}
                                    onClick={toggleVolume}/>
                        </div>
                    </MenuItem>
                </Menu>
                <div className="row">
                    <div className="desktop-1">
                        <Lottie lottieRef={lottieThemeRef} animationData={themeAnimation} loop={false}
                                onClick={toggleMode}/>
                    </div>
                    <div className="desktop-2">
                        <Lottie lottieRef={lottieVolumeRef} animationData={volumeAnimation} loop={false}
                                onClick={toggleVolume}/>
                    </div>
                </div>
            </NavBar>
        </Section>
    )
}

export default Navigation