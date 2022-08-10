import React, { useEffect } from 'react';
import { getFromCart } from '../../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../utilities/Loading/Loading';
import SingleCart from './SingleCart';

const AddToCart = () => {
    const { isLoading, product, error } = useSelector(state => state.cartSlice)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFromCart());
    }, [dispatch])
    return (
        <div>
            {isLoading && <Loading></Loading>}
            <div className='grid grid-cols-1 p-4 gap-10 w-3/4 mx-auto'>
                {
                    product.map(pd => <SingleCart key={pd._id} pd={pd}></SingleCart>)
                }
            </div>
        </div>
    );
};

export default AddToCart;