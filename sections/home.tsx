import {Box, Container, Section} from "./home-elements"
import TypewriterText from "../components/typewriter-text";
import CoverAnimation from "../components/cover-animation";


const Top = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <TypewriterText/>
                </Box>
                <Box>
                    <CoverAnimation/>
                </Box>
            </Container>
        </Section>
    )
}

export default Top