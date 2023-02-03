import Banner from "./banner";
import {Bottom, Container, IconList, Item, Left, MenuItems, Section} from "./footer-elements";
import Logo from "../components/logo";
import Link from "next/link";
import {GitHub, LinkedIn, Twitter} from "@mui/icons-material";


const Footer = () => {
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
                        <Link href="https://www.linkedin.com/in/samuel-wahome-571a1a1b0/" target="_blank" rel="noopener">
                            <LinkedIn/>
                        </Link>
                        <Link href="https://twitter.com/samuelwahome_" target="_blank" rel="noopener">
                            <Twitter/>
                        </Link>
                    </IconList>
                </Left>
                <MenuItems>
                    <Item>Home</Item>
                    <Item>About</Item>
                    <Item>Experience</Item>

                    <Item>Projects</Item>
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