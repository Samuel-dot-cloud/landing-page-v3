import {Box, Container, Section, SubTextLight, Title} from "./about-elements";
import Image from "next/image";
import {Avatar, Chip, Stack} from "@mui/material";


const About = () => {
    return (
        <Section id="about">
            <Container>
                <Box>
                    <Title>
                        About me.
                    </Title>
                    <SubTextLight>
                        I started out my software development journey in 2020, learning basic web design, agile
                        methodologies, and wireframing. Through a bootcamp, I gained proficiency in HTML, CSS,
                        JavaScript, and Jquery, allowing me to create websites. I then advanced to learning web
                        frameworks like Angular and Spark, a web framework for creating websites and APIs with Java as
                        the main programming language. I have since also explored React and NextJS in order to augment
                        my web development skills
                    </SubTextLight>
                    <SubTextLight>
                        In addition to my web development skills, I am also proficient in mobile
                        technologies such as Flutter with Dart, and Swift for UIKit and SwiftUI. With my experience
                        in these tools, I have the ability to create functional and scalable mobile applications for
                        both Android and iOS platforms. I am always looking to improve my skills and stay up to
                        date with the latest tech trends. In my free time, I enjoy reading, listening to music or
                        podcasts, bike riding, and spending time with friends and family.
                    </SubTextLight>
                    <SubTextLight>
                        Here are a few technologies I’ve been working with recently:
                    </SubTextLight>
                    <Stack direction="row" spacing={2}>
                        <Chip component="a" href="https://flutter.dev/" target="_blank" size="medium"
                              label={<SubTextLight>
                                  Flutter
                              </SubTextLight>} avatar={<Avatar src="/flutter.svg"/>} clickable/>
                        <Chip component="a" href="https://dart.dev/" target="_blank" size="medium" label="Dart"
                              avatar={<Avatar src="/dart.svg"/>} clickable/>
                        <Chip component="a" href="https://developer.apple.com/swift/" target="_blank" size="medium"
                              label="Swift" avatar={<Avatar src="/swift.svg"/>} clickable/>
                        <Chip component="a" href="https://developer.apple.com/xcode/swiftui/" target="_blank"
                              size="medium" label="SwiftUI" avatar={<Avatar src="/swiftui.svg"/>} clickable/>
                    </Stack>
                    <Stack direction="row" spacing={2} paddingTop={3}>
                        <Chip component="a" href="https://nextjs.org/" target="_blank" size="medium" label="NextJS"
                              avatar={<Avatar src="/next-js.svg"/>} clickable/>
                        <Chip component="a" href="https://reactjs.org/" target="_blank" size="medium" label="React"
                              avatar={<Avatar src="/react.svg"/>} clickable/>
                        <Chip component="a" href="https://www.typescriptlang.org/" target="_blank" size="medium"
                              label="Typescript" avatar={<Avatar src="/typescript.svg"/>} clickable/>
                        <Chip component="a" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                              target="_blank" size="medium" label="JavaScript" avatar={<Avatar src="/javascript.svg"/>}
                              clickable/>
                    </Stack>
                </Box>
                <Box>
                    <Image src="/memoji.jpeg" alt="Profile image" width={450} height={450}/>
                </Box>
            </Container>
        </Section>
    )
}

export default About