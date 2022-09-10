import React from "react";

const CodForm = () => {
  return (
    <div className="p-3 ">
      <div class="form-control">
        <div className="flex w-full justify-between">
          <section className="w-1/2">
            <label class="label">
              <span class="label-text">First Name</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-full rounded-none"
            />
          </section>
          <section className="w-1/2">
            <label class="label">
              <span class="label-text">Last Name</span>
            </label>
            <input
              type="text"
              class="input input-bordered w-4/5 rounded-none"
            />
          </section>
        </div>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="email" class="input input-bordered rounded-none" />
        <label class="label"></label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Address</span>
        </label>
        <input type="text" class="input input-bordered rounded-none" />
        <label class="label"></label>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Contact Number</span>
        </label>
        <input type="number" class="input input-bordered rounded-none" />
        <label class="label"></label>
      </div>
      <div class="form-control mt-6">
        <button class="btn bg-indigo-500 uppercase w-full border-0 text-white rounded-none">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CodForm;
