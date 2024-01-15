import React from 'react';

export default function Menubar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-center p-1 mx-auto text-gray-600">
        <div className="flex space-x-2 sm:space-x-4">
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">
            보도/편집 전용
          </button>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">팔로잉</button>
          <div className="text-gray-500"> | </div>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">
            Will Photo +
          </button>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">단색</button>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">배경 화면</button>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">3D 렌더링</button>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">자연</button>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">
            텍스처 및 패턴
          </button>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">필름</button>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">거리 사진</button>
          <button className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-500 mx-1 sm:mx-2">실험적인</button>
        </div>
      </div>
    </nav>
  );
}
