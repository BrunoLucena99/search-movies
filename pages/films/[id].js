import { useState } from 'react';
import Header from '../../src/components/Header'
import { Content, Container, ImageBox, DescriptionBox, Wrapper } from '../../src/styles/pages/FilmDetails';
import { useRouter } from 'next/router'

export default function FilmDetails (props) {
	const { film } = props;
	const [search, setSearch] = useState('')
	const router = useRouter()
	
	const loadMoreFilms = () => {
		if (search.length > 0) router.push(`/films?film=${search}`)
		else alert('Digite um filme para prosseguir')
	}

	return (
		<Container>
			<Header
				inputPlaceholder='Search Films...'
				onChange={(val) => setSearch(val)}
				onKeyDown={loadMoreFilms} 
			/>
			<Wrapper>
				<Content>
					<ImageBox>
						<img src={film.Poster} alt='Poster' />
					</ImageBox>
					<DescriptionBox>

						<div id='title'>
							<h1>{film.Title}</h1>
						</div>

						<div id='description'>
							<span>
								<strong>Runtime: </strong>
								{film.Runtime}
							</span>

							<span>
								<strong>Released Data: </strong>
								{film.Released}
							</span>

							<span>
								<strong>Plot: </strong>
								{film.Plot}
							</span>

							<span>
								<strong>Actors: </strong>
								{film.Actors}
							</span>

							<span>
								<strong>Production: </strong>
								{film.Production}
							</span>
						</div>

					</DescriptionBox>
				</Content>
			</Wrapper>
		</Container>
	)
}

export async function getServerSideProps(context) {
	console.log(context.query.id)
	const data = await (await fetch(`http://www.omdbapi.com/?apikey=ace1b037&i=${context.query.id}`)).json()
  return {
    props: {
			film: data
		}
  }
}