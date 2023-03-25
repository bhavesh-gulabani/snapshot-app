import React from 'react';
import images from '../../constants/images';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ category }) => {
  const filteredImages = images[category];

  return (
    <div className={styles['gallery-container']}>
      <p>{category} Pictures</p>
      <div className={styles.images}>
        {filteredImages.map((image, index) => (
          <ImageCard
            tiny={null}
            large={image}
            alt={`${category} ${index}`}
            key={`${category} ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
