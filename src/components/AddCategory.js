/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './addCategory.module.scss';

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [...cats, inputValue]);
    }
  };

  return (
    <form className={styles.main} onSubmit={(e) => handleOnSubmit(e)}>
      <label htmlFor="search">
        Search something!
        {' '}
        <input
          name="search"
          id="search"
          type="text"
          onChange={(e) => handleOnChange(e)}
          value={inputValue}
        />
      </label>
    </form>
  );
}
export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
