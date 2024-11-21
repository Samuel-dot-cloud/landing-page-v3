import {
  Box,
  Container,
  Section,
  StyledImage,
  SubTextLight,
  Title,
} from "./about-elements";
import { Avatar, Chip, Stack } from "@mui/material";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Title>About me.</Title>
          <SubTextLight>
            I&apos;m a software engineer and writer living in Nairobi, Kenya.
          </SubTextLight>
          <SubTextLight>
            In addition to my web development skills, I am also proficient in
            mobile technologies such as Flutter with Dart, and Swift for UIKit
            and SwiftUI. With my experience in these tools, I have the ability
            to create functional and scalable mobile applications for both
            Android and iOS platforms. I am always looking to improve my skills
            and stay up to date with the latest technical trends. In my free
            time, I enjoy reading, listening to music or podcasts, bike riding,
            and spending time with friends and family.
          </SubTextLight>
          <SubTextLight>
            Here are a few technologies I’ve been working with recently:
          </SubTextLight>
          <Stack direction="row" spacing={2} padding={3}>
            <Chip
              component="a"
              href="https://flutter.dev/"
              target="_blank"
              size="medium"
              label={<SubTextLight>Flutter</SubTextLight>}
              avatar={<Avatar src="/flutter.svg" />}
              clickable
            />
            <Chip
              component="a"
              href="https://dart.dev/"
              target="_blank"
              size="medium"
              label={<SubTextLight>Dart</SubTextLight>}
              avatar={<Avatar src="/dart.svg" />}
              clickable
            />
            <Chip
              component="a"
              href="https://developer.apple.com/swift/"
              target="_blank"
              size="medium"
              label={<SubTextLight>Swift</SubTextLight>}
              avatar={<Avatar src="/swift.svg" />}
              clickable
            />
          </Stack>
          <Stack direction="row" spacing={2} paddingX={5}>
            <Chip
              component="a"
              href="https://nextjs.org/"
              target="_blank"
              size="medium"
              label={<SubTextLight>NextJS</SubTextLight>}
              avatar={<Avatar src="/next-js.svg" />}
              clickable
            />
            <Chip
              component="a"
              href="https://reactjs.org/"
              target="_blank"
              size="medium"
              label={<SubTextLight>React</SubTextLight>}
              avatar={<Avatar src="/react.svg" />}
              clickable
            />
            <Chip
              component="a"
              href="https://www.typescriptlang.org/"
              target="_blank"
              size="medium"
              label={<SubTextLight>TypeScript</SubTextLight>}
              avatar={<Avatar src="/typescript.svg" />}
              clickable
            />
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            paddingX={5}
            paddingTop={3}
            paddingBottom={3}
          >
            <Chip
              component="a"
              href="https://developer.apple.com/xcode/swiftui/"
              target="_blank"
              size="medium"
              label={<SubTextLight>SwiftUI</SubTextLight>}
              avatar={<Avatar src="/swiftui.svg" />}
              clickable
            />
            <Chip
              component="a"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              size="medium"
              label={<SubTextLight>JavaScript</SubTextLight>}
              avatar={<Avatar src="/javascript.svg" />}
              clickable
            />
          </Stack>
        </Box>
        <Box>
          <StyledImage
            src="/memoji.jpeg"
            alt="Profile image"
            width={300}
            height={300}
          />
        </Box>
      </Container>
    </Section>
  );
};

export default About;
