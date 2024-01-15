import React, { useEffect, useState } from 'react';
import unsplashAxios from '../services/unsplashAxios';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
import Modal from './Modal';
import { useQuery } from '@tanstack/react-query';

export default function Photos() {
  const [photos, setPhotos] = useState(null);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [photoId, setPhotoId] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(Infinity);
  const { keyword } = useParams();
  const { isLoading, error, data: photoList } = useQuery({ queryKey: ['photos', keyword || '', page], queryFn: () => fetchRandomPhoto() });

  const likePhoto = async (unsplashId) => {
    try {
      console.log('photo id?', unsplashId);
      await unsplashAxios.post(`photos/${unsplashId}/like`);
      setPhotos((prevPhotos) =>
        prevPhotos.map((photo) => {
          if (photo.id === unsplashId) return { ...photo, liked_by_user: !photo.liked_by_user };
          else return photo;
        })
      );
    } catch (error) {
      console.log('Error fetching like data:', error);
    }
  };

  const unlikePhoto = async (unsplashId) => {
    try {
      console.log('photo id?', unsplashId);
      await unsplashAxios.delete(`photos/${unsplashId}/like`);
      setPhotos((prevPhotos) =>
        prevPhotos.map((photo) => {
          if (photo.id === unsplashId) return { ...photo, liked_by_user: !photo.liked_by_user };
          else return photo;
        })
      );
    } catch (error) {
      console.log('Error fetching like data:', error);
    }
  };

  const handleClick = (flag, unsplashId) => {
    if (flag) {
      unlikePhoto(unsplashId);
    } else {
      likePhoto(unsplashId);
    }
  };

  const fetchRandomPhoto = async () => {
    try {
      if (!keyword) {
        const response = await unsplashAxios.get('photos', {
          params: {
            page: page,
          },
        });
        console.log('response', response);
        setPhotos(response?.data);
        setTotalPage(Infinity);
        return response?.data;
      } else {
        const response = await unsplashAxios.get('/search/photos', {
          params: {
            query: keyword,
            page: page,
          },
        });
        console.log('response', response);
        setPhotos(response?.data?.results);
        setTotalPage(response?.data?.total_pages);
        return response?.data?.results;
      }
    } catch (error) {
      console.error('Error fetching random photo:', error);
    }
  };

  const openModal = (id) => {
    setPhotoId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {}, [keyword]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 cursor-pointer">
        {photos &&
          photos.map((photo, index) => (
            <div key={index} className="items-center mx-auto relative" onClick={() => openModal(photo.id)}>
              <img className="object-cover w-80 h-80 rounded-md" src={photo?.urls?.regular} alt={photo?.alt_description} />
              {/* <p>{photo?.description}</p> */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(photo?.liked_by_user, photo.id);
                }}
                className={`absolute bottom-5 right-5 text-xl`}
              >
                {/* 좋아요 아이콘 */}
                {photo?.liked_by_user ? <FaHeart color="#Ec5642" style={{ stroke: '#F2F4F6', strokeWidth: '30' }} /> : <FaRegHeart color="#F2F4F6" />}
              </button>
            </div>
          ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      <div className="min-h-screen flex items-center justify-center">
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} id={photoId} totalPage={totalPage} />}
      </div>
    </div>
  );
}
