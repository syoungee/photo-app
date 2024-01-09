import React from 'react';
import Logo from './Logo';
import LogoSVG from '../willog.svg';

export default function header() {
  return (
    <div className="flex items-center w-full p-4  border-b ">
      <Logo />
      <div className="flex ml-auto items-center">
        <button className="border border-gray-200 text-gray-500 bg-gray-200 hover:bg-gray-300 font-bold py-1 px-2 rounded mr-2">사진 제출</button>
        <button className="border border-gray-200 text-gray-500 border-gray-200 hover:bg-gray-300 font-bold py-1 px-2 rounded mr-2">북마크</button>
        <p className="text-gray-500 font-bold">Sunyoung | sunyoung@willog.io</p>
      </div>
    </div>
  );
}
