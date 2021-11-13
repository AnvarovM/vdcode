import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  VscChevronDown,
  VscChevronRight,
  VscNewFile,
  VscNewFolder,
  VscRefresh,
  VscCollapseAll,
  VscJson,
} from "react-icons/vsc";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";

function SidebarEx({openEx}) {
  return (
    <div className={openEx ? "sidebarEx w-64 bg-gray-900 cursor-pointer border-r border-gray-600 " : "hidden"}>
      <div className="px-4 py-2 text-gray-500 flex items-center justify-between">
        <h5 className="uppercase text-sm">Extentions</h5>
        <BsThreeDots className="cursor-pointer w-6 h-6 p-1 rounded-md hover:bg-gray-300 hover:bg-opacity-10 transition-all duration-100 ease-out" />
      </div>

                                                                                        
    </div>
  );
}

export default SidebarEx;
