import styled from 'styled-components'

export const HomeContainer = styled.div`
	width: 100%;
  background-image: url(${props => props.bgImg});
  background-size: cover;
	background-position: center;
  flex: 1;
	display: flex;
	align-items: center;

	@media(max-width: 800px) {
		justify-content: center;
		background-image: linear-gradient(#C07F8E, #1E122C);
	}
`

export const InputBox = styled.div`
	margin-left: 5rem;
	display: flex;
	flex-direction: column;

	h1 {
		align-self: center;
		margin-bottom: 2rem;
		font-size: 2rem;
		font-family: 'Montserrat';
		font-weight: 500;
	}

	@media(max-width: 800px) {
		margin-left: 0rem;
	}
`

export const Button = styled.button`
	margin-top: 1rem;
	padding: 1rem 0.5rem;
	border-radius: 10px;
	background-color: ${({theme}) => theme.colors.secondary};
	cursor: pointer;
	border: 0;
	font-size: 0;

	&:active {
		background-color: ${({theme}) => theme.colors.btnActive};
	}

	span {
		color: #000;
		font-weight: 600;
	}
`
