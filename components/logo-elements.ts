import styled from "styled-components";
import Image from "next/image";


export const LogoImage = styled(Image)`
  border-radius: 50px;
  border: 0.5px solid ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  padding: 5px;
  width: 50px;
  height: 50px;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }
`;