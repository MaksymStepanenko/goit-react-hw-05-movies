import { imageURL } from 'servises/api';
import css from './MovieCard.module.css'

const MovieCard = ({  poster_path, title, release_date }) => {
  return (
    <li className={css.cardWrapp}>
          <img className={css.image} src={imageURL(poster_path)} alt={title} />
          <p className={css.text}>{title}</p>
    </li>
  );
};

export default MovieCard;
