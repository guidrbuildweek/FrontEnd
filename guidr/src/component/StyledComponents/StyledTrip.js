import styled from 'styled-components';

export const StyledTrip = styled.div`
	margin: 10px auto;
	padding: 20px;
	width: 200px;
	font-family: Roboto, sans-serif;
	font-size: 1rem;
	text-align: center;
	box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);

	:hover {
		box-shadow: inset 0 0 0 3px #ffce00;
	}
`;

export const StyledTitle = styled.p`
	width: 100%;
	font-family: 'Shadows Into Light', cursive;
	font-weight: 600;
	font-size: 1.2rem;
`;

export const StyledTripTypes = styled.div`font-size: 0.7rem;`;

export const StyledPosted = styled.p`font-size: 0.8rem;`;
