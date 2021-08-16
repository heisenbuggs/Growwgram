import "./Appbar.css";

import React from "react";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <nav className="appbar">
      <Link to="/" style={{textDecoration: 'none'}}>
        <h1 className="logo">Growwgram</h1>
      </Link>
      <div className="textInput">
        <span className="searchText">Search</span>
      </div>
      <div className="iconGroup">
        <Link to="/">
          <Icon
            icon="cil:home"
            style={{ fontSize: 24, marginRight: 12, color: "black" }}
          />
        </Link>
        <Icon
          icon="la:facebook-messenger"
          style={{ fontSize: 28, marginRight: 12 }}
        />
        <Icon
          icon="ant-design:compass-outlined"
          style={{ fontSize: 26, marginRight: 12 }}
        />
        <Icon
          icon="ant-design:heart-outlined"
          style={{ fontSize: 26, marginRight: 12 }}
        />
        <Link to="/profile">
          <Icon
            icon="carbon:user-avatar"
            style={{ fontSize: 26, marginRight: 12, color: "black" }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Appbar;
