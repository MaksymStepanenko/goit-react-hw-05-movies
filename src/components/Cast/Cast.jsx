import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCastDetails } from '../../servises/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
      if (!movieId) return;
    const fetchCastData = async () => {
      try {
        // setIsLoading(true);
        const response = await fetchCastDetails(movieId);
        const cast = response.cast;
        setCast(cast);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchCastData();
  }, [movieId]);

  //   const { name, profile_path, character, id } = cast;

  return (
    <div>
      <ul>
        {cast.map(({ name, profile_path, character, id }) => {
         return (<li key={id}>
            <img
              alt={name}
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              width="200px"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>);
        })}
      </ul>
    </div>
  );
};

export default Cast;
