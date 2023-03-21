import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Button = styled(NavLink)`
display: block;
border: 1px solid black;
border-radius: 5%;
margin-left: 10px;
margin-top: 10px;
padding: 3px;
text-align:center;
color: #212121;
width: 60px;
text-decoration: none;
`