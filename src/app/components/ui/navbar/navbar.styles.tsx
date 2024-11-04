import styled from "styled-components";

const NavbarWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 1em;
  }
`;

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    // box shadow for nav
    -webkit-box-shadow: 0 4px 6px -6px #222;
    -moz-box-shadow: 0 4px 6px -6px #222;
    box-shadow: 0 4px 6px -6px #222;
`;


export {
    NavbarWrapper,
    NavWrapper
};