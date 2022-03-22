import Die from "./Die";
import React, { useState } from "react";

const RollDie = () => {
  const dieArray = ["one", "two", "three", "four", "five", "six"];

  let rando1 = Math.floor(Math.random() * 5)
  let rando2 = Math.floor(Math.random() * 5)

  console.log(dieArray[rando1])

  return (
    <>
      I contain the die
      {/* <Die number={dieArray[rando1]} />
      <Die number={dieArray[rando2]} /> */}
    </>
  );
};

export default RollDie;
