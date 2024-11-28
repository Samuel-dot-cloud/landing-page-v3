import { Button } from "antd";
import styled from "styled-components";
import Link from "next/link";

export const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: ${(props) => props.theme.fontButton};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s linear;
  max-width: 200px;
  margin-left: 6rem;
  margin-right: auto;

  span {
    position: relative;
    font-weight: bold;
    text-transform: uppercase;
  }

  span::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: all 0.3s linear;
  }

  &:hover span::after {
    width: 100%;
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    padding: 10px 15px;
    font-size: ${(props) => props.theme.fontmd || "1rem"};
    margin-left: 1rem; /* Adjust left margin for smaller screens */
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: ${(props) => props.theme.fontsm || "0.9rem"};
    margin-left: 0.5rem; /* Adjust further for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 6px 8px;
    font-size: ${(props) => props.theme.fontxs || "0.8rem"};
    margin-left: 0.5rem; /* Ensure space is still present */
  }
`;

export const Main = styled.main`
  background-color: ${(props) => props.theme.body};
  // color: ${(props) => props.theme.text || "#333"};
  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

export const BackButtonContainer = styled.div`
  // width: 100%;
  // display: flex;
  // justify-content: flex-start;
  // padding-left: 8rem;
  // background-color: ${(props) => props.theme.body};
`;
