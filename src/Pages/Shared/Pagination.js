import React from 'react';

const Pagination = ({ productPrePage, totalProduct, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProduct / productPrePage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className=" flex justify-center mt-20">
            <button className='mt-12'><ion-icon name="chevron-back-outline"></ion-icon></button>
            {pageNumbers.map(num => (

                <button onClick={() => paginate(num)} className={`btn  font-bold bg-white mt-10 border-0 mx-3 ${currentPage === num ? 'bg-[#448bba]  hover:bg-[#448bba] text-white font-bold' : 'text-black hover:bg-white '}`}>{num}</button>
                
            ))}
             <button className='mt-12'><ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
    );
};

export default Pagination;