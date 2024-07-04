import React from "react";

const BillInput = ({ bill, onSetBill }) => {
  return (
    <div>
      <label>Cena rachunku ?</label>
      <input
        type="text"
        placeholder="Cena"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;
