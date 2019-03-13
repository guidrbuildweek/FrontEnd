import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavbar = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 60px;
	padding-bottom: 20px;
`;

export const StyledH1 = styled.h1`
	font-family: 'Shadows Into Light', cursive;
	font-weight: 400;
	font-size: 40px;
	padding: 20px;
`;
export const StyledLinks = styled.div`
	width: 250px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
	font-family: Roboto, sans-serif;
	padding: 20px;
    font-size:16px;
    color: #FFCE00;
    text-decoration:none;
    :hover {
        color:black;
    }
`;
