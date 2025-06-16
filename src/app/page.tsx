"use client";

import MainDescribtion from "@/components/MainDescribtion";
import styles from "./page.module.css";
import Header from "@/components/Header";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className={styles.page}>
        <Header />
        <MainDescribtion
          title="A new economic primitive for funding decentralized AI"
          additionalText=" We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI"
          buttonText="Buy Salt AI"
          additionalButtonText="Try Now"
          imageSrc="/images/moon.jpg"
        />
      </div>
    </ParallaxProvider>
  );
}
