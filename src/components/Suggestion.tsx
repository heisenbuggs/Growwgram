import React from "react";
import { Row } from "reactstrap";
import logo from "../assets/profile.png";
import "./Suggestion.css";

const Suggestion = () => {
  return (
    <div className="suggestionsRow">
      <div>
        <img src={logo} alt="suggestProfile" className="suggestProfile" />
        <h5 className="profileName">thereal_prasuk</h5>
        {/* <h5 className="viewFollowed">Followed by nimish, prakhar</h5> */}
      </div>
      <h5 className="suggestionsFollow">Follow</h5>
    </div>
  );
};

export default Suggestion;
