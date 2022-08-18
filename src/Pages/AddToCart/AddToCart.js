import React, { useEffect } from "react";
import { getFromCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../utilities/Loading/Loading";
import "./AddToCart.css";
const lodash = require("lodash");
const AddToCart = () => {
  const { isLoading, product, error } = useSelector((state) => state.cartSlice);
  const productPrices = product.map((e) => parseFloat(e.price));
  const totalPrice = lodash.sum(productPrices);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromCart());
  }, [dispatch]);
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

          <div class="overflow-x-auto ">
            <section className="flex justify-between mb-10">
              {" "}
              <h1 className="text-3xl font-bold ">Shopping Cart</h1>
              <h1 className="text-3xl font-bold ">{product.length} Items</h1>
            </section>
            <hr />

            <table class="table w-full mt-5">
              <thead>
                <tr>
                  <th className="bg-white text-gray-500	">Product Details</th>
                  <th className="bg-white "></th>
                  <th className="bg-white text-gray-500	">Quantity</th>
                  <th className="bg-white text-gray-500	">Price</th>
                  <th className="bg-white text-gray-500	">Total</th>
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
                    <td>
                      <div className=" flex items-center cursor-pointer">
                        <ion-icon name="add-outline"></ion-icon> &nbsp;
                        <input
                          type="text"
                          class="input  max-w-xs input-bordered w-1/5"
                          value={pd?.quantity}
                        />
                        &nbsp;
                        <ion-icon name="remove-outline"></ion-icon>
                      </div>
                    </td>
                    <td>
                      $<b>{pd?.price}</b>
                    </td>
                    <td>
                      $<b>{pd?.quantity * pd?.price}</b>
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
              class="input  rounded-none w-full max-w-xs"
            />
            <h2 className=" font-semibold uppercase text-left mt-10 mb-3">
              Promo Code
            </h2>
            <input
              type="text"
              placeholder="Enter your promo code here"
              class="input  rounded-none w-full max-w-xs"
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
