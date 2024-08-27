import React from "react";
import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const apiURL="http://localhost:8000/0"
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        console.log("data", data);
        setUserData(data);
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
