import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import { BsAppIndicator } from "react-icons/bs";
import { GrScorecard } from "react-icons/gr";
import { MdOutlineAddAlert, MdOutlinePermPhoneMsg } from "react-icons/md";

const SideBar = () => {
  return (
    <>
      <h2>tradeverse</h2>
      {/* left side menu bar use
      react-icons package for icons */}
      <p style={{ color: "gray" }}>Main Menu</p> 
      <div>
        <FaRegNewspaper />
        <p>news quant</p>
      </div>
      <div>
        <BsAppIndicator />
        <p>Real Economic Indicator</p>
      </div>
      <div>
        <GrScorecard />
        <p>one score</p>
      </div>
      <div>
        <MdOutlineAddAlert />
        <p>alert central</p>
      </div>
      <div>
        <MdOutlinePermPhoneMsg />
        <p>customer support</p>
      </div>
    </>
  );
};

export default SideBar;
