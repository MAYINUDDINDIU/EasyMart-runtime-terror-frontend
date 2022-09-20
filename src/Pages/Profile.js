import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const {
    data: allProfiles,

    refetch,
  } = useQuery("profileData", () =>
    fetch(`https://limitless-everglades-36569.herokuapp.com/users`, {}).then(
      (res) => {
        refetch();
        return res.json();
      }
    )
  );

  const selectedProfile = allProfiles?.find(
    (profile) => profile.email === user?.email
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const userProfile = {
      name: event.target.name.value,
      email: event.target.email.value,
      location: event.target.location.value,
      phone: event.target.phone.value,
    };

    fetch(
      `https://limitless-everglades-36569.herokuapp.com/users/${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userProfile),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    refetch();

    console.log(userProfile);
  };
  return (
    <section className="flex justify-around items-center w-full lg:flex-row md:flex-row sm:flex-col flex-col">
      <div className="card lg:w-1/4 md:w-1/2 sm:w-full w-full bg-base-100 shadow-xl">
        <div className=" flex justify-center  p-3">
          <img
            src={user?.photoURL}
            alt="ProfilePic"
            className=" object-cover   h-48 w-96  "
          />
        </div>
        <div className="card-body items-left  text-left text-black">
          <h2 className="card-title ">
            <span className="text-blue-500">{user?.displayName}</span>
          </h2>
          <span className="flex items-center">
            <ion-icon name="mail-outline"></ion-icon>&nbsp;Email:{" "}
            <p className="text-green-500 font-semibold ml-3">{user?.email}</p>
          </span>

          <span className="flex items-center">
            <ion-icon name="location-outline"></ion-icon>&nbsp;Location:{" "}
            <p className="text-gray-500 font-semibold ml-3">
              {selectedProfile?.location}
            </p>
          </span>
          <span className="flex items-center">
            <ion-icon name="call-outline"></ion-icon>&nbsp;Phone:{" "}
            <p className="text-gray-500 font-semibold ml-3">
              {selectedProfile?.phone}
            </p>
          </span>
        </div>
      </div>
      <div className="mt-20  lg:w-1/2 md:w-1/2 sm:w-full w-full">
        <section className="flex justify-center p-3">
          <div className="card w-96 bg-base-100 shadow-xl">
            <h1 className="text-3xl mb-10 text-black bg-secondary p-3">
              My Profile
            </h1>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  className="input input-bordered w-full disabled:text-black"
                  value={user?.displayName}
                  name="name"
                  disabled
                />
                <br />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full disabled:text-black"
                  name="email"
                  value={user?.email}
                  disabled
                />

                <br />
                <label className="label">
                  <span className="label-text ">Location</span>
                </label>
                <input
                  name="location"
                  className="input input-bordered w-full text-black"
                />
                <br />
                <label className="label">
                  <span className="label-text ">Phone Number</span>
                </label>
                <input
                  name="phone"
                  className="input input-bordered w-full text-black"
                />
                <br />

                <input
                  type="submit"
                  className="btn bg-green-600 hover:bg-green-400 w-full mt-10 text-2xl text-white border-0"
                  value="Update Profile"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Profile;
