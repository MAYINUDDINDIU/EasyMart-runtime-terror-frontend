import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const reviewerName = user?.displayName;
  const reviewerEmail = user?.email;
  const reviewerImg = user?.photoURL;
  const onSubmit = (data) => {
    fetch("https://rocky-sierra-92602.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
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
  };
  return (
    <div className="flex justify-center mt-20 ">
      <div className=" w-full p-5">
        <div className="flex justify-center  w-full items-center ">
          <form
            className="form-control lg:w-1/4 sm:w-3/4 w-3/4 shadow-xl p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-3xl text-left text-blue-500 mb-10">
              Review Us
            </h1>

            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              value={reviewerName}
              className="textarea input-bordered disabled:placeholder-black bg-slate-100"
              disabled
              {...register("name")}
            />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={reviewerEmail}
              className="textarea input-bordered disabled:placeholder-black bg-slate-100"
              {...register("email")}
              disabled
            />

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
              className="btn bg-secondary text-black hover:bg-green-400 border-0 mt-5 text-xl"
              value="ADD REVIEW"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
