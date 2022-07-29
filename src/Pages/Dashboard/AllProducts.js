import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../features/productSlice';
import Loading from '../../utilities/Loading/Loading';
import SingleProduct from '../Product/SingleProduct';
import AllProduct from './AllProduct';

const AllProducts = () => {
    const { isLoading, product, error } = useSelector(state => state.productReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch])
    return (
        <div className="justify-center">
            <h2 className="text-center lg:text-4xl drop-shadow text-red-500 mt-4 mb-10 font-bold">
                OUR ALL PRODUCTS
            </h2>
            {isLoading && <Loading></Loading>}
            {error && <h3>{error}</h3>}
            <div className=" px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 mb-5 grid justify-center ">
                {
                    product.map(pd => <AllProduct key={pd._id} pd={pd}></AllProduct>)
                }

            </div>
        </div>
    );
};

export default AllProducts;