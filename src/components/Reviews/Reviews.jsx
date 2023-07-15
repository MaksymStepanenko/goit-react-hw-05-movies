import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsDetails } from '../../servises/api';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);

    useEffect(() => {
      if (!movieId) return;
    const fetchReviewsData = async () => {
      try {
        // setIsLoading(true);
        const response = await fetchReviewsDetails(movieId);
        // console.log(response.results);
        const reviews = response.results;
        // const cast = response.cast;
        setReviews(reviews);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchReviewsData();
  }, [movieId]);

  return (
    <div>
      {reviews?.length !== 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <strong>{author}</strong>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>this film don't have reviews</h2>
      )}
    </div>
  );
};

export default Reviews;
