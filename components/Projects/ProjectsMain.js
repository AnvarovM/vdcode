import React from "react";

function ProjectsMain() {
  return (
    <div>
      {/* breadcrumb */}
      <div className="bg-[#273344] w-full h-6 px-2 md:px-5 text-gray-500 flex items-center space-x-2">
        <p>my-app</p>
        <span className="text-sm mt-0.5 font-thin">ᐳ</span>
        <p>components</p>
        <span className="text-sm mt-0.5 font-thin">ᐳ</span>
        <p>Projects.jsx</p>
      </div>
    </div>
  );
}

export default ProjectsMain;
