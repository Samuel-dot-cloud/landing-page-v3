import { Box, Container, Section, Subtitle, Title } from "./home-elements";
import CoverAnimation from "../../components/cover-animation";

const Top = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <Title>Hey, I&apos;m Samuel 👋</Title>

          <Subtitle>
            I&apos;m a software developer based in Nairobi, Kenya, currently
            helping film creatives make sense of their footage at Kino. My work
            focuses on making video editing smarter and more intuitive through
            innovative tooling.
          </Subtitle>

          <Subtitle>
            I&apos;m passionate about building tools that simplify complex
            processes and make life a little easier for people.
          </Subtitle>

          <Subtitle>
            When I&apos;m not deep in code, you&apos;ll probably find me reading
            something thought-provoking, discovering new music, or enjoying a
            long bike ride.
          </Subtitle>
        </Box>
        <Box>
          <CoverAnimation />
        </Box>
      </Container>
    </Section>
  );
};

export default Top;
