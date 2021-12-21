import React from "react";

function GithubMain() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="bg-[#273344] w-full h-6 md:px-5 text-gray-500 flex items-center space-x-2">
        <p>my-app</p>
        <span className="text-sm mt-0.5 font-thin">ᐳ</span>
        <p>components</p>
        <span className="text-sm mt-0.5 font-thin">ᐳ</span>
        <p>GitHub.jsx</p>
      </div>
    </div>
  );
}

export default GithubMain;
