import { Route, Routes } from 'react-router-dom';

import Header from './Header/Header';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetails from 'pages/MovieDetails'

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};
