import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="bg-[#252525] w-full h-screen flex flex-col items-center justify-center">
      <img
        src="/img/vscode.png"
        className="w-32 h-auto mb-8"
        loading={loading}
      />
      <BarLoader color={"#fff"} loading={loading} />
    </div>
  );
}

export default Loader;
