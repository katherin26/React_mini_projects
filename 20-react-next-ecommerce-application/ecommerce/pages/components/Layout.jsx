import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout">
      <Head>
        <title>Katica's Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">EMPTY</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
