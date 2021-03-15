import { useState } from "react";
import FilmItem from "../../src/components/FilmItem";
import Header from "../../src/components/Header";
import Input from "../../src/components/Input";
import { FilmsContainer } from "../../src/styles/pages/Films";

export default function Films (props) {
	const [films, setFilms] = useState(props.films.Search ?? [])
	const [searchItem, setSearchItem] = useState('')

	const findMoreFilms = async () => {
		const data = await (await fetch(`http://www.omdbapi.com/?apikey=ace1b037&s=${searchItem}`)).json()
		setFilms(data.Search) 
	}

	const onChange = (val) => {
		setSearchItem(val)
	}

	return (
		<FilmsContainer>
			<Header inputPlaceholder='Search Movie...' onChange={onChange} onKeyDown={findMoreFilms} />
			<main>
				{
					films.map(film => <FilmItem key={film.imdbID} film={film} />)
				}
			</main>
		</FilmsContainer>
	) 
}

export async function getServerSideProps(context) {
	const data = await (await fetch(`http://www.omdbapi.com/?apikey=ace1b037&s=${context.query.film}`)).json()
  return {
    props: {
			films: data
		}
  }
}