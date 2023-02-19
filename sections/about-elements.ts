import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
