import type { AppProps } from "next/app";

import SmoothScroll from "@/components/Animations/SmoothScroll";

import "@styles/globals.scss";
import "@styles/normalize.css";
import "@styles/@root/containers.scss";

import "@/components/Transition/Transition.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "@styles/@pages/index.scss";
import "@styles/@pages/conserve.scss";
import "@styles/@pages/nurture.scss";
import "@styles/@pages/explore.scss";
import "@styles/@pages/ourstory.scss";
import "@styles/@pages/enquire.scss";
import "@styles/@pages/villa.scss";

import "@queries/320px.scss";
import "@queries/768px.scss";
import "@queries/1024px.scss";
import "@queries/1440px.scss";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const key = Date.now() + Math.random();
  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={key} />
      </AnimatePresence>
    </SmoothScroll>
  );
}
