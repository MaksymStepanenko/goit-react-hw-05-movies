import css from './DetailsMovieCard.module.css';
import PropTypes from 'prop-types';

const DetailsMovieCard = props => {
  const {
    title,
    overview,
    genres,
    poster_path,
    vote_average,
    release_date,
    vote_count,
  } = props.movies;
  const userScore = Math.floor(vote_average * 10);
  const date = release_date?.slice(0, 4);

  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <img
          alt={title}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          width="300px"
        />
      </div>
      <div className={css.infoContainer}>
        <h2>
          {title} {date}
        </h2>

        <p>
          User Score: {userScore}% Votes: {vote_count}
        </p>
        <p>Overview:</p>
        <p className={css.overview}>{overview}</p>
        <p>Genres:</p>
        {Array.isArray(genres) && (
          <ul className={css.genresList}>
            {genres.map(({ name, id }) => {
              return (
                <li key={id}>
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DetailsMovieCard;

DetailsMovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    vote_count: PropTypes.number,
  }),
};
