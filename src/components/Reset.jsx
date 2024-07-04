import React from "react";

const Reset = ({ onReset }) => {
  return (
    <button
      type="button"
      onClick={onReset}
    >
      Reset
    </button>
  );
};

export default Reset;
