import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const StyledImage = styled(Image)`
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 8px;
  margin: 0 auto;
`;

export const Section = styled.section`
  min-height: 50vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  transition: all 0.3s linear;
  padding: 5%;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    font-size: 2rem;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 10;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      top: 50%;
    }
  }

  .swiper-button-prev {
    left: -70px;

    @media (max-width: 768px) {
      left: 10px;
    }
  }

  .swiper-button-next {
    right: 5px;

    @media (max-width: 768px) {
      right: 30px;
    }
  }

  .swiper-pagination {
    margin-top: 30px;
  }

  .swiper-pagination-fraction {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.text};
  }
`;

export const ProjectBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.body};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(${(props) => props.theme.bodyRgba}, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProjectContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const LargeTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 90%;
  color: ${(props) => props.theme.text};
  align-self: center;
  padding-left: 3rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  margin: 1rem 0;
  text-align: left;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

export const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  margin: 0.5rem 0;
  text-align: left;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

export const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.textRgba},0.8)`};
  margin: 0.5rem 0;
  text-align: left;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const shimmer = keyframes`
    0% {
        background-position: -200%;
    }
    100% {
        background-position: 200%;
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
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.text} 25%,
      ${(props) => props.theme.text} 50%,
      ${(props) => props.theme.text} 75%
    );
    background-size: 200%;
    animation: ${shimmer} 1.5s infinite;
    color: ${(props) => props.theme.body};
  }

  span {
    position: relative;
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const shake = keyframes`
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-2px);
    }
    50% {
        transform: translateX(2px);
    }
    75% {
        transform: translateX(-1px);
    }
`;

export const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontButton};
  transition: all 0.3s linear;

  &:hover {
    animation: ${shake} 0.3s linear;
    text-decoration: underline;
  }
`;
