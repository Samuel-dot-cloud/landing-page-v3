import {
  HamburgerMenu,
  Menu,
  MenuItem,
  MoonIcon,
  NavBar,
  Section,
  SunIcon,
  Volume2Icon,
  VolumeXIcon,
} from "./navigation-elements";
import { Howl } from "howler";
import { useRef, useState } from "react";
import { useTheme } from "../hooks/use-theme";
import { Tooltip } from "antd";

const Navigation = ({ isGlobal }: { isGlobal: boolean }) => {
  const { theme, isSoundOn, toggleTheme, toggleMode } = useTheme();

  const [click, setClick] = useState<boolean>(false);

  const sound1Ref = useRef(
    new Howl({
      src: ["/lights-on.wav"],
    }),
  );

  const sound2Ref = useRef(
    new Howl({
      src: ["/lights-off.mp3"],
    }),
  );

  const sound3Ref = useRef(
    new Howl({
      src: ["/volume-up.mp3"],
    }),
  );

  const sound4Ref = useRef(
    new Howl({
      src: ["/volume-down.mp3"],
    }),
  );

  const handleToggleMode = () => {
    if (isSoundOn) {
      sound3Ref.current.play();
    } else {
      sound4Ref.current.play();
    }
    toggleMode();
  };

  const handleToggleTheme = () => {
    if (theme.type === "light") {
      sound2Ref.current.play();
    } else {
      sound1Ref.current.play();
    }
    toggleTheme();
  };

  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar>
        {!isGlobal ? (
          <div className="menu-container">
            <HamburgerMenu click={click} onClick={() => setClick(!click)}>
              &nbsp;
            </HamburgerMenu>
            <Menu click={click}>
              {/*<MenuItem onClick={() => scrollTo("home")}>Home</MenuItem>*/}
              <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
              <MenuItem onClick={() => scrollTo("experience")}>
                Experience
              </MenuItem>
              <MenuItem onClick={() => scrollTo("projects")}>Projects</MenuItem>
            </Menu>
          </div>
        ) : null}
        <div className="icons-container">
          <Tooltip
            title={
              theme.type === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
          >
            <div
              className="desktop-1"
              onClick={handleToggleTheme}
              style={{ cursor: "pointer" }}
            >
              {theme.type === "light" ? (
                <MoonIcon size={24} />
              ) : (
                <SunIcon size={24} />
              )}
            </div>
          </Tooltip>
          <Tooltip title={isSoundOn ? "Mute sounds" : "Unmute sounds"}>
            <div
              className="desktop-2"
              onClick={handleToggleMode}
              style={{ cursor: "pointer" }}
            >
              {isSoundOn ? (
                <Volume2Icon size={24} />
              ) : (
                <VolumeXIcon size={24} />
              )}
            </div>
          </Tooltip>
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;
