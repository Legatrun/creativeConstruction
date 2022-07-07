import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Footer from './Footer'
import Navbar from "./Navbar";
import {SessionProvider} from 'next-auth/react'


export default function Layout({ children, title, description }) {
  return (
    <SessionProvider>
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
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar/>
      {children}
      <Footer/>
      
    </SessionProvider>
  );
}

Layout.defaultProps = {
  title: "Next.js | Tienda de muebles",
  description: "Ecomerce de muebles",
};
