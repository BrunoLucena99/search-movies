import { FilmItemContainer, ImageBox, DescriptionBox } from "../../styles/components/FilmItemStyles";
import Link from 'next/link'

export default function FilmItem({film}) {
	return (
		<Link href={`/films/${film.imdbID}`}>
			<FilmItemContainer>
				<img src={film.Poster} />
				<div>
					<h1>{film.Title}</h1>
					<p>{film.Year}</p>
				</div>
			</FilmItemContainer>
		</Link>
	)
}