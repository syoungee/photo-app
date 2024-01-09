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
      photos list
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {photos &&
          photos.map((photo, index) => (
            <div key={index} className="items-center mx-auto">
              <img className="object-cover w-80 h-80 rounded-md" src={photo?.urls?.regular} alt={photo?.alt_description} />
              {/* <p>{photo?.description}</p> */}
            </div>
          ))}
      </div>
    </div>
  );
}
