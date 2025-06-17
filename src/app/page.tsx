"use client";

import MainDescribtion from "@/components/MainDescribtion";
import styles from "./page.module.css";
import Header from "@/components/Header";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import MiddleInfoSection from "@/components/MiddleInfoSection";
import LeaderBoard from "@/components/LeaderBoard";
import Footer from "@/components/Footer";

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
        <MiddleInfoSection
          imageSrc="/images/star.png"
          text="Crowdsourcing our collective intelligence to build the best AI"
          additionalText="Open source AIs have been lagging in development behind OpenAI with billions of dollars.We run competitions between AI models to find and pay for the best AI model. Users will be able to access the best AI models."
          buttonText="Use the cutting edge AI"
          onClick={() => ""}
        />
        <LeaderBoard />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
