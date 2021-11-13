import React from "react";
import styled from "styled-components";
import { SiVisualstudiocode } from "react-icons/si";
import { FaRegWindowMinimize } from "react-icons/fa";
import { BsTextareaResize, BsThreeDots } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { VscChromeRestore } from "react-icons/vsc"

function Header() {
  return (
    <Container className="bg-gray-800 h-16 text-white px-3 shadow-lg ">
      <div className="flex justify-between items-cente pt-2">
        <div className="flex items-center">
          <SiVisualstudiocode className="text-blue-600" />
        </div>
        <div className="">Anvarov's vscode clone</div>
        <div className="flex">
          <FaRegWindowMinimize className="mx-1 w-2.5 cursor-pointer" />
          <VscChromeRestore className="mx-1 cursor-pointer" />
          <MdClose className="mx-1 cursor-pointer rounded-full hover:bg-red-500" />
        </div>
      </div>
      <div className="header__p flex items-center">
        <a className="mr-4 cursor-not-allowed">File</a>
        <a className="mr-4 cursor-not-allowed">Edit</a>
        <a className="mr-4 cursor-not-allowed">Selection</a>
        <a className="mr-4 cursor-not-allowed">View</a>
        <a className="phone__none sm:block mr-4 cursor-not-allowed">Go</a>
        <a className="phone__none sm:block mr-4 cursor-not-allowed">Run</a>
        <a className="phone__none sm:block mr-4 cursor-not-allowed">Terminal</a>
        <a className="phone__none sm:block mr-4 cursor-not-allowed">Help</a>
        <a>
          <BsThreeDots className="three__dots sm:hidden" />
        </a>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  @media (max-width: 556px) {
    .header__p .phone__none {
      display: none;
    }

    .three__dots {
      display: block;
    }
  }
`;
