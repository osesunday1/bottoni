import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

const StyledNavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledNavLinkItem = styled.li`
  margin: 1rem;

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }
`;

const StyledNavLink = styled(RouterNavLink)`
  border: 1px solid transparent;
  color: var(--blackText);
  text-decoration: none;
  padding: 0.5rem;

  &:hover,
  &:active,
  &.active {
    background: var(--blackColor);
    border-bottom: none;
    color: var(--blueText);
  }

  @media (min-width: 768px) {
    font-size: 20px;
    color: var(--blueText);
    text-decoration: none;

    &:hover,
    &:active,
    &.active {
    background: none;
    border-bottom: 1px solid var(--greyColor);
    color: var(--greyColor);
    }
  }
`;
/*
const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid #292929;
  color: #292929;
  background: transparent;
  padding: 0.5rem;
  font: inherit;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #292929;
    color: white;
  }

  @media (min-width: 768px) {
    border: 1px solid white;
    color: white;
    background: transparent;

    &:hover,
    &:active {
      background: #f8df00;
      color: #292929;
    }
  }
`;
*/
const NavLinks = () => {
  return (
    <StyledNavLinks>
      <StyledNavLinkItem>
        <StyledNavLink to="/" activeClassName="active">HOME</StyledNavLink>
      </StyledNavLinkItem>
      <StyledNavLinkItem>
        <StyledNavLink to="/about" activeClassName="active">ABOUT US</StyledNavLink>
      </StyledNavLinkItem>
      <StyledNavLinkItem>
        <StyledNavLink to="/faq" activeClassName="active">FAQ</StyledNavLink>
      </StyledNavLinkItem>
      <StyledNavLinkItem>
        <StyledNavLink to="/contact" activeClassName="active">CONTACT</StyledNavLink>
      </StyledNavLinkItem>
    </StyledNavLinks>
  );
}

export default NavLinks;