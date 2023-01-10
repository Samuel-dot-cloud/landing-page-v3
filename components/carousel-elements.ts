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