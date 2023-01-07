import {Menu, MenuItem, NavBar, Section} from "./navigation-elements";
import Logo from "./logo";

const Navigation = () => {
    return (
        <Section>
            <NavBar>
                <Logo/>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Stack</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Footer</MenuItem>
                </Menu>
                <h2>Button</h2>
            </NavBar>
        </Section>
    )
}

export default Navigation