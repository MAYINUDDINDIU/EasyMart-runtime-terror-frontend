import React, { useEffect } from "react";

import p1 from "../../assets/products/product1.jpg";
import p2 from "../../assets/products/product2.jpg";
import p3 from "../../assets/products/product3.jpg";
import p4 from "../../assets/products/product4.jpg";
import p5 from "../../assets/products/product5.jpg";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../features/productSlice";
import SingleProduct from "./SingleProduct";
import Loading from "../../utilities/Loading/Loading";

const Product = () => {
    const { isLoading, product, error } = useSelector(state => state.productReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch])
    return (
        <div className="justify-center mt-20 ">
            <h2 className="text-center lg:text-4xl drop-shadow mt-4 mb-10 font-bold">
                OUR BEST PRODUCTS
      </h2>
            {isLoading && <Loading></Loading>}
            {error && <h3>{error}</h3>}
            <div className=" px-6 lg:px-12 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-5 mb-5 grid justify-center ">
                {
                    product.map(pd => <SingleProduct key={pd._id} pd={pd}></SingleProduct>)
                }

    return (
        <div className='justify-center mt-20'>
                    <h2 className='text-center lg:text-4xl drop-shadow mt-4 mb-10 font-bold'>OUR BEST PRODUCTS</h2>
                    <div className='grid px-6 lg:px-16 grid-col-4 lg:grid-cols-5 gap-4  mt-5 mb-5 flex justify-center'>
                        <div className="card bordered rounded lg:w-60 w-72 h-80 bg-base-100 hover:scale-105 duration-500 shadow-xl">
                            <figure><img className='h-48 lg:w-60 w-72' src={p1} alt="Shoes" /></figure>
                            <h6 className=" font-bold text-xl text-dark mt-3">
                                Geans Pant for man
                        </h6>
                            <p className='text-center'> <span className='text-success  text-lg font-bold'>105$</span></p>
                            <div className="card-actions justify-center">
                                <button className='btn btn-secondary btn-sm  rounded px-12 mt-3 ' >BUY NOW</button>
                            </div>
                        </div>


                        <div className="card bordered rounded lg:w-60 w-72 h-80 hover:scale-105 duration-500 bg-base-100 shadow-xl">
                            <figure><img className='h-48 lg:w-60 w-72' src={p2} alt="Shoes" /></figure>
                            <h6 className=" font-bold text-xl text-dark mt-3">
                                Geans Pant for man
                        </h6>
                            <p className='text-center'> <span className='text-secondary  text-lg font-bold'>105$</span></p>
                            <div className="card-actions justify-center">
                                <button className='btn btn-secondary btn-sm  rounded px-12 mt-3 ' >BUY NOW</button>
                            </div>
                        </div>

                        <div className="card bordered rounded lg:w-60 w-72 h-80 hover:scale-105 duration-500 bg-base-100 shadow-xl">
                            <figure><img className='h-48 lg:w-60 w-72' src={p3} alt="Shoes" /></figure>
                            <h6 className=" font-bold text-xl text-dark mt-3">
                                Shirt for man
                        </h6>
                            <p className='text-center'> <span className='text-secondary  text-lg font-bold'>105$</span></p>
                            <div className="card-actions justify-center">
                                <button className='btn btn-secondary btn-sm  rounded px-12 mt-3 ' >BUY NOW</button>
                            </div>
                        </div>

                        <div className="card bordered rounded lg:w-60 w-72 h-80 hover:scale-105 duration-500 bg-base-100 shadow-xl">
                            <figure><img className='h-48 lg:w-60 w-72' src={p4} alt="Shoes" /></figure>
                            <h6 className=" font-bold text-xl text-dark mt-3">
                                Shirt for man
                        </h6>
                            <p className='text-center'> <span className='text-secondary  text-lg font-bold'>125$</span></p>
                            <div className="card-actions justify-center">
                                <button className='btn btn-secondary btn-sm  rounded px-12 mt-3 ' >BUY NOW</button>
                            </div>
                        </div>

                        <div className="card bordered rounded lg:w-60 w-72 h-80 hover:scale-105 duration-500 bg-base-100 shadow-xl">
                            <figure><img className='h-48 lg:w-60 w-72' src={p5} alt="Shoes" /></figure>
                            <h6 className=" font-bold text-xl text-dark mt-3">
                                Tops for Women
                        </h6>
                            <p className='text-center'> <span className='text-secondary  text-lg font-bold'>105$</span></p>
                            <div className="card-actions justify-center">
                                <button className='btn btn-secondary btn-sm  rounded px-12 mt-3 ' >BUY NOW</button>
                            </div>
                        </div>

                    </div>







                </div >
    );

      </div>
        </div>
    );

};

export default Product;
