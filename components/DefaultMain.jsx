import React from "react";

function DefaultMain() {
  return (
    <div>
        {/* breadcrumb */}
       <div className="bg-[#273344] w-full h-6 px-2 md:px-5 text-gray-500 flex items-center space-x-2">
            <p>my-app</p>
            <span className="text-sm mt-0.5 font-thin">ᐳ</span>
            <p>components</p>
            <span className="text-sm mt-0.5 font-thin">ᐳ</span>
            <p>Index.jsx</p>
       </div>
      <div className="main grid place-items-center">
        <img
          className="filter blur-[2px] brightness-150 mt-24 mr-10 w-[300px] hidden md:block"
          src="/img/vscode-dark.png"
          alt=""
        />
        <div className="space-y-2 py-12 hidden md:block">
          <div className="flex text-white">
            <p className="mr-2 text-gray-300">Show All Commands</p>
            <div className="space-x-1">
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                Ctrl
              </span>{" "}
              +
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                Shift
              </span>{" "}
              +
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                P
              </span>
            </div>
          </div>
          <div className="flex text-white">
            <p className="mr-2 text-gray-300">Go to file</p>
            <div className="space-x-1">
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                Ctrl
              </span>{" "}
              +
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                P
              </span>
            </div>
          </div>
          <div className="flex text-white">
            <p className="mr-2 text-gray-300">Find in File</p>
            <div className="space-x-1">
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                Ctrl
              </span>{" "}
              +
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                Shift
              </span>{" "}
              +
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                F
              </span>
            </div>
          </div>
          <div className="flex text-white">
            <p className="mr-2 text-gray-300">Toggle Terminal</p>
            <div className="space-x-1">
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                Ctrl
              </span>{" "}
              +
              <span className="px-2 py-1 rounded-sm bg-gray-700 text-sm">
                `
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultMain;
