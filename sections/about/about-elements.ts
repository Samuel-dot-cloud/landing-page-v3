import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  transition: all 0.3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
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
`;

export const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;
  margin: 0;
`;

export const SubTextLight = styled.p`
  font-size: ${props => props.theme.fontmd};
  width: 80%;
  color: ${props => `rgba(${props.theme.textRgba},0.6)`};
  align-self: flex-start;
  margin: 1rem 0;
  font-weight: 500;
`;

export const StyledImage = styled(Image)`
  width: 30vw;
  height: 60vh;
  border-radius: 20px;
  border: 2px solid ${props => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
  

  @media (max-width: 64em) {
    height: 30vh;
    width: 55vw;
  }

  @media (max-width: 48em) {
    height: 25vh;
    width: 50vw;
  }

  @media (max-width: 30em) {
    height: 25vh;
    width: 40vw;
  }
`;