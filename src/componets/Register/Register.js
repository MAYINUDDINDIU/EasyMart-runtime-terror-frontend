import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../utilities/Loading/Loading";
import { useUpdateProfile } from "react-firebase-hooks/auth";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const [updateProfile, updating, error_update] = useUpdateProfile(auth);
  const addUser = (email, currentUser) => {
    fetch(`https://limitless-everglades-36569.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const photo = data.photo;
    const email = data.email;
    const password = data.password;
    const cpassword = data.cpassword;
    if (password === cpassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name, photoURL: photo });
    } else {
      setPasswordMatchError(
        <p className="text-red-500  mt-3">Passwords didn't match, try again</p>
      );
      console.log(data);
    }
    if (user) {
      const currentUser = { email: user?.user?.email };
      addUser(user?.user?.email, currentUser);

      console.log(user?.user?.email);
      navigate("/");
    }

    if (loading) {
      return <Loading></Loading>;
    }
  };
  let displayError;
  if (error) {
    displayError = <p className="text-red-500">{error?.message}</p>;
  }
  return (
    <div className="h-screen mt-20 ">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs"
        >
          {displayError}{" "}
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-left"
            for="username"
          >
            Username
          </label>
          <input
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
          />
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
            Profile Photo URL
          </label>
          <input
            {...register("photo", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Add profile photo URL"
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-left mt-4"
            for="username"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("cpassword", { required: true })}
          />
          {passwordMatchError}
          <div className="flex items-center justify-between mt-10">
            <button
              className="bg-secondary hover:bg-green-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
              type="submit"
            >
              Register
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-green-400"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
          <p className=" font-bold text-sm text-left mt-10" to="/login">
            Already have an account?
            <Link to="/login" className="text-green-400 mx-3 uppercase">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
