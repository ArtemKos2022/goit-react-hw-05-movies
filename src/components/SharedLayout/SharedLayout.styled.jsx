import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
width: 1200px;
margin: 0 auto;
padding-bottom: 20px;
`;

export const Header = styled.header`
padding: 30px;
border-bottom: 1px solid black;

`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  
  &.active {
    color: white;
    background-color: #7ea3e9;
  }
`;