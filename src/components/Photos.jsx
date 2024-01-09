import React, { useEffect, useState } from 'react';
import unsplash from '../services/unsplash';

export default function Photos() {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    const fetchRandomPhoto = async () => {
      try {
        const response = await unsplash.photos.list();
        console.log('response', response);
        setPhotos(response?.response?.results);
      } catch (error) {
        console.error('Error fetching random photo:', error);
      }
    };

    fetchRandomPhoto();
  }, []);

  return (
    <div>
      photo page
      <div>
        {photos &&
          photos.map((photo) => (
            <div>
              <img src={photo?.urls?.regular} alt={photo?.alt_description} />
              <p>{photo?.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
