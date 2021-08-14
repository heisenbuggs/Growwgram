import './Appbar.css';

import React from 'react';

import { Icon } from '@iconify/react';

const Appbar = () => {
  return (
    <nav className="appbar">
      <h1 className="logo">Growwgram</h1>
      <div className="textInput">
        <span className="searchText">Search</span>
      </div>
      <div className="iconGroup">
        <Icon icon="cil:home" style={{ fontSize: 24, marginRight: 12 }} />
        <Icon icon="la:facebook-messenger" style={{ fontSize: 28, marginRight: 12 }} />
        <Icon icon="ant-design:compass-outlined" style={{ fontSize: 26, marginRight: 12 }} />
        <Icon icon="ant-design:heart-outlined" style={{ fontSize: 26, marginRight: 12 }} />
        <Icon icon="carbon:user-avatar" style={{ fontSize: 26, marginRight: 12 }} />
      </div>
    </nav>
  );
};

export default Appbar;
