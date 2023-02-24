import {Box, Container, Section, ButtonContainer, Subtitle, Title} from "./home-elements"
import CoverAnimation from "../../components/cover-animation";
import Button from "../../components/button";


const Top = () => {
    return (
        <Section id="home">
            <Container>
                <Box>
                    <Title>
                        Hey, I&apos;m Samuel 👋

                    </Title>

                    <Subtitle>
                        I&apos;m a software developer building both web and mobile app applications.
                    </Subtitle>

                    <Subtitle>
                        “Make it work, make it right, make it fast.” – Kent Beck
                    </Subtitle>

                    <ButtonContainer>
                        <Button link="#about" text="Explore"/>
                    </ButtonContainer>
                </Box>
                <Box>
                    <CoverAnimation/>
                </Box>
            </Container>
        </Section>
    )
}

export default Top;