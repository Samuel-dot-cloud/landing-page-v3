import styled from "styled-components";

export const Up = styled.div`
  width: 3rem;
  height: 3rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};

  font-size: ${(props) => props.theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  z-index: 3;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    right: 3rem;
    bottom: 0.5rem;
  }
`;
