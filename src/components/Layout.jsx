import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";


import Navbar from "./Navbar";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
          integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {children}
    </>
  );
}

Layout.defaultProps = {
  title: "Next.js | Tienda de muebles",
  description: "Ecomerce de muebles",
};
