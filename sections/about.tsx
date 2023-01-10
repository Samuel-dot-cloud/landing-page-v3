import {Box, Container, Section, SubText, SubTextLight, Title} from "./about-elements"
import Carousel from "../components/carousel";

const About = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Carousel/>
                </Box>
                <Box>
                    <Title>
                        Tech Stack
                    </Title>
                    <SubText>
                        Here&apos;s what I use on a day to day basis.
                    </SubText>
                    <SubTextLight>
                        “I’ve finally learned what ‘upward compatible’ means. It means we get to keep all our old
                        mistakes.” - Dennie van Tassel
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    )
}

export default About