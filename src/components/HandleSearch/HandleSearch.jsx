import React, { useState } from 'react';
import { InputForm } from './HandleSearch.stylead';
const SearchForm = ({ onSubmit }) => {
  const [filmName, setFilmName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(filmName);
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <input
        type="text"
        value={filmName}
        onChange={e => setFilmName(e.target.value)}
      />
      <label> Пошук фільму за ключовим словом</label>
      <button type="submit">Пошук</button>
    </InputForm>
  );
};

export default SearchForm;
