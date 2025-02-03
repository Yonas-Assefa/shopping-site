// global styles
import "../assets/css/styles.scss";
import "swiper/swiper.scss";
import "rc-slider/assets/index.css";
import "react-rater/lib/react-rater.css";
import "../../styles/globals.css";

// types
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Router from "next/router";
import React, { Fragment } from "react";

import { wrapper } from "../store";
import * as gtag from "../utils/gtag";
import Head from "next/head";
const isProduction = process.env.NODE_ENV === "production";

// only events on production
if (isProduction) {
  // Notice how we track pageview when route is changed
  Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--main-font",
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      {" "}
      {/* Add the Head component here */}
      <meta
        name="google-site-verification"
        content="h4B0fvZUHUU98J4KI4IKeJ29FjmXywqjLKD2jdxbdkA"
      />
    </Head>
    <style jsx global>{`
      :root {
        --main-font: ${poppins.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);
