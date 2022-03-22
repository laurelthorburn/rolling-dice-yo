import Die from "./Die";
import React, { useState } from "react";

const RollDie = () => {
  const dieArray = ["one", "two", "three", "four", "five", "six"];
  return (
    <>
      I contain the die
      <Die />
      <Die />
    </>
  );
};

export default RollDie;
