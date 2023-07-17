import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a197af2e5cbf9f65cf4b05209460ed0e';

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMoviesById = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const fetchCastDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const fetchReviewsDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMoviesByQuery = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
};

export const imageURL = value => {
  return `https://image.tmdb.org/t/p/original${value}`;
}

// https://api.themoviedb.org/3/search/movie?query=qwerty&api_key=a197af2e5cbf9f65cf4b05209460ed0e