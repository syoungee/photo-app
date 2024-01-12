import React from 'react';
import Logo from './Logo';
import { BiHeart } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const toMainPage = () => {
    console.log('to main page');
    navigate('/');
  };

  const toBookmarkPage = () => {
    console.log('to book mark page');
    navigate('/bookmark');
  };

  return (
    <div className="flex items-center w-full p-4  border-b ">
      <div onClick={toMainPage} className="cursor-pointer">
        <Logo />
      </div>
      <div className="flex ml-auto items-center">
        <button className="border border-gray-200 text-gray-500 bg-gray-200 hover:bg-gray-300 font-bold py-1 px-2 rounded mr-2">사진 제출</button>
        <button
          className="flex items-center border border-gray-200 text-gray-500 border-gray-200 hover:bg-gray-300 font-bold py-1 px-2 rounded mr-2"
          onClick={toBookmarkPage}
        >
          북마크 <BiHeart className="ml-0.5" />
        </button>
        <p className="text-gray-500 font-bold">Sunyoung | sunyoung@willog.io</p>
      </div>
    </div>
  );
}
