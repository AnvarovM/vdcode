import React, { useState } from "react";
import { VscRunAll, VscSplitHorizontal } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";
import Editor from "./Editor";
import DefaultMain from "./DefaultMain";

function Main() {
  const [active, setActive] = useState(0);
  const toggleTab = (index) => {
    setActive(index);
  };

  return (
    <div className="w-full bg-gray-800 flex flex-col">
      <div className="flex items-center justify-between bg-gray-900">
        <div className="flex items-center">
          <div className="main__top  h-10 bg-gray-900 flex items-center cursor-pointer">
            <div
              onClick={() => toggleTab(1)}
              className={active === 1 ? "aciveMainBtn" : "mainBtn"}
            >
              Header.jsx
            </div>
          </div>
          <div className="main__top  h-10 bg-gray-900 flex items-center cursor-pointer">
            <div
              onClick={() => toggleTab(2)}
              className={active === 2 ? "aciveMainBtn" : "mainBtn"}
            >
              Header.jsx
            </div>
          </div>
          <div className="main__top  h-10 bg-gray-900 flex items-center cursor-pointer">
            <div
              onClick={() => toggleTab(3)}
              className={active === 3 ? "aciveMainBtn" : "mainBtn"}
            >
              Header.jsx
            </div>
          </div>
        </div>
        <div className="flex items-center text-gray-200 space-x-2 cursor-pointer pr-5">
          <FiPlay />
          <VscSplitHorizontal />
          <BsThreeDots />
        </div>
      </div>
      <DefaultMain />
    </div>
  );
}

export default Main;
