import React from "react";

const SelectPercentage = ({ children, percentage, onSelect }) => {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Niezadowolenie (0%)</option>
        <option value="5">OK (5%)</option>
        <option value="10">Dobrze (10%)</option>
        <option value="20">Wspaniale (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
