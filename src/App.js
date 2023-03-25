import { useState } from 'react';
import './App.module.css';
import { SearchBar, NavBar, ImageGallery } from './components';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('mountains');

  const categoryUpdateHandler = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <>
      <header>
        <h1>SnapShot</h1>
      </header>

      <nav>
        <SearchBar onSearch={categoryUpdateHandler} />
        <NavBar onCategoryUpdate={categoryUpdateHandler} />
      </nav>

      <main>
        <ImageGallery category={selectedCategory} />
      </main>

      <footer>
        <p>Copyright &#169; 2023 SnapShot. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default App;
