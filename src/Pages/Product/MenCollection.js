import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menProduct } from '../../features/collectionSlice';
import Loading from '../../utilities/Loading/Loading';
import SingleMencollection from './SingleMencollection';

const MenCollection = () => {
    const { isLoading, product, error } = useSelector(state => state.collectionSlice)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(menProduct());
    }, [dispatch])
    return (
        <div>
            {isLoading && <Loading></Loading>}
            {error && <h3>{error}</h3>}
            <div className=" px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 mb-5 grid justify-center ">
                {
                    product.map(pd => <SingleMencollection key={pd._id} pd={pd}></SingleMencollection>)
                }

            </div>
        </div>
    );
};

export default MenCollection;