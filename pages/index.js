import Head from "next/head";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vscode clone</title>
        <link rel="icon" href="/icon.svg" />
      </Head>

      <div className="select-none overflow-y-hidden">
        <Header />
        <div className="flex">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
}
