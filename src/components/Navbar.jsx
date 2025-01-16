import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoPlaceholder from '../assets/logo-placeholder.png';

const Nav = styled.nav`
  background-color: #5c4033;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 120px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  flex: 1;
  margin-left: 1rem;
`;

const NavItem = styled.li`
  color: white;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.3s;
  }

  a:hover {
    color: #d4af37;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo src={logoPlaceholder} alt="Logo" />
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/services">Services</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;