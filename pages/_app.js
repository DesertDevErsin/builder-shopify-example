import "../styles/globals.css";
import { builder } from "@builder.io/react";

builder.init("b3085c41661541e28dfdeb5e3b6e28f2");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
