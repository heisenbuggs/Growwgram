import React from "react";
import Loader from "react-loader-spinner";
import "./Appbar.css";

const LoaderAsset = () => {
  return (
    <div className="loaderSpin">
      <Loader
        type="Oval"
        color="#8e8e8e"
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
};

export default LoaderAsset;
