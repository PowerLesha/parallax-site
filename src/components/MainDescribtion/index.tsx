import React from "react";
import styles from "./index.module.css";
import { useScrollPosition } from "@/hooks/UseScrollPosition";
import Button from "../ui/Button";
import StatsSection from "../StatsSection/Index";

type MainDescribtionProps = {
  title: string;
  additionalText: string;
  buttonText: string;
  additionalButtonText: string;
  imageSrc: string;
  imageAlt?: string;
  titleParallaxStyle?: React.CSSProperties;
  imageParallaxStyle?: React.CSSProperties;
};

const MainDescribtion = ({
  title,
  additionalText,
  buttonText,
  additionalButtonText,
  imageSrc,
  imageAlt = "Main description image",
  titleParallaxStyle,
  imageParallaxStyle,
}: MainDescribtionProps) => {
  const scrolled = useScrollPosition(0);
  const rotation = Number(scrolled) * 40;
  const translateY = Math.min(Number(scrolled) * -25, 0);

  return (
    <section className={styles.mainDescribtion}>
      <h2
        className={`${styles.title} ${scrolled ? styles.scrolled : ""}`}
        style={titleParallaxStyle}
        data-text={title}
      >
        {title}
      </h2>

      <p className={styles.description}>{additionalText}</p>

      <div className={styles.buttonsWrapper}>
        <Button onClick={() => ""}>{buttonText}</Button>
        <Button borderless onClick={() => ""}>
          {additionalButtonText}
        </Button>
      </div>

      <img
        src={imageSrc}
        alt={imageAlt}
        className={styles.image}
        style={{
          ...imageParallaxStyle,
          transform: `translateY(${translateY}px) rotate(${180 + rotation}deg)`,
          transition: "transform 0.3s linear",
        }}
      />
      <StatsSection />
    </section>
  );
};

export default MainDescribtion;
