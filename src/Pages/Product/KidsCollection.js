import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { kidProduct } from '../../features/collectionSlice';
import Loading from '../../utilities/Loading/Loading';
import SingleKidCollection from './SingleKidCollection';

const KidsCollection = () => {
    const { isLoading, product, error } = useSelector(state => state.collectionSlice)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(kidProduct());
    }, [dispatch])
    return (
        <div>
            {isLoading && <Loading></Loading>}
            {error && <h3>{error}</h3>}
            <div className=" px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 mb-5 grid justify-center ">
                {
                    product.map(pd => <SingleKidCollection key={pd._id} pd={pd}></SingleKidCollection>)
                }

            </div>
        </div>
    );
};

export default KidsCollection;