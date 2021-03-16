import styled from 'styled-components'

export const Content = styled.main`
	display: flex;
	flex-direction: row;
	background-color: ${props => props.theme.colors.background};
	background-color: #FFF;
	border-radius: 10px;
	width: 100%;
	height: 100%;

	@media(max-width: 950px) {
		padding: 1.5rem 3rem;
	}

	@media(max-width: 760px) {
		padding: 1.5rem 2rem;
	}

	@media(max-width: 650px) {
		flex-direction: column;
	}

	@media(max-width: 450px) {
		padding: 1rem;
	}

`

export const Wrapper = styled.div`
		background-color: #DEDEDE;
`

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;
	grid-template-areas: 
    'header'
    'main'
	;
`

export const ImageBox = styled.div`
		flex: 2;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			border-radius: 10px;
			height: 80%;
			max-width: 95%;
		}

		@media(max-width: 950px) {
			img {
				height: 70%;
			}
		}

		@media(max-width: 650px) {
			img {
				height: 90%;
			}
		}
`

export const DescriptionBox = styled.div`
		flex: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		color: #000;
		padding: 0.5rem 1rem;

		@media(max-width: 650px) {
			margin-top: 1rem;
		}

		#title {
			flex: 1;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-image: linear-gradient(#1e122c,#baa5ce);
			border-radius: 5px;
			margin-bottom: 1rem;
		}

		#title > h1 {
			font-size: 2rem;
			color: #FFF;
			font-weight: 500;
			font-family: 'Montserrat', sans-serif;
			text-align: center;
		}

		#description {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 3;
		}

		#description > span, strong {
			font-size: 1.2rem;
			text-align: center;
		}

		#description > span {
			margin-bottom: 1rem;
		}
`

