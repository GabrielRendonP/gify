import { useState } from 'react';

function AddCategory() {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
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
