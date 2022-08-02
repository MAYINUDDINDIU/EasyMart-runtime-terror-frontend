import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../features/productSlice";
import SingleProduct from "./SingleProduct";
import Loading from "../../utilities/Loading/Loading";

const AllCollection = () => {
    const { isLoading, product, error } = useSelector(state => state.productReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch])
    return (
        <div>
            {isLoading && <Loading></Loading>}
            {error && <h3>{error}</h3>}
            <div className=" px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 mb-5 grid justify-center ">
                {
                    product.map(pd => <SingleProduct key={pd._id} pd={pd}></SingleProduct>)
                }

            </div>
        </div>
    );
};

export default AllCollection;