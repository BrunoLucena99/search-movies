import styled from 'styled-components'

export const FilmItemContainer = styled.div`
	background-color: #FFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #000;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #DEBBC3;
	}

	img {
		max-width: 100%;
		height: 80%;
		margin-top: 0.2rem;
		border-radius: 5px;
	}

	div {
		text-align: center;
		padding: 0.5rem 0rem;
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 100%;
		justify-content: space-around;
	}

	div > h1 {
		font-size: 1.5rem;
		font-family: 'Montserrat', sans-serif;
	}
`
