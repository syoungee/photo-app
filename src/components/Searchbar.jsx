import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Searchbar() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
  };

  return (
    <div className="bg-slate-200 py-10">
      <h1 className="w-full max-w-lg mx-auto text-5xl text-gray-700">Will Photo</h1>
      <p className="w-full max-w-lg mx-auto mb-3 text-gray-700">
        인터넷의 시각 자료 출처입니다.
        <br /> 모든 지역에 있는 크리에이터들의 지원을 받습니다.
      </p>
      <form className="relative border border-gray-200 rounded-lg w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
        <input type="text" className="rounded-md p-3 w-full" placeholder="고해상도 이미지 검색" value={text} onChange={onChange} />
        <button type="submit" className="absolute right-3 top-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
