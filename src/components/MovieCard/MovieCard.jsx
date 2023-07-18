import { imageURL } from 'servises/api';
import css from './MovieCard.module.css';

const MovieCard = ({ poster_path, title, release_date }) => {
  const date = release_date.slice(0, 4);
  return (
    <li className={css.cardWrapp}>
      <img className={css.image} src={imageURL(poster_path)} alt={title} />

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
