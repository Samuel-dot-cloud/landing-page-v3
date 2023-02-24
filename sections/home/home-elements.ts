import styled from "styled-components";

export const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
  transition: all 0.3s linear;
`;

export const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 64em) {
    width: 85%;
  }
  
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    
    &>*:first-child {
      width: 100%;
      margin-top: 2rem;
    }
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
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  @media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;

export const Subtitle = styled.h3`
  font-size: ${props => props.theme.fontlg};
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
  
  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    
  }
`;