import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const Review = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const { productId } = useParams();
  //Loading specific product for review
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://limitless-everglades-36569.herokuapp.com/displayOrders")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);
  const foundProductById = product.find((p) => p._id === productId);
  const reviewerName = user?.displayName;
  const reviewerEmail = user?.email;
  const reviewerImg = user?.photoURL;
  const reviewdProductId = productId;
  const onSubmit = (data) => {
    fetch("https://limitless-everglades-36569.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.insertedId) {
          toast.success("Review Added Successfully");
        }
        console.log(result);
      });
    console.log(data);
  };
  return (
    <div className="flex justify-center mt-20 ">
      <section className="flex justify-between  w-full p-5 lg:flex-row md:flex-row sm:flex-col flex-col ">
        <div className="  lg:w-1/2 sm:w-full w-full  text-left p-3 font-semibold flex justify-center items-center mb-5">
          <div>
            <h3>
              Dear, <span className="text-green-600"> {user?.productId}</span>
            </h3>
            <h1 className="text-3xl">
              How was{" "}
              <span className="text-orange-600 font-semibolds">
                {foundProductById?.name}{" "}
              </span>
              ?
            </h1>
            <div className="mt-10 h-48 w-48 ">
              <img
                src={foundProductById?.img}
                alt="productImage"
                className="object-fill "
              />
            </div>
          </div>
        </div>
        <div className=" lg:w-1/2 sm:w-full w-full p-5">
          <div className="flex justify-center  w-full items-center ">
            <form
              className="form-control lg:w-3/4 sm:w-3/4 w-3/4   p-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-xl mt-0 w-full p-3 font-semibold text-center mb-10 bg-secondary uppercase">
                Write Review
              </h1>
              <div className="hidden">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  value={reviewerName}
                  className="textarea input-bordered  bg-slate-100 border-0"
                  {...register("name")}
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={reviewerEmail}
                  className="textarea input-bordered  bg-slate-100 border-0"
                  {...register("email")}
                />
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  value={reviewerImg}
                  className="textarea input-bordered bg-slate-100 border-0"
                  {...register("image")}
                />
                <input
                  type="text"
                  value={reviewdProductId}
                  className="textarea input-bordered bg-slate-100 border-0"
                  {...register("productId")}
                />
              </div>

              <label className="label">
                <span className="label-text">Write Your Review</span>
              </label>
              <textarea
                type="text"
                className="textarea input-bordered disabled:placeholder-black"
                placeholder="Your Review"
                {...register("review")}
              />
              <label className="label">
                <span className="label-text">Give A Rating</span>
              </label>
              <input
                type="number"
                {...register("ratings")}
                className="input input-bordered"
              />

              <input
                type="submit"
                className="btn text-white border-0 mt-5 text-xl"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
