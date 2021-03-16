import styled from 'styled-components'

export const FilmsContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 8fr;
	grid-template-areas: 
    'header'
    'main'
	;

	main {
		grid-area: main;
		background-color: #E5E5E5;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
		padding: 1rem 2rem;

		@media(max-width: 850px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media(max-width: 570px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
`

export const EmptyList = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	p {
		margin-top: 2rem;
		color: #000;
		font-size: 1.5rem;
		text-align: center;
	}
`
