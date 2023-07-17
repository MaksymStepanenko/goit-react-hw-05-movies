import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css'

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setInputValue(value);
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input className={css.input}
        onChange={handleInputChange}
        type="text"
        name="input"
        value={inputValue}
        required
        placeholder="Enter the name of the movie"
      />
      <button type="submit" className={css.btn}>search</button>
    </form>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
