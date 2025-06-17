import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./index.module.css";

interface RocketProps {
  scrollDirection: "up" | "down";
  isVisible: boolean;
}

const Rocket: React.FC<RocketProps> = ({ scrollDirection, isVisible }) => {
  const controls = useAnimation();
  const hasLaunchedRef = useRef(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isVisible) {
      hasLaunchedRef.current = false;
      controls.start({ opacity: 0, y: 0 });
      return;
    }

    if (isMobile) {
      if (scrollDirection === "down") {
        if (!hasLaunchedRef.current) {
          hasLaunchedRef.current = true;
          controls.start({
            y: -380,
            opacity: 1,
            transition: { duration: 2, ease: "easeOut", delay: 1 },
          });
        }
      } else {
      }
    } else {
      if (scrollDirection === "down") {
        controls.start({
          y: -600,
          opacity: 1,
          transition: { duration: 2, ease: "easeOut", delay: 1 },
        });
      } else {
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: "easeOut" },
        });
      }
    }
  }, [scrollDirection, isVisible, controls]);

  return (
    <div className={styles.rocketContainer}>
      <motion.div
        className={styles.rocket}
        animate={controls}
        style={{ pointerEvents: "none" }}
      >
        <div className={styles.fireTrail} />
        <img
          src="/images/rocket.png"
          alt="Rocket"
          className={styles.rocketImg}
        />
      </motion.div>
    </div>
  );
};

export default Rocket;
