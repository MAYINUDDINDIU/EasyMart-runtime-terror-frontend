import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { createProduct } from "../../features/productSlice";
import "./Allcaetgory.css";
const Allcaetgory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //For selection
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "men", text: "Men" },
    { value: "women", text: "Women" },
    { value: "kids", text: "Kids" },
  ];
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const posts = {
      catagory: selected,
      name: e.target.name.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      img: e.target.url.value,
    };
    // setValue(posts);
    dispatch(createProduct(posts));
    navigate("/dashboard", { replace: true });
  };
  return (
    // <div className="drawer">
    //     <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //     <div className="drawer-content flex flex-col">
    //         <div className="w-8/12 mx-auto navbar bg-base-300">
    //             <div className="flex-none lg:hidden">
    //                 <label for="my-drawer-3" className="btn btn-square btn-ghost">
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    //                 </label>
    //             </div>
    //             <div className="flex-none w-full hidden lg:block">
    //                 <ul className="menu menu-horizontal">
    //                     <button className='btn btn-primary text-white font-bold'><li><Link to='/dashboard/allcategory'>Men's Item</Link></li></button>
    //                     <button className='btn btn-secondary mx-6 text-white font-bold'><li><Link to='/dashboard/allcategory/womensitem'>Women's Item</Link></li></button>
    //                     <button className='btn text-white font-bold'><li><Link to='/dashboard/allcategory/kidsItem'>Kid's Item</Link></li></button>
    //                 </ul>
    //             </div>
    //         </div>
    //         <Outlet></Outlet>
    //     </div>
    //     <div className="drawer-side">
    //         <label for="my-drawer-3" className="drawer-overlay"></label>
    //         <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
    //             <button className='btn btn-primary text-white font-bold'><li><Link to='/dashboard/allcategory'>Men's Item</Link></li></button>
    //             <button className='btn btn-secondary mx-6 my-4 md:my-0 text-white font-bold'><li><Link to='/dashboard/allcategory/womensitem'>Women's Item</Link></li></button>
    //             <button className='btn text-white font-bold'><li><Link to='/dashboard/allcategory/kidsItem'>Kid's Item</Link></li></button>
    //         </ul>

    //     </div>
    // </div>
    <div class="hero min-h-screen bg-base-200 flex justify-center items-start py-20">
      <div class="hero-content flex-col lg:flex-row items-start">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Add Products</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-black"
          onSubmit={handleSubmit}
        >
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Product's Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Product's Image</span>
              </label>
              <input
                name="url"
                type="text"
                placeholder="Image"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Which Catagory you want to add?</span>
              </label>
              <div class="input-group text-black">
                <select
                  value={selected}
                  onChange={handleChange}
                  className="select select-bordered w-full text-black"
                >
                  {options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="text-black"
                    >
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text ">Price</span>
              </label>
              <input
                name="price"
                type="text"
                placeholder="Price"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>
              <input
                name="quantity"
                type="text"
                placeholder="Quantity"
                class="input input-bordered text-black"
              />
            </div>

            <div class="form-control mt-6">
              <button
                class="btn bg-secondary text-black font-bold border-0 hover:bg-primary"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Allcaetgory;
