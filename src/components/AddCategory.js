/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <input
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={inputValue}
      />
    </form>
  );
}
export default AddCategory;

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
