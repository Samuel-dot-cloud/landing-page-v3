import {Up} from "./scroll-to-top-elements";
import {useLayoutEffect, useRef} from "react";
import {useWindowScroll} from "react-use";

const ScrollToTop = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {y} = useWindowScroll();

    const scrollToTop = () => {
        let element = document.getElementById('navigation');

        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });

    }

    useLayoutEffect(() => {
        if(y > 200) {
            ref!.current!.style.display = "flex"
        } else {
            ref!.current!.style.display = "none"
        }

    }, [y])

    return (
        <Up ref={ref} onClick={() => scrollToTop()}>
            &#x2191;
        </Up>
    );
}

export default ScrollToTop;