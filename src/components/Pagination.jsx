import React, { useState } from 'react';

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [firstPage, setFirstPage] = useState(1);
  const PaginationClasses =
    'z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
  const notIndexedClasses =
    'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  const itemsPerPage = 20; // 페이지당 아이템 수
  const totalItems = 20; // 전체 아이템 수
  const total = 17;
  const total_pages = 8;

  const nextPage = () => {
    setCurrentPage(currentPage++);
  };

  const prevPage = () => {
    if (currentPage >= 2) setCurrentPage(currentPage--);
    else console.log('가장 첫 페이지입니다!');
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                  if (firstPage == currentPage) {
                    // console.log(firstPage, currentPage);
                    setFirstPage(firstPage - 1);
                  }
                } else {
                  console.log(total_pages, '더 이상 페이지를 감소시킬 수 없습니다.');
                }
              }}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage(firstPage)} className={currentPage === firstPage ? PaginationClasses : notIndexedClasses}>
              {firstPage}
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage(firstPage + 1)} className={currentPage === firstPage + 1 ? PaginationClasses : notIndexedClasses}>
              {firstPage + 1}
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage(firstPage + 2)} className={currentPage === firstPage + 2 ? PaginationClasses : notIndexedClasses}>
              {firstPage + 2}
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage(firstPage + 3)} className={currentPage === firstPage + 3 ? PaginationClasses : notIndexedClasses}>
              {firstPage + 3}
            </button>
          </li>
          <li>
            <button onClick={() => setCurrentPage(firstPage + 4)} className={currentPage === firstPage + 4 ? PaginationClasses : notIndexedClasses}>
              {firstPage + 4}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (total_pages > currentPage) {
                  setCurrentPage(currentPage + 1);
                  if (currentPage + 1 >= firstPage + 5) {
                    setFirstPage(currentPage + 1);
                  }
                } else {
                  console.log(total_pages, '더 이상 페이지를 증가시킬 수 없습니다.');
                }
              }}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
