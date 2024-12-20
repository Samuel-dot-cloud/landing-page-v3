import { Up } from "./scroll-to-top-elements";
import { useRef } from "react";
import { useIsomorphicLayoutEffect, useWindowScroll } from "react-use";
import { Howl } from "howler";
import { Tooltip } from "antd";

const ScrollToTop = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { y } = useWindowScroll();

  const sound = new Howl({
    src: ["/launch.wav"],
    rate: 2.0,
  });

  const scrollToTop = () => {
    let element = document.getElementById("navigation");

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    sound.play();
  };

  useIsomorphicLayoutEffect(() => {
    if (y > 200) {
      ref!.current!.style.display = "flex";
    } else {
      ref!.current!.style.display = "none";
    }
  }, [y]);

  return (
    <Tooltip title="Scroll to top">
      <Up ref={ref} onClick={() => scrollToTop()}>
        &#x2191;
      </Up>
    </Tooltip>
  );
};

export default ScrollToTop;
