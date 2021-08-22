import "./StoryProfile.css";

import React from "react";
import { post } from "../utils/FeedTypes";
import { useHistory } from "react-router-dom";

type MyProps = {
  post: post;
};

const trim = (str: string) => {
  if(str.length>=11) return str.substring(0, 11);
  return str;
}

const StoryProfile = ({ post }: MyProps) => {
  let history = useHistory();
  return (
    <div className="profileContainer">
      <img src={post.user.profile_image.large} className="profile" alt="profile" />
      <h5 className="username" onClick={() => history.push("/"+post.user.username)}>{trim(post.user.username)}</h5>
    </div>
  );
};

export default StoryProfile;
