import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Змінено імпорт
import {
  ListOfFilm,
  InputWrapper,
  Container,
  ErrorText,
} from './movies.styled.jsx';

import { getFilm } from '../../api/fetchFilm'; // Шлях на один рівень вище (виходить з папки MoviesList)

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

  const updateSearch = event => {
    const filmNameValue = event.target.value;
    if (filmNameValue === '') {
      return setSearchFilm({});
    }
    setSearchFilm({ filmName: filmNameValue });
  };

  return (
    <Container>
      <InputWrapper>
        <input type="text" value={filmName} onChange={updateSearch} />
        <label> Пошук фільму за ключовим словом</label>
      </InputWrapper>

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
