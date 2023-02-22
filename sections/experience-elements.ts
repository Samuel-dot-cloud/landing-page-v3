import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 80%;
  background-color: ${props => props.theme.body};
  transition: all 0.3s linear;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

export const LargeTitle = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;
  margin: 0;
`;

export const Title = styled.h3`
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;
  margin: 0 auto;
`;

export const SubText = styled.p`
  font-size: ${props => props.theme.fontmd};
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;

export const SubTextLight = styled.p`
  font-size: ${props => props.theme.fontmd};
  width: 80%;
  color: ${props => `rgba(${props.theme.textRgba},0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontxs};
  }
`;
