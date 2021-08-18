import React from "react";
import { post } from "../utils/FeedTypes";
import "./Suggestion.css";

type MyProps = {
  post: post;
};

const Suggestion = ({post}: MyProps) => {
  return (
    <div className="suggestionsRow">
      <div>
        <img src={post.user.profile_image.large} alt="suggestProfile" className="suggestProfile" />
        <h5 className="profileName">{post.user.username}</h5>
      </div>
      <h5 className="suggestionsFollow">Follow</h5>
    </div>
  );
};

export default Suggestion;
