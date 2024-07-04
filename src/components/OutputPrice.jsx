import React from "react";

const OutputPrice = ({ bill, tip, total }) => {
  return (
    <h3>
      Płacisz {total} (${bill} + ${tip} tip)
    </h3>
  );
};

export default OutputPrice;
