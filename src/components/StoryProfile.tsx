import "./StoryProfile.css";

import React from "react";

import profile from "../assets/profile.png";
import { post } from "../utils/FeedTypes";

type MyProps = {
  post: post;
};

const StoryProfile = ({ post }: MyProps) => {
  return (
    <div className="profileContainer">
      <img src={post.user.profile_image.large} className="profile" alt="profile" />
      <h5 className="username">{post.user.username}</h5>
    </div>
  );
};

export default StoryProfile;
