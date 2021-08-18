import "./StoryProfile.css";

import React from "react";

import profile from "../assets/profile.png";
import { post } from "../utils/FeedTypes";

type MyProps = {
  post: post;
};

const trim = (str: string) => {
  if(str.length>=11) return str.substring(0, 11);
  return str;
}

const StoryProfile = ({ post }: MyProps) => {
  return (
    <div className="profileContainer">
      <img src={post.user.profile_image.large} className="profile" alt="profile" />
      <h5 className="username">{trim(post.user.username)}</h5>
    </div>
  );
};

export default StoryProfile;
