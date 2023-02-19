import Banner from "./banner";
import {Bottom, Container, IconList, Item, Left, MenuItems, Section} from "./footer-elements";
import Logo from "../components/logo";
import Link from "next/link";
import {Email, GitHub, LinkedIn, Twitter} from "@mui/icons-material";


const Footer = () => {

    const scrollTo = (id: string) => {
        let element = document.getElementById(id);

        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

    }

    return (
        <Section>
            <Banner/>
            <Container>
                <Left>
                    <Logo/>
                    <IconList>
                        <Link href="https://github.com/Samuel-dot-cloud" target="_blank" rel="noopener">
                            <GitHub/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/samuel-wahome-571a1a1b0/" target="_blank"
                              rel="noopener">
                            <LinkedIn/>
                        </Link>
                        <Link href="https://twitter.com/samuelwahome_" target="_blank" rel="noopener">
                            <Twitter/>
                        </Link>
                        <Link href="mailto:samuelwahome.k5@gmail.com" target="_blank" rel="noopener">
                            <Email/>
                        </Link>
                    </IconList>
                </Left>
                <MenuItems>
                    <Item onClick={() => scrollTo('home')}>Home</Item>
                    <Item onClick={() => scrollTo('about')}>About</Item>
                    <Item onClick={() => scrollTo('experience')}>Experience</Item>

                    <Item onClick={() => scrollTo('projects')}>Projects</Item>
                    <Item>Home</Item>
                    <Item>Home</Item>
                </MenuItems>
            </Container>
            <Bottom>
                <span>
                    &copy; {new Date().getFullYear()} Samuel Wahome. All rights reserved.
                </span>
            </Bottom>
        </Section>
    )
}

export default Footer