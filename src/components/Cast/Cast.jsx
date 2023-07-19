import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCastDetails } from '../../servises/api';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchCastData = async () => {
      try {
        setIsLoading(true);
        const response = await fetchCastDetails(movieId);
        const cast = response.cast;
        setCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastData();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {isLoading && <Loader />}
      <ul className={css.list}>
        {cast.map(({ name, profile_path, character, id }) => {
          return (
            <li key={id} className={css.item}>
              <img
                alt={name}
                src={
                  profile_path !== null
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : defaultImg
                }
                width="200px"
              />
              <p className={css.text}>{name}</p>
              <p className={css.text}>{character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
