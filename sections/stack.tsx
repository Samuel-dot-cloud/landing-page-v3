import {Box, Container, Section, SubText, SubTextLight, Title} from "./tools-elements";
import Carousel, {CarouselItem} from "../components/carousel";
import {Autoplay, EffectCreative, Navigation, Pagination} from "swiper";

const stackItems: CarouselItem[] = [
    {
        id: 1,
        image: "/swift.svg",
        title: "Swift",
        subTitle: "Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.",
    },
    {
        id: 2,
        image: "/swiftui.svg",
        title: "Swift UI",
        subTitle: "SwiftUI is Apple's brand new framework for building user interfaces for iOS, tvOS, macOS, and watchOS.",
    },
    {
        id: 3,
        image: "/flutter.svg",
        title: "Flutter",
        subTitle: "Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
    },
    {
        id: 4,
        image: "/dart.svg",
        title: "Dart",
        subTitle: "Dart is a client-optimized language for fast apps on any platform.",
    },
    {
        id: 5,
        image: "/next-js.svg",
        title: "NextJS",
        subTitle: "Next.js is a web development framework enabling React-based web applications with server-side rendering and generating static websites",
    },
    {
        id: 6,
        image: "/react.svg",
        title: "React",
        subTitle: "React is a JavaScript library for building user interfaces",
    },
    {
        id: 7,
        image: "/typescript.svg",
        title: "Typescript",
        subTitle: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    },
    {
        id: 8,
        image: "/javascript.svg",
        title: "JavaScript",
        subTitle: "JavaScript is a programming language that is one of the core technologies of the World Wide Web.",
    },
];

const Stack = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Carousel modules={[Pagination, Navigation, EffectCreative, Autoplay]} items={stackItems}/>
                </Box>
                <Box>
                    <Title>
                        Tech Stack
                    </Title>
                    <SubText>
                        Here are the technologies that I use on a day to day basis.
                    </SubText>
                    <SubTextLight>
                        “Simplicity is prerequisite for reliability.” — Edsger W. Dijkstra
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    );
}

export default Stack