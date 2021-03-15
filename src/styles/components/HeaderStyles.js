import styled from 'styled-components';

export const Wrapper = styled.header`
	background-color: ${({theme}) => theme.colors.primary};
	grid-area: header;
	padding: 1rem 5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	@media(max-width: 570px) {
		flex-direction: column;
		padding: 0.5rem 3rem;

		h1 {
			margin-bottom: 1rem;
		}
	}

	h1 {
		font-size: 2rem;
		font-family: 'Montserrat', sans-serif;
		cursor: pointer;
	}
`
