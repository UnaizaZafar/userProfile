import React from "react";
import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const Profile = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/0");
        const data = await res.json();
        setUserData(data);
        console.log("data", data);
      } catch (error) {
        console.log("Error Fetching Data", error);
      } 
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
         {userData && <UserProfile user={userData} />}
      </div>
    </>
  );
};

export default Profile;
