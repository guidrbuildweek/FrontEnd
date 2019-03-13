import styled from 'styled-components';

export const StyledButton = styled.button`
	background: white;
	border: 2px solid black;
	color: black;
	width: 60%;
	padding: 2% 0%;
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 2%;
	:hover {
		transition: 500ms;
		background: black;
		color: white;
	}
`;
