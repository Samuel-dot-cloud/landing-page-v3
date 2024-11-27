import styled from "styled-components";

export const Section = styled.section`
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  transition: all 0.3s linear;
  position: relative;
  color: ${(props) => props.theme.text};
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;

export const IconList = styled.div`
  display: flex;
  //align-items: center;
  //margin: 1rem auto;
  gap: 1rem;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    width: 100%;
  }
`;

export const Column = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ColumnTitle = styled.li`
  width: fit-content;
  font-family: "Raleway", sans-serif;

  &::after {
    content: " ";
    display: block;
    height: 2px;
    background: ${(props) => props.theme.text};
  }
`;

export const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export const Item = styled.li`
  width: fit-content;
  position: relative;
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ItemsTitle = styled.li`
  width: fit-content;
  font-family: "Raleway", sans-serif;

  &::after {
    content: " ";
    display: block;
    height: 2px;
    background: ${(props) => props.theme.text};
  }
`;

export const Bottom = styled.div`
  width: 75%;
  margin: 0 auto 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 2rem;
`;
