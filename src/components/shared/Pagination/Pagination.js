import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <ul className="join">
            {pageNumbers.map(number => (
                <li
                    key={number}
                    className={`cursor-pointer ${currentPage === number ? 'font-semibold' : ''} join-item btn mx-1 bg-base-content text-white rounded-full`}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
