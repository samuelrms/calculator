import React from "react";
import { Numebers, Operators } from "../Mooks/Value";

const Buttons = () => {
  return (
    <div>
      {Operators.map((operator) => (
        <button value={operator} key={operator} onClick={(e) => e.target.value}>
          {operator}
        </button>
      ))}
      {Numebers.map((number) => (
        <button value={number} key={number} onClick={(e) => e.target.value}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
