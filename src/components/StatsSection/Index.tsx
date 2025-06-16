import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

const stats = [
  { number: 1.873, label: "LLM Models", delay: 0 },
  { number: 326.734, label: "Paid to Data Scientists", delay: 200 },
  { number: 6.557, label: "Developers", delay: 400 },
];

const StatsSection = () => {
  const [showStats, setShowStats] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          scrollDirection === "down" &&
          scrollY > 100
        ) {
          setShowStats(true);
        } else if (!entry.isIntersecting && scrollDirection === "up") {
          setShowStats(false);
        }
      },
      {
        rootMargin: "0px 0px -50px 0px",
        threshold: 0,
      }
    );

    observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [scrollDirection, scrollY]);

  return (
    <div ref={statsRef} className={styles.statsContainer}>
      {stats.map(({ number, label, delay }, i) => (
        <div
          key={i}
          className={`${styles.statBox} ${showStats ? styles.visible : ""}`}
          style={{ transitionDelay: `${delay}ms` }}
        >
          <p className={styles.statNumber}>
            {label === "Paid to Data Scientists" ? "$" : ""}
            {number.toString().replace(".", ",")}
          </p>

          <p className={styles.statLabel}>{label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
