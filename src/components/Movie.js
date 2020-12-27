import React from "react";
import PropType from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";
/*className은 랜더링 이후 class 라고 바뀝니다.*/
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `./movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropType.number.isRequired,
  year: PropType.number.isRequired,
  title: PropType.string.isRequired,
  summary: PropType.string.isRequired,
  poster: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
};
export default Movie;
