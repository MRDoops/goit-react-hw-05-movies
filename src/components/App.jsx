import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const FilmDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const UseNavigates = lazy(() => import('./UseNavigate/UseNavigate'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<UseNavigates />} />
      </Route>
    </Routes>
  );
};

export default App;
