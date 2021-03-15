import { Wrapper } from '../../styles/components/HeaderStyles';
import Input from '../../components/Input'
import Link from 'next/link'

export default function Header ({ inputPlaceholder, onChange, onKeyDown }) {
	return (
		<Wrapper>
			<Link href='/'>
				<h1>Find Movies</h1>
			</Link>
			<Input
				placeholder={inputPlaceholder}
				onChange={(e) => onChange(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' && onKeyDown()}
			/>
		</Wrapper>
	)
}