import {HamburgerMenu, Menu, MenuItem, NavBar, Section} from "./navigation-elements";
import Logo from "./logo";
import Button from "./button";
import {useState} from "react";

const Navigation = () => {

    const [click, setClick] = useState<boolean>(false);

    const scrollTo = (id: string) => {
        let element = document.getElementById(id);

        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

        setClick(!click);
    }

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
                    <Button link="https://samwahome.netlify.app" text="Connect Wallet"/>
                </div>
            </NavBar>
        </Section>
    )
}

export default Navigation