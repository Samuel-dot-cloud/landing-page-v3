import {BannerButton, ButtonContainer, ImageContainer, Section, Title } from "./banner-elements";
import resumePDF from '../../public/ resume.pdf';


const Banner = () => {

    const downloadResume = () => {
        fetch('resume.pdf').then(response => {
            console.log(response.blob.toString() + "--------------1-------------");
            response.blob().then(blob => {
                console.log(blob.text() + "--------------2-------------");
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            });
        });
    }


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
                <BannerButton href={resumePDF} download="resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                </BannerButton>
            </ButtonContainer>
        </Section>
    )
}

export default Banner