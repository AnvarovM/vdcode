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
import Link from "next/link";

function SidebarSec({ open, setOpen }) {
  const [activeDrpd, setActiveDrpd] = useState(false);
  const [activeMy_app, setActiveMy_app] = useState(false);
  const [activeSrc, setActiveSrc] = useState(false);

  return (
    <div
      className={
        open
          ? "w-64 bg-gray-900 cursor-pointer border-r border-gray-600"
          : "hidden"
      }
    >
      <div className="px-4 py-2 text-gray-500 flex items-center justify-between">
        <h5 className="uppercase text-sm">Explorer</h5>
        <BsThreeDots className="cursor-pointer w-6 h-6 p-1 rounded-md hover:bg-gray-300 hover:bg-opacity-10 transition-all duration-100 ease-out" />
      </div>

      <div className="dropdawn">
        <button className="dropdawn__btn flex items-center pl-1 py-1 ml-1 ">
          <div
            className="flex items-center space-x-1"
            onClick={(e) => setActiveDrpd(!activeDrpd)}
          >
            <VscChevronRight className="text-gray-500" />
            <h5 className="text-gray-500 text-sm uppercase">Vscode</h5>
          </div>
          <div className="flex items-center space-x-2 text-gray-500 pl-6">
            <VscNewFile />
            <VscNewFolder />
            <VscRefresh />
            <VscCollapseAll onClick={() => setActiveSrc(!activeSrc)} />
          </div>
        </button>

        {activeDrpd && (
          <div className="dropdawn__content">
            <div className="dropdawn__item">
              {/* my-app folder */}
              <div
                className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 py-1"
                onClick={(e) => setActiveMy_app(!activeMy_app)}
              >
                <div className="flex items-center space-x-1 ">
                  <VscChevronDown />
                  <AiFillFolderOpen />
                  <span className="text-blue-500">my-app</span>
                </div>
                <div className="w-2.5 h-2.5 bg-blue-500 bg-opacity-25 rounded-full" />
              </div>

              {activeMy_app && (
                <div className="dropdawn__content">
                  <div className="dropdawn__item">
                    {/* node_module folder */}
                    <div className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 pl-6 py-1">
                      <div className="flex items-center space-x-1 ">
                        <VscChevronRight />
                        <AiFillFolder className="text-green-500" />
                        <span className="text-gray-500 text-opacity-50">
                          node_modules
                        </span>
                      </div>
                    </div>

                    {/* public folder */}
                    <div className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 pl-6 py-1">
                      <div className="flex items-center space-x-1 ">
                        <VscChevronRight />
                        <AiFillFolder className="text-blue-700" />
                        <span>public</span>
                      </div>
                      <div className="w-2.5 h-2.5 bg-blue-500 bg-opacity-25 rounded-full" />
                    </div>

                    {/* src folder */}
                    <div
                      className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 pl-6 py-1"
                      onClick={(e) => setActiveSrc(!activeSrc)}
                    >
                      <div className="flex items-center space-x-1 ">
                        <VscChevronDown />
                        <AiFillFolderOpen className="text-green-500" />
                        <span className="text-blue-500">src</span>
                      </div>
                      <div className="w-2.5 h-2.5 bg-green-500 bg-opacity-25 rounded-full" />
                    </div>

                    {activeSrc && (
                      <div className="dropdawn__content">
                        <div className="dropdawn__item">
                          {/* Header folder */}
                          <div className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 pl-10 py-1">
                            <Link href="/about">
                              <a className="flex items-center space-x-1 ">
                                <RiReactjsLine className="text-blue-500" />
                                <span className="text-green-500">
                                  About.jsx
                                </span>
                              </a>
                            </Link>
                            <p className="text-blue-500"> U </p>
                          </div>

                          {/* Main folder */}
                          <div className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 pl-10 py-1">
                            <Link href="/projects">
                              <a className="flex items-center space-x-1 ">
                                <RiReactjsLine className="text-blue-500" />
                                <span className="text-green-500">
                                  Projects.jsx
                                </span>
                              </a>
                            </Link>
                            <p className="text-blue-500"> U </p>
                          </div>

                          {/* Footer folder */}
                          <div className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 pl-10 py-1">
                            <Link href="/contact">
                              <a className="flex items-center space-x-1 ">
                                <RiReactjsLine className="text-blue-400" />
                                <span className="text-green-500">
                                  Contact.jsx
                                </span>
                              </a>
                            </Link>
                            <p className="text-blue-500"> U </p>
                          </div>

                          {/* Footer folder */}
                          <div className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 pl-10 py-1">
                            <Link href="/github">
                              <a className="flex items-center space-x-1 ">
                                <RiReactjsLine className="text-blue-400" />
                                <span className="text-green-500">
                                  GitHub.jsx
                                </span>
                              </a>
                            </Link>
                            <p className="text-blue-500"> U </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* package-json file */}
                    <div className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 pl-6 py-1">
                      <div className="flex items-center space-x-1 ">
                        <VscJson className="text-yellow-200" />
                        <span className="text-blue-500">package-lock.json</span>
                      </div>
                      <p className="text-blue-500"> M </p>
                    </div>

                    {/* package-json file */}
                    <div className="flex items-center justify-between text-gray-500 hover:bg-gray-600 hover:bg-opacity-10 px-4 pl-6 py-1">
                      <div className="flex items-center space-x-1 ">
                        <VscJson className="text-yellow-200" />
                        <span className="text-blue-500">package.json</span>
                      </div>
                      <p className="text-blue-500"> M </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SidebarSec;
