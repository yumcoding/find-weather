import React from "react";

function Button({ showModal }) {
  return (
    <button className="btn-modal" onClick={showModal}>
      More Details
    </button>
  );
}

export default Button;
