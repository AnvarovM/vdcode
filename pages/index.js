  import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Sidebar from "../components/Sidebar";
import DefaultMain from "../components/DefaultMain";
import Loader from "../components/Loader.jsx";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <Head>
        <title>Vscode clone</title>
        <link rel="icon" href="/icon.svg" />
      </Head>

      {loading ? (
        <Loader />
      ) : (
        <div className="select-none overflow-y-hidden">
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="w-full bg-gray-800 flex flex-col">
              <Main />
              <DefaultMain />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
