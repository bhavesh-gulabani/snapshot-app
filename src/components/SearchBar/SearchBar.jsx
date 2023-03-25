import React from 'react';
import Select from 'react-select';
import categories from '../../constants/data';

import styles from './SearchBar.module.css';

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const SearchBar = ({ onSearch }) => {
  const options = categories.map((category) => {
    return {
      value: category,
      label: capitalizeFirstLetter(category),
    };
  });

  const searchHandler = (data) => {
    onSearch(data.value);
  };

  return (
    <div className={styles['search-container']}>
      <Select
        options={options}
        placeholder="Search..."
        onChange={searchHandler}
        value={null}
      />
    </div>
  );
};

export default SearchBar;
