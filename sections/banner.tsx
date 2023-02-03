import Button from "../components/button"
import {BannerButton, ButtonContainer, ImageContainer, Section, Title } from "./banner-elements"


const Banner = () => {
    return (
        <Section>
           <ImageContainer>
               <img src="/ios.svg" alt="Banner Image"/>
               <img src="/android.svg" alt="Banner Image"/>
               <img src="/flutter.svg" alt="Banner Image"/>
               <img src="/react.svg" alt="Banner Image"/>
               <img src="/typescript.svg" alt="Banner Image"/>
               <img src="/swiftui.svg" alt="Banner Image"/>
           </ImageContainer>
            <Title>Let&apos;s connect.</Title>
            <ButtonContainer>
                <BannerButton>
                    Download CV
                </BannerButton>
            </ButtonContainer>
        </Section>
    )
}

export default Banner