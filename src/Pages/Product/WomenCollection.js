import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { womenProduct } from '../../features/collectionSlice';
import Loading from '../../utilities/Loading/Loading';
import SingleWomenCollection from './SingleWomenCollection';

const WomenCollection = () => {
    const { isLoading, product, error } = useSelector(state => state.collectionSlice)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(womenProduct());
    }, [dispatch])
    return (
        <div>
            {isLoading && <Loading></Loading>}
            {error && <h3>{error}</h3>}
            <div className=" px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 mb-5 grid justify-center ">
                {
                    product.map(pd => <SingleWomenCollection key={pd._id} pd={pd}></SingleWomenCollection>)
                }

            </div>
        </div>
    );
};

export default WomenCollection;