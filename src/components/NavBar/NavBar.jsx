import React from 'react';
import categories from '../../constants/data';

import styles from './NavBar.module.css';

const NavBar = ({ onCategoryUpdate: updateCategory }) => {
  return (
    <div className={styles['nav-container']}>
      {categories.map((category) => (
        <button onClick={updateCategory.bind(null, category)} key={category}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
