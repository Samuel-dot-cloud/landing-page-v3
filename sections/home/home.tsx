import {
  Box,
  Container,
  Section,
  Subtitle,
  Title,
  StyledImage,
} from "./home-elements";

const Top = () => {
  return (
    <Section id="about">
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
            When not deep in code, you&apos;ll probably find me reading
            something thought-provoking, discovering new music, or enjoying a
            long bike ride.
          </Subtitle>
        </Box>
        <Box>
          <StyledImage
            src="/profile-image.jpeg"
            alt="Profile Image"
            width={500}
            height={500}
          />
        </Box>
      </Container>
    </Section>
  );
};

export default Top;
