import React, { useEffect, useState } from 'react';
import unsplashAxios from '../services/unsplashAxios';

export default function Photos() {
  const [photos, setPhotos] = useState(null);

  const likePhoto = (unsplashId) => {
    try {
      console.log('photo id?', unsplashId);
      unsplashAxios.post(`photos/${unsplashId}/like`).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log('Error fetching like data:', error);
    }
  };

  useEffect(() => {
    const fetchRandomPhoto = async () => {
      try {
        const response = await unsplashAxios.get('photos');
        console.log('response', response);
        setPhotos(response?.data);
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
              <button
                onClick={() => likePhoto(photo.id)}
                className={`z-10 relative bottom-10 left-20 text-xl ${photo?.liked_by_user ? 'text-red-500' : 'text-gray-500'}`}
              >
                {/* 좋아요 아이콘 */}
                버튼 여기!
                {photo?.liked_by_user ? '❤️' : '⭐️'}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
