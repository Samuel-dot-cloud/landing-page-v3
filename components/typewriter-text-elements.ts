import styled from "styled-components";

export const Title = styled.h2`
    font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: ${props => props.theme.text};
  align-self: flex-start;
  
  span {
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
  }
  .text-1 {
    color: blueviolet;
  }
  .text-2 {
    color: brown;
  }
  
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
  text-transform: capitalize;
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
    
    button {
      margin: 0 auto;
    }
  }
`;