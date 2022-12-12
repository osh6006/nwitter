import React from "react";
import { authService } from "../firebase";

const Profile = () => {
  const onLogOutClick = () => {
    authService.signOut();
  };
  return (
    <>
      <button onClick={onLogOutClick}>LogOut</button>
    </>
  );
};

export default Profile;
