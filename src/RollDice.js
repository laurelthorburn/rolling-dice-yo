import Die from "./Die";
import React, { useState, useEffect } from "react";
import './RollDice.css'

const RollDice = () => {
  const dieArray = ["one", "two", "three", "four", "five", "six"];

  const [dieOne, setDieOne] = useState("");
  const [dieTwo, setDieTwo] = useState("");  

  const handleRoll = () => {
    const roll = function () {
      const rando = Math.floor(Math.random() * dieArray.length);
      return dieArray[rando];
    };
    setDieOne(roll());
    setDieTwo(roll());
  };

  return (
    <>
      <div className="RollDice">
        <div className="RollDice--Die">
          <Die number={dieOne} />
          <Die number={dieTwo} />
        </div>
        <button onClick={handleRoll}>Roll Die!</button>
      </div>
    </>
  );
};

export default RollDice;
