import React, { useEffect, useState } from "react";
import { deleteCartData, getFromCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../utilities/Loading/Loading";
 
import "./AddToCart.css";
import { toast } from "react-toastify";
import { AiOutlineClose } from "react-icons/ai";
const lodash = require("lodash");
const AddToCart = () => {
  const { isLoading, product, error } = useSelector((state) => state.cartSlice);
  const productPrices = product.map((e) => parseFloat(e.price));
  const totalPrice = lodash.sum(productPrices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromCart());
  }, [dispatch]);

  const [quan, setQuan] = useState(1);

  const handleDecrease = () => {
    setQuan(quan - 1)
  }
  const handleIncrease = () => {
    setQuan(quan + 1)
  }

  const handleDelete = (id) => {
    dispatch(deleteCartData(id));
    window.location.reload();
    // toast.success('Remove Successfully')
  };
  return (
    <div className="flex justify-center">
      <div className="flex    mt-20 w-3/4  shadow-inner">
        <div className="w-3/4 p-10">
          {isLoading && <Loading></Loading>}
          {/* <div className="grid grid-cols-1 p-4 gap-5  mx-auto border ">
        {product.map((pd) => (
          <SingleCart key={pd._id} pd={pd}></SingleCart>
        ))}
      </div> */}

          <div className="overflow-x-auto ">
            <section className="flex justify-between mb-10">
              {" "}
              <h1 className="text-3xl font-bold ">Shopping Cart</h1>
              <h1 className="text-3xl font-bold ">{product.length} Items</h1>
            </section>
            <hr />

            <table className="table w-full mt-5">
              <thead>
                <tr>
                  <th className="bg-white text-gray-500	">Product Details</th>
                  <th className="bg-white "></th>
                  {/* <th className="bg-white text-gray-500	">Available</th> */}
                  <th className="bg-white text-gray-500	">Quantity</th>
                 
                  <th className="bg-white text-gray-500	">Total</th>
             
                  {/* <th className="bg-white text-gray-500	">Remove</th> */}
                </tr>
              </thead>
              <tbody>
                {product.map((pd) => (
                  <tr>
                    <th>
                      {" "}
                      <div>
                        <img className="w-20 mr-5" src={pd?.img} alt="" />
                      </div>
                    </th>
                    <td>
                      <b>{pd?.name}</b>
                    </td>
                    {/* <td>
                      <b>{pd?.quantity}</b>
                    </td> */}
                    <td>
                      <div className=" flex items-center cursor-pointer">
                        <button onClick={() => handleDecrease(pd.quantity - 1)}><ion-icon name="remove-outline"></ion-icon> &nbsp;</button>
                        <button className="border-2 p-2">{pd?.quantity}</button>

                        <button onClick={() => handleIncrease()}> &nbsp;<ion-icon name="add-outline"></ion-icon></button>
                      </div>
                    </td>
                    {/* <td>
                      $<b>{pd?.price}</b>
                    </td> */}
                    <td>
                      $<b>{pd?.quantity * pd?.price}</b>
                    </td>
                  
                    <td>
                      <AiOutlineClose   onClick={() => handleDelete(pd?._id)} className="text-xl cursor-pointer text-gray-400"></AiOutlineClose>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className=" w-1/4 p-5 bg-slate-100">
          <h1 className="font-bold text-2xl  text-left mb-10">Order Summery</h1>

          <hr />
          <div className="flex justify-between font-semibold mt-5">
            <h2>Items</h2>
            <h2>${totalPrice} </h2>
          </div>
          <div>
            <h2 className=" font-semibold uppercase text-left mt-10 mb-3">
              shipping
            </h2>
            <input
              type="text"
              placeholder="$10"
              className="input  rounded-none w-full max-w-xs"
            />
            <h2 className=" font-semibold uppercase text-left mt-10 mb-3">
              Promo Code
            </h2>
            <input
              type="text"
              placeholder="Enter your promo code here"
              className="input  rounded-none w-full max-w-xs"
            />
            <input
              type="submit"
              value="apply"
              className="btn btn-warning w-full rounded-none mt-5"
            />
          </div>
          <hr className="hr_checkout" />
          <section className=" mt-20">
            <div className="flex justify-between">
              {" "}
              <h2 className="uppercase font-bold  ">Total Amount</h2>
              <h2 className="font-bold">${totalPrice - 10}</h2>
            </div>
            <button className="btn bg-green-400 hover:bg-green-300 border-0 text-black uppercase w-full rounded-none mt-10">
              Checkout
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
