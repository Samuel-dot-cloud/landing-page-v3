import styled from "styled-components";


export const Section = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body};
  transition: all 0.3s ease;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 87%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
  
  .row {
    display: flex;
    justify-content: space-evenly;
    align-self: center;
    margin-bottom: 0.5em;
  }
  
  .desktop-1 {
    width: 60px;
    height: 60px;
    padding-right: 1em;
  }

  .desktop-2 {
    width: 60px;
    height: 60px;
  }
  
  .mobile {
    display: none;
    border-radius: 10px;
    width: 60px;
    height: 60px;
  }
  
  //@media (max-width: 64em) {
  //  .row {
  //    display: none;
  //  }
  //  .mobile {
  //    display: inline-block;
  //  }
  //}
`;

export const Menu = styled.ul<{click: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    position: fixed;
    top: ${props => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
    transition: all 0.3s linear;
    backdrop-filter: blur(2px);

    transform: ${props => props.click ? `translateY(0)` : `translateY(1000%)`};
    flex-direction: column;
    justify-content: center;
  }
`;

export const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;

  &::after {
    content: ' ';
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 64em) {
    margin: 1rem 0;
    
    &::after {
      display: none;
    }
  }
`;

export const HamburgerMenu = styled.span<{click: boolean}>`
  width: ${props => props.click ? '2rem' : '1.5rem'};
  height: 2px;
  background: ${props => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 64em) {
    display: flex;
  }

  &::after, &::before {
    content: ' ';
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    right: ${props => props.click ? '-2px' : '0'};
    background: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'};
  }

  &::before {
    bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'};
  }
`;