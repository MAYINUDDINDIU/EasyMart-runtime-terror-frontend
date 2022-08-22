import React from 'react';

const Pagination = ({ productPrePage, totalProduct, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProduct / productPrePage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="btn-group flex justify-center">
            {pageNumbers.map(num => (

                <button onClick={() => paginate(num)} className="btn text-black font-bold bg-transparent">{num}</button>
            ))}
        </div>
    );
};

export default Pagination;