import React, { useEffect, useState } from 'react';
import unsplashAxios from '../services/unsplashAxios';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import Pagination from './Pagination';
import { useParams, useLocation } from 'react-router-dom';
import Modal from './Modal';
import { useQuery } from '@tanstack/react-query';

interface Photo {
  id: string;
  liked_by_user: boolean;
  urls: {
    regular: string;
  };
  alt_description: string;
}

export default function Photos(): JSX.Element {
  const [photos, setPhotos] = useState<Photo[] | null | undefined>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [photoId, setPhotoId] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(Infinity);
  const { keyword } = useParams<{ keyword: string }>();
  const location = useLocation();

  const fetchRandomPhoto = async () => {
    try {
      let response;
      if (!keyword) {
        response = await unsplashAxios.get('photos', {
          params: {
            page,
          },
        });
      } else {
        response = await unsplashAxios.get('/search/photos', {
          params: {
            query: keyword,
            page,
          },
        });
        setTotalPage(response?.data?.total_pages || 0);
      }

      const responseData = response?.data;
      setPhotos(responseData?.results || responseData);
      // setPage(1);
      return responseData?.results || responseData;
    } catch (error) {
      console.error('Error fetching random photo:', error);
    }
  };

  const {
    isLoading,
    error,
    data: photoList,
  } = useQuery<Photo[]>({
    queryKey: ['photos', keyword || '', page],
    queryFn: fetchRandomPhoto,
  });

  const likePhoto = async (unsplashId: string) => {
    try {
      await unsplashAxios.post(`photos/${unsplashId}/like`);
      setPhotos((prevPhotos) => prevPhotos?.map((photo) => (photo.id === unsplashId ? { ...photo, liked_by_user: !photo.liked_by_user } : photo)));
    } catch (error) {
      console.log('Error fetching like data:', error);
    }
  };

  const unlikePhoto = async (unsplashId: string) => {
    try {
      await unsplashAxios.delete(`photos/${unsplashId}/like`);
      setPhotos((prevPhotos) => prevPhotos?.map((photo) => (photo.id === unsplashId ? { ...photo, liked_by_user: !photo.liked_by_user } : photo)));
    } catch (error) {
      console.log('Error fetching like data:', error);
    }
  };

  const handleClick = (flag: boolean, unsplashId: string) => {
    if (flag) {
      unlikePhoto(unsplashId);
    } else {
      likePhoto(unsplashId);
    }
  };

  const openModal = (id: string) => {
    setPhotoId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // console.log('keyword & key', keyword, location?.hash, location?.key);
    // console.log(location);
  }, [keyword, location?.key]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 cursor-pointer">
        {photos &&
          photos.map((photo, index) => (
            <div key={index} className="items-center mx-auto relative" onClick={() => openModal(photo.id)}>
              <img className="object-cover w-80 h-80 rounded-md" src={photo?.urls?.regular} alt={photo?.alt_description} />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(photo?.liked_by_user || false, photo.id);
                }}
                className={`absolute bottom-5 right-5 text-xl`}
              >
                {photo?.liked_by_user ? <FaHeart color="#Ec5642" style={{ stroke: '#F2F4F6', strokeWidth: '30' }} /> : <FaRegHeart color="#F2F4F6" />}
              </button>
            </div>
          ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      <div className="min-h-screen flex items-center justify-center">{isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} id={photoId} />}</div>
    </div>
  );
}
