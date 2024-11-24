import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(${(props) => props.theme.bodyRgba} 0.1);
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3% 5%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.body};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(${(props) => props.theme.bodyRgba}, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProjectContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

export const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

export const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  margin: 0.5rem 0;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

export const StyledTech = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  margin: 5px;
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 20px;
  transition: all 0.3s linear;

  svg {
    margin-right: 5px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: darkblue;
  color: ${(props) => props.theme.text};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontmd};
  transition: all 0.3s linear;

  svg {
    margin-right: 5px;
  }
`;
