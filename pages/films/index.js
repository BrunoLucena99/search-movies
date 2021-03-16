import { useState } from "react";
import FilmItem from "../../src/components/FilmItem";
import Header from "../../src/components/Header";
import Input from "../../src/components/Input";
import SadIcon from "../../src/components/SadIcon";
import { FilmsContainer, EmptyList } from "../../src/styles/pages/Films";

export default function Films (props) {
	const [films, setFilms] = useState(props.films.Search ?? [])
	const [searchItem, setSearchItem] = useState('')

	const findMoreFilms = async () => {
		const data = await (await fetch(`https://www.omdbapi.com/?apikey=ace1b037&s=${searchItem}`)).json()
		setFilms(data.Search) 
	}

	const onChange = (val) => {
		setSearchItem(val)
	}

	return (
		<FilmsContainer>
			<Header inputPlaceholder='Search Movie...' onChange={onChange} onKeyDown={findMoreFilms} />
				{
					films.length > 0 ? (
						<main>
							{films.map(film => <FilmItem key={film.imdbID} film={film} />)}
						</main>
					) : (
						<EmptyList>
							<SadIcon size='60' />
							<p>Sorry! Your search returned no results</p>
						</EmptyList>
					)

				}
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