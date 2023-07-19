import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsDetails } from '../../servises/api';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();


    useEffect(() => {
      if (!movieId) return;
    const fetchReviewsData = async () => {
      try {
        const response = await fetchReviewsDetails(movieId);
        const reviews = response.results;
        setReviews(reviews);
      } catch (error) {
        console.log(error);
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
