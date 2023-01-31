import {Menu, MenuItem, NavBar, Section} from "./navigation-elements";
import Logo from "./logo";
import Button from "./button";

const Navigation = () => {
    return (
        <Section>
            <NavBar>
                <Logo/>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Experience</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    {/*<MenuItem>Footer</MenuItem>*/}
                </Menu>
                <Button link="https://samwahome.netlify.app" text="Connect Wallet"/>
            </NavBar>
        </Section>
    )
}

export default Navigation