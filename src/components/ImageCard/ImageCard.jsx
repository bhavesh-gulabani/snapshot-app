import React from 'react';
import useProgressiveImg from '../../hooks/useProgressiveImg';

import styles from './ImageCard.module.css';

const ImageCard = ({ tiny, large, alt }) => {
  const [src, { blur }] = useProgressiveImg(tiny, large);

  return (
    <img
      src={src}
      alt={alt}
      className={blur ? styles.blurred : styles.loaded}
    />
  );
};

export default ImageCard;
