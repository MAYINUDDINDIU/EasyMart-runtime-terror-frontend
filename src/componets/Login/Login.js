import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../utilities/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    console.log(data);
  };

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  let displayError;
  if (error) {
    displayError = <p className="text-red-500">{error?.message}</p>;
  }
  return (
    <div className="h-screen mt-20">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs"
        >
          {displayError}
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-left mt-4"
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
            className="block text-gray-700 text-sm font-bold mb-2 text-left mt-4"
            for="username"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("password", { required: true })}
          />

          <div className="flex items-center justify-between mt-10">
            <button
              className="bg-secondary hover:bg-green-400 text-neutral font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
              type="submit"
            >
              login
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-green-400"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
          <p className=" font-bold text-sm text-left mt-10" to="/login">
            Don't have an account?
            <Link to="/register" className="text-green-400 mx-3 uppercase">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
