import PropTypes from 'prop-types';
import { getGifs } from '../helpers/getGifs';
import { useEffect, useState } from 'react';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect( () => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {
          images.map( (image) => <li key={image.id}>{image.title}</li>)
        }
      </ol>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string
}
