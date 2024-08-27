import React from "react";
import { FaRegEdit } from "react-icons/fa";
const UserProfile = ({ user }) => {
  const preferenceGroup = user.preference_group;
//   const preference = preferenceGroup.group_preference;
  console.log('user=',user)

  return (
    <div className="bg-gray-700 bg-opacity-80 text-white shadow-md w-max flex flex-col gap-3 rounded-xl p-6">
      <div className="flex gap-4 justify-around">
        <div className="flex items-center">
          <img
            src={user.profile_picture}
            style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            alt=""
          />

          {/* <FaRegUser className="text-7xl" /> */}
        </div>
        <div className="flex flex-col gap-1 justify-start">
          <h1 className="font-bold text-xl"> {user.username}</h1>
          <p className="text-base">
            <span className=" text-sm font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-base">
            <span className=" text-sm font-semibold">Country:</span>
            {user.country}
          </p>
          <p className="text-base">
            {" "}
            <span className=" text-sm font-semibold">DOB:</span> {user.dob}
          </p>
          <p className="text-base">{user.subscription}</p>
        </div>

        <button className="ml-9">
          {" "}
          <FaRegEdit />
        </button>
      </div>
      <hr />
      <div className="flex gap-4 justify-between">
        <h1 className="text-lg font-bold p-2">Device</h1>
        <div>
          <p className="font-semibold italic">Device Id </p>
          <p>{user.device_id}</p>
        </div>
        <div>
          <p className="font-semibold italic">Device Name </p>
          <p> {user.device_name}</p>
        </div>
      </div>
      <hr />

      {/* <div className="flex gap-4 justify-between">
        <h1 className="text-lg font-bold p-2">Group</h1>

        {preferenceGroup.map((group) => {
          <div>
            <p className="font-semibold italic">Name </p>
            <p>{group.group_name}</p>
          </div>;
          <div>
            <p className="font-semibold italic">Description </p>
            <p> {group.group_description}</p>
          </div>;
        })}

        {preference.map((pref) => {
          <div className="flex flex-col">
            <p className="font-semibold italic">Preference </p>

            <p> {preference.preference_name}</p>
            <p> {preference.preference_value}</p>
            <p> {preference.preference_description}</p>
          </div>;
        })}
      </div> */}
    </div>
  );
};

export default UserProfile;
