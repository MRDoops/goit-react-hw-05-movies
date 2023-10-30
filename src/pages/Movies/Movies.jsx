import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ListOfFilm,
  // InputWrapper,
  Container,
  ErrorText,
} from './Movies.styled.jsx';
import SearchForm from '../../components/HandleSearch/HandleSearch.jsx';

import { getFilm } from '../../api/fetchFilm.js'; // Шлях на один рівень вище (виходить з папки MoviesList)

const Movies = () => {
  const [searchFilm, setSearchFilm] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  const location = useLocation(); //для отримання шляху з якого переходимо для передачи через props
  const filmName = searchFilm.get('filmName') ?? '';

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const date = await getFilm(filmName);
        const films = date.results;

        if (!films.length && filmName !== '') {
          setError(`Фільми зі словом ${filmName} не знайдені`);
          setFilms([]);
          setStatus('rejected');
        } else {
          setFilms(films);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchFilm();
  });

  const handleSearch = filmName => {
    setSearchFilm({ filmName });
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSearch} />

      {status === 'rejected' && <ErrorText>{error}</ErrorText>}

      <ListOfFilm>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ListOfFilm>
    </Container>
  );
};

export default Movies;
