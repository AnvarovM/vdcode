import React from 'react'

function DefaultMain() {
    return (
        <div>
            <div className="main grid place-items-center">
        <img
          className="filter blur-sm mt-24 w-[350px] hidden md:block"
          src="/img/vscode-dark.png"
          alt=""
        />
        <div className="space-y-2 py-12 hidden md:block">
            <div className="flex text-white">
            <p className="mr-2 text-gray-300">Show All Commands</p> 
            <div className="space-x-1">
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">Ctrl</span> +
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">Shift</span> +
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">P</span>   
            </div>
            </div>
            <div className="flex text-white">
            <p className="mr-2 text-gray-300">Go to file</p> 
            <div className="space-x-1">
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">Ctrl</span> +
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">P</span>
            </div>
            </div>
            <div className="flex text-white">
            <p className="mr-2 text-gray-300">Find in File</p> 
            <div className="space-x-1">
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">Ctrl</span> +
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">Shift</span> +
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">F</span>   
            </div>
            </div>
            <div className="flex text-white">
            <p className="mr-2 text-gray-300">Toggle Terminal</p> 
            <div className="space-x-1">
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">Ctrl</span> +
                <span className="px-2 py-1 rounded-sm bg-[#202225] text-sm">`</span>
            </div>
            </div>
            </div>
      </div>
        </div>
    )
}

export default DefaultMain
