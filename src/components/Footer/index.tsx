import React, { useRef, useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useAnimationFrame,
  useInView,
} from "framer-motion";
import styles from "./index.module.css";

const Footer = () => {
  const footerRef = useRef(null);
  const controls = useAnimation();
  const rotate = useMotionValue(0);

  const isInView = useInView(footerRef, {
    margin: "0px 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: -300,
        transition: { duration: 2, ease: "easeInOut" },
      });
    } else {
      controls.start({
        y: 400,
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [isInView, controls]);

  useAnimationFrame((t, delta) => {
    const speedMultiplier = 0.01;
    rotate.set(rotate.get() + delta * speedMultiplier);
  });

  return (
    <>
      <motion.div
        className={styles.fixedTopText}
        initial={{ opacity: 1 }}
        animate={{ opacity: isInView ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h3>Join our community and harvest $SALT</h3>
      </motion.div>

      <footer className={styles.footer} ref={footerRef}>
        <motion.div
          className={styles.planetWrapper}
          animate={controls}
          style={{ rotate }}
          initial={{ y: 400 }}
        >
          <img
            src="/images/footerPlanet.png"
            alt="Rising Planet"
            className={styles.planet}
          />
        </motion.div>

        <div className={styles.coverWrapper}>
          <img
            src="/images/footerBigPlanet.png"
            alt="Big Planet Cover"
            className={styles.cover}
          />
        </div>

        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h3>Join our community and harvest $SALT</h3>
          <p>
            Join us on our mission to to the moon & revolutionize open source AI
            development so that we can build a permissionless, democratized, and
            decentralized AI. Let the fate of AI be in our hands and not that of
            big tech companies.
          </p>
          <div className={styles.socialIcons}>
            <a href="" target="_blank" rel="noreferrer">
              <img src="/images/telegram.png" alt="Telegram" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
