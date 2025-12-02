import React from "react";
import "../assets/scss/Loading.scss";
import loading from "../assets/img/loading.gif";

interface LoadingProps {
  show: boolean;
}

const Loading: React.FC<LoadingProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="loading-overlay">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;
