import Die from "./Die";
import React, { useState } from "react";
import './RollDice.css'

const RollDice = () => {
  const dieArray = ["one", "two", "three", "four", "five", "six"];

  const [dieOne, setDieOne] = useState("one");
  const [dieTwo, setDieTwo] = useState("one");
  const [rolling, setRolling] = useState(false);  

  const handleRoll = () => {
    const roll = function () {
      const rando = Math.floor(Math.random() * dieArray.length);
      return dieArray[rando];
    };
    setDieOne(roll());
    setDieTwo(roll());
    setRolling(true)
    setTimeout(() => {setRolling(false)}, 1000);
  };

  return (
    <>
      <div className="RollDice">
        <div className="RollDice--title">Want to see me wobble? 🪆</div>
        <div className="RollDice--Die">
          <Die number={dieOne} rolling={rolling} />
          <Die number={dieTwo} rolling={rolling} />
        </div>
        <button onClick={handleRoll} disabled={rolling} className="RollDice--button">
            {rolling ? 'Wobble baby, wobble baby' : 'Wobble Dice'}
        </button>
      </div>
    </>
  );
};

export default RollDice;
