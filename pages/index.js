import { HomeContainer, Button, InputBox } from '../src/styles/pages/Home'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Input from '../src/components/Input'

export default function Home() {

	const router = useRouter()
	const [film, setFilm] = useState('')

	const goToFilms = () => {
		if (film.length > 0) router.push(`/films?film=${film}`)
		else alert('Digite um filme para prosseguir')
	}

  return (
    <HomeContainer bgImg='https://images3.alphacoders.com/106/1060203.jpg'>
			<InputBox>
				<h1>Desafio React & Next</h1>
				<Input
					large
					type='text'
					placeholder='Type the movie title here...'
					onChange={(e) => setFilm(e.target.value)}
					onKeyDown={(e) => e.key === 'Enter' && goToFilms()}
				/>
				<Button onClick={goToFilms}>
					<span>Search Movie</span>
				</Button>
			</InputBox>
    </HomeContainer>
  )
}
