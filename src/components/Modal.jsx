import React, { useEffect, useState } from 'react';
import unsplashAxios from '../services/unsplashAxios';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { formatAgo } from '../util/date';

export default function Modal({ isOpen, onClose, children, id }) {
  const modalClasses = isOpen ? 'fixed inset-0 flex items-center justify-center' : 'hidden';
  const [imageData, setImageData] = useState(null);

  const fetchImageData = async () => {
    try {
      const response = await unsplashAxios.get(`/photos/${id}`, {});
      setImageData(response?.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="absolute bg-white p-6 rounded-lg w-5/6 z-100">
        {children}
        <button className="absolute top-3 left-0 m-4 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 mx-3">{imageData && imageData?.slug}</h2>
        <button onClick={''} className={`absolute top-8 right-5 text-xl`}>
          {/* 좋아요 아이콘 */}
          {imageData?.liked_by_user ? <FaHeart color="#Ec5642" style={{ stroke: '#F2F4F6', strokeWidth: '30' }} /> : <FaRegHeart color="black" />}
        </button>
        <div className="flex items-center justify-center">
          <img className={`w-80 object-contain`} src={imageData?.urls?.regular} alt={imageData?.alt_description} />
        </div>
        <div className="flex">
          <div className="py-1 px-3 m-3">
            <p>이미지 크기</p>
            <p className="font-bold">
              {imageData?.height}
              {' x '}
              {imageData?.width}
            </p>
          </div>
          <div className="py-1 px-3 m-3">
            <p>업로드</p>
            <p className="font-bold">{formatAgo(imageData?.created_at, 'ko')}</p>
          </div>
          <div className="py-1 px-3 m-3">
            <p>다운로드</p>
            <p className="font-bold">{imageData?.downloads}</p>
          </div>
        </div>
        <div>
          {imageData?.tags.map((item) => (
            <button className="bg-gray-200 py-0.5 px-1 rounded m-1">{item.title}</button>
          ))}
        </div>
        {/* slug - 사진 이름 */}
        {/* liked_by_user */}
        {/* height * width */}
        {/* created_at */}
        {/* downloads */}
        {/* tags - 배열 */}
      </div>
    </div>
  );
}
