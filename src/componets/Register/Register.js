import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen mt-20">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs"
        >
          {" "}
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-left"
            for="username"
          >
            Username
          </label>
          <input
            {...register("firstName", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
          />
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-left mt-4"
            for="username"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
          />
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-left mt-4"
            for="username"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("password", { required: true })}
          />
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-left mt-4"
            for="username"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("cpassword", { required: true })}
          />
          <div class="flex items-center justify-between mt-10">
            <button
              class="bg-[#005cb2] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
              type="submit"
            >
              Register
            </button>
            <Link
              class="inline-block align-baseline font-bold text-sm text-[#005cb2] hover:text-blue-500"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
          <p class=" font-bold text-sm text-left mt-10" to="/login">
            Already have an account?
            <Link to="/login" className="text-[#005cb2] mx-3 uppercase">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
