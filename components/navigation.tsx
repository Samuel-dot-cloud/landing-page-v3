import {HamburgerMenu, Menu, MenuItem, NavBar, Section} from "./navigation-elements";
import Logo from "./logo";
import Button from "./button";
import {useEffect, useRef, useState} from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import themeAnimation from "../assets/light-dark.json";

const Navigation = () => {

    const [click, setClick] = useState<boolean>(false);
    const lottieRef = useRef<LottieRefCurrentProps | null>(null);
    const [mode, setMode] = useState<string>("dark");

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        lottieRef.current?.playSegments(mode === "light" ? [0, 49] : [49, 0], true);
    };

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
        // 0: light
        // 45: dark
        // lottieRef.current?.pause()
        const frames = lottieRef.current?.getDuration(true);
        console.log(frames + '-----------------');
        // lottieRef.current?.goToAndPlay(40, true);
        // lottieRef.current?.pause();
        // toggleMode()
        // lottieRef.current?.playSegments([47, 0], true);
        lottieRef.current?.goToAndStop(mode === "light" ? 0 : 49, true);
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
                            <Button link="https://samwahome.netlify.app" text="Connect Wallet"/>
                        </div>
                    </MenuItem>
                </Menu>
                <div className="desktop">
                    {/*// lottieRef.current?.playSegments([0, 47], true);*/}
                    {/*// lottieRef.current?.pause()*/}
                    {/*<Button link="https://samwahome.netlify.app" text="Connect Wallet"/>*/}
                    <Lottie lottieRef={lottieRef} animationData={themeAnimation} loop={false} onClick={toggleMode}/>
                </div>
            </NavBar>
        </Section>
    )
}

export default Navigation