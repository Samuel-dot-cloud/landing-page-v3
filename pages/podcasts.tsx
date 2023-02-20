import Carousel, {CarouselItem} from "../components/carousel";
import {Autoplay, EffectCards, Navigation, Pagination} from "swiper";
import styled from "styled-components";
import {NextPage} from "next";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    &>*:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {

    &>*:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontlg};
  }
`;

const SubText = styled.p`
  font-size: ${props => props.theme.fontlg};
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
  }
`;

const SubTextLight = styled.p`
  font-size: ${props => props.theme.fontmd};
  width: 80%;
  color: ${props => `rgba(${props.theme.textRgba},0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontxs};
  }
`;

const podcastItems: CarouselItem[] = [
    {
        id: 1,
        image: "/podcast/codenewbie.jpg",
    },
    {
        id: 2,
        image: "/podcast/coffee_coding_pod.png",
    },
    {
        id: 3,
        image: "/podcast/swift-by-sundell.jpg",
    },
    {
        id: 4,
        image: "/podcast/syntax.jpg",
    },
];

const Podcasts: NextPage = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Carousel modules={[EffectCards, Pagination, Navigation, Autoplay]} items={podcastItems}/>
                </Box>
                <Box>
                    <Title>
                        Podcasts
                    </Title>
                    <SubText>
                        Here are some podcasts I listen to with interesting takes on several topics.
                    </SubText>
                    <SubTextLight>
                        “I remind myself every morning: Nothing I say this day will teach me anything. So if I’m going to learn, I must do it by listening.” ― Larry King
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    );
}

export default Podcasts;