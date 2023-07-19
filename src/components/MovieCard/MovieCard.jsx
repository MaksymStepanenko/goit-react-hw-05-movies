import { imageURL } from 'servises/api';
import PropTypes from 'prop-types';
import css from './MovieCard.module.css';

const MovieCard = ({ poster_path, title, release_date }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const date = release_date.slice(0, 4);
  return (
    <li className={css.cardWrapp}>
      <img
        className={css.image}
        src={poster_path ? imageURL(poster_path) : defaultImg}
        alt={title}
      />

      <div className={css.textWrap}>
        <p className={css.text}>
          {title}
          <strong> {date}</strong>
        </p>
      </div>
    </li>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};
