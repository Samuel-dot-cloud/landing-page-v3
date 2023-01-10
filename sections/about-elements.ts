import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.text};
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
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;
`;

export const SubText = styled.p`
  font-size: ${props => props.theme.fontlg};
  width: 80%;
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;

export const SubTextLight = styled.p`
  font-size: ${props => props.theme.fontmd};
  width: 80%;
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;
`;