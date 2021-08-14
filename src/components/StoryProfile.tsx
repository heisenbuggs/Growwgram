import React from "react";
import profile from "../assets/profile.png";
import "./StoryProfile.css";

const StoryProfile = () => {
  return (
    <div className="profileContainer">
      <img src={profile} className="profile" alt="profile" />
      <h5 className="username">thereal_prasuk</h5>
    </div>
  );
};

export default StoryProfile;
