import {ButtonContainer, Subtitle, Title} from "./typewriter-text-elements"
import Button from "./button";

const TypewriterText = () => {
    return (
        <>
            <Title>
                Hey there! I am Samuel
            </Title>

            <Subtitle>
                “Make it work, make it right, make it fast.” – Kent Beck
            </Subtitle>

            <ButtonContainer>
                <Button link="#about" text="Explore"/>
            </ButtonContainer>
        </>
    )
}

export default TypewriterText