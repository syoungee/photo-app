import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Pagination({ page, setPage, totalPage }) {
  // const [page, setPage] = useState(page);
  const [firstPage, setFirstPage] = useState(1);
  const PaginationClasses =
    'z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
  const notIndexedClasses =
    'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  const total_pages = totalPage;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤 효과를 적용하려면 추가
    });
  };

  useEffect(() => {
    // console.log('pagination', page, totalPage);
  }, [page, totalPage]);

  return (
    <div>
      <nav aria-label="Page navigation example" className="flex justify-center">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <button
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                  setPage(page - 1);
                  if (firstPage === page) {
                    setFirstPage(firstPage - 1);
                  }
                } else {
                  console.log(total_pages, '더 이상 페이지를 감소시킬 수 없습니다.');
                }
                scrollToTop();
              }}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage(firstPage);
                scrollToTop();
              }}
              className={page === firstPage ? PaginationClasses : notIndexedClasses}
              disabled={firstPage > totalPage}
            >
              {firstPage}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage(firstPage + 1);
                scrollToTop();
              }}
              className={page === firstPage + 1 ? PaginationClasses : notIndexedClasses}
              disabled={firstPage + 1 > totalPage}
            >
              {firstPage + 1}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage(firstPage + 2);
                scrollToTop();
              }}
              className={page === firstPage + 2 ? PaginationClasses : notIndexedClasses}
              disabled={firstPage + 2 > totalPage}
            >
              {firstPage + 2}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage(firstPage + 3);
                scrollToTop();
              }}
              className={page === firstPage + 3 ? PaginationClasses : notIndexedClasses}
              disabled={firstPage + 3 > totalPage}
            >
              {firstPage + 3}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setPage(firstPage + 4);
                scrollToTop();
              }}
              className={page === firstPage + 4 ? PaginationClasses : notIndexedClasses}
              disabled={firstPage + 4 > totalPage}
            >
              {firstPage + 4}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (total_pages > page) {
                  setPage(page + 1);
                  if (page + 1 >= firstPage + 5) {
                    setFirstPage(page + 1);
                  }
                } else {
                  console.log(total_pages, '더 이상 페이지를 증가시킬 수 없습니다.');
                }
                scrollToTop();
              }}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
