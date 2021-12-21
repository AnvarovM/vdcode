import React, { useState } from "react";
// react icons
import { VscSplitHorizontal } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { FiPlay } from "react-icons/fi";
// next.js router
import Link from 'next/link'

function Main() {
  // active button useState
  const [active, setActive] = useState(0);
  const toggleTab = (index) => {
    setActive(index);
  };

  return (
    <div className="w-full bg-gray-800 flex flex-col">
      <div className="flex items-center justify-between bg-gray-900 overflow-x-scroll md:overflow-hidden">
        <div className="flex items-center">
          <div className="main__top hidden h-10 bg-gray-900 lg:inline-flex items-center cursor-pointer">
              <Link href="/">
                <a
                  onClick={() => toggleTab(0)}
                  className={active === 0 ? "activeMainBtn" : "mainBtn"}
                >
                  Get started
                </a>
              </Link>
            </div>
            <div className="main__top  h-10 bg-gray-900 flex items-center cursor-pointer">
              <Link href="/about">
                <a
                  onClick={() => toggleTab(2)}
                  className={active === 2 ? "activeMainBtn" : "mainBtn"}
                >
                  About.jsx
                </a>
              </Link>
            </div>
            <div className="main__top  h-10 bg-gray-900 flex items-center cursor-pointer">
             <Link href="/projects">
              <a
                  onClick={() => toggleTab(3)}
                  className={active === 3 ? "activeMainBtn" : "mainBtn"}
                >
                  Projects.jsx
                </a>
             </Link>
            </div>
            <div className="main__top  h-10 bg-gray-900 flex items-center cursor-pointer">
              <Link href="/contact">
                <a
                  onClick={() => toggleTab(4)}
                  className={active === 4 ? "activeMainBtn" : "mainBtn"}
                >
                  Contact.jsx
                </a>
              </Link>
            </div>
            <div className="main__top hidden h-10 bg-gray-900 lg:inline-flex items-center cursor-pointer">
              <Link href="/github">
                <a
                  onClick={() => toggleTab(5)}
                  className={active === 5 ? "activeMainBtn" : "mainBtn"}
                >
                  GitHub.jsx
                </a>
              </Link>
            </div>
        </div>
        <div className="flex items-center text-gray-200 space-x-2 cursor-pointer pr-5">
          <FiPlay className="hidden md:block" />
          <VscSplitHorizontal className="hidden md:block" />
          <BsThreeDots className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}

export default Main;
