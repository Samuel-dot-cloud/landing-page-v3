import styled from "styled-components";


export const Container = styled.div`
  width: 25vw;
  height: 70vh;
  
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontlg};
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;

export const Subtitle = styled.p`
  font-size: ${props => props.theme.fontmd};
  width: 80%;
  color: ${props => `rgba(${props.theme.textRgba},0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;