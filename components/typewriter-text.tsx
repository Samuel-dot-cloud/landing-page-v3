import {ButtonContainer, Subtitle, Title} from "./typewriter-text-elements"
import Typewriter from "typewriter-effect"
import Button from "./button";

const TypewriterText = () => {
    return (
        <>
            <Title>
                Hey there! I am Samuel

                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<span class="text-1">I am a mobile and web developer.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('<span class="text-2">I love translating code into practical solutions.</span>')
                            .pauseFor(2000)
                            .deleteAll()
                            .start()
                    }}
                />

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