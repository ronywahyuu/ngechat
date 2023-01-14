import React from "react";
import "../assets/spin.css";

const ButtonLoading = () => {
  return (
    <div>
      <button type="button" className="button button--loading">
        <span className="button__text">Save</span>
      </button>
    </div>
  );
};

export default ButtonLoading;
