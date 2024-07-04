import React, { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import OutputPrice from "./OutputPrice";
import Reset from "./Reset";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [percentageOne, setPercenrtageOne] = useState(0);
  const [percentageTwo, setPercenrtageTwo] = useState(0);

  const tip = bill * ((percentageOne + percentageTwo) / 2 / 100).toFixed(2);
  const total = bill + tip;

  const handleReset = () => {
    setBill("");
    setPercenrtageOne(0);
    setPercenrtageTwo(0);
  };

  return (
    <div>
      <BillInput
        bill={bill}
        onSetBill={setBill}
      />
      <SelectPercentage
        percentage={percentageOne}
        onSelect={setPercenrtageOne}
      >
        Jak podobała Ci się obsługa?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentageTwo}
        onSelect={setPercenrtageTwo}
      >
        Jak podobała się obsługa Twoim znajomym?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <OutputPrice
            bill={bill}
            tip={tip}
            total={total}
          />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
};

export default TipCalculator;
