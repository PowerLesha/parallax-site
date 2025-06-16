import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Button from "../ui/Button";
import { useParallax } from "react-scroll-parallax";

type MiddleInfoSectionProps = {
  imageSrc: string;
  text: string;
  additionalText: string;
  buttonText: string;
  onClick?: () => void;
};

const MiddleInfoSection = ({
  imageSrc,
  text,
  additionalText,
  buttonText,
  onClick,
}: MiddleInfoSectionProps) => {
  const [starVisible, setStarVisible] = useState(false);
  const starRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const parallax = useParallax<HTMLDivElement>({
    translateY: isMobile ? [-150, 50] : [-50, 50],
    translateX: isMobile ? [-200, 50] : [-250, 50],
    opacity: [0, 1],
    easing: "easeOutQuad",
  });

  useEffect(() => {
    if (!starRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStarVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(starRef.current);

    return () => {
      if (starRef.current) observer.unobserve(starRef.current);
    };
  }, []);

  return (
    <>
      <section className={styles.middleInfoSection}>
        <div
          ref={(el) => {
            starRef.current = el;
            if (el) {
              parallax.ref.current = el;
            }
          }}
          className={`${styles.starWrapper} ${
            starVisible ? styles.visible : ""
          }`}
        >
          <img src={imageSrc} alt="Falling Star" className={styles.starImage} />
        </div>
      </section>
      <section className={styles.middleInfo}>
        <h3 className={styles.description}>{text}</h3>
        <p>{additionalText}</p>
        <Button onClick={onClick}>{buttonText}</Button>
      </section>
    </>
  );
};

export default MiddleInfoSection;
