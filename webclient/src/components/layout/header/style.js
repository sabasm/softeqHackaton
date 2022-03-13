import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  background: var(--background-primary_color);
  height: var(--nav-size);
`;

const Navbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const NavAnchord = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--txt-primary_color);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;

export { Header, Navbar, NavAnchord };
