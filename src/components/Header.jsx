import React from "react";

const Header = () => {
  return (
    <div className="w-full fixed flex justify-between ">
      <button className="w-15 h-15 m-3">
        <img src="square.svg" alt="" />
      </button>
      <button className="w-15 h-15 bg-amber-300 text-white rounded-full m-3">
        <img className="float-none w-10 h-10 m-2.5" src="User_01.png" alt="" />
      </button>
    </div>
  );
};

export default Header;
