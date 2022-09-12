import React from "react";

const CodForm = () => {
  return (
    <div className="p-3 ">
      <div className="form-control">
        <div className="flex w-full justify-between">
          <section className="w-1/2">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full rounded-none"
            />
          </section>
          <section className="w-1/2">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-4/5 rounded-none"
            />
          </section>
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" className="input input-bordered rounded-none" />
        <label className="label"></label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <input type="text" className="input input-bordered rounded-none" />
        <label className="label"></label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Contact Number</span>
        </label>
        <input type="number" className="input input-bordered rounded-none" />
        <label className="label"></label>
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-indigo-500 uppercase w-full border-0 text-white rounded-none">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CodForm;
