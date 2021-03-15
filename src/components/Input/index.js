import styled from 'styled-components'

const Input = styled.input`
	height: ${props => props.large ? '5rem' : '2.5rem'};
	width: ${props => props.large ? '25rem': '15rem'};
	border-radius: 10px;
	padding: 0rem 1.5rem;
`

export default Input