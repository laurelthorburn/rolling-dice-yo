import Die from "./Die";
import React, { useState } from "react";

const RollDie = () => {
  const dieArray = ["one", "two", "three", "four", "five", "six"];

const roll = function(){
    const rando = Math.floor(Math.random() * dieArray.length);
    return dieArray[rando];
} 


  return (
    <>
      <Die number={roll()} />
      <Die number={roll()} />
    </>
  );
};

export default RollDie;
