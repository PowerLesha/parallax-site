import React, { useRef, useEffect } from "react";
import styles from "./index.module.css";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { motion, useAnimation, useInView } from "framer-motion";
import Button from "../ui/Button";
import { fakeData, RowData } from "@/utils/fakeData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const LeaderBoard = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    margin: "-200px 0px -200px 0px",
  });

  const rocketControls = useAnimation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const isMobile = window.innerWidth <= 768;

      if (inView) {
        if (scrollingDown) {
          rocketControls.start({ y: 0, opacity: 1 });
        }

        if (isMobile) {
          if (scrollingDown) {
            rocketControls.start({ y: -380, opacity: 1 });
          } else {
            rocketControls.start({ y: 0, opacity: 1 });
          }
        } else {
          if (scrollingDown) {
            rocketControls.start({ y: -600, opacity: 1 });
          } else {
            rocketControls.start({ y: 0, opacity: 1 });
          }
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView, rocketControls]);

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const renderArrow = (trend: RowData["trend"]) => {
    if (trend === "up")
      return <FiArrowUp className={styles.arrowUp} aria-label="Up arrow" />;
    if (trend === "down")
      return (
        <FiArrowDown className={styles.arrowDown} aria-label="Down arrow" />
      );
    return <span className={styles.noArrow}>-</span>;
  };

  return (
    <section className={styles.leaderBoardSection} ref={ref}>
      <div className={styles.leaderBoardHeader}>
        <p>LLM Leaderboard</p>{" "}
        <Button onClick={() => ""}>Submit your model</Button>
      </div>
      <p>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to
        test LLMs on a large number of different evaluation tasks. The higher
        the score, the better the LLM.
      </p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.theadRow}>
            <th className={styles.arrowCell} aria-label="Trend" />
            <th className={styles.numberCell}>#</th>
            <th className={styles.th}>Model Name</th>
            <th className={styles.th}>Average</th>
            <th className={`${styles.th} ${styles.hideOnMobile}`}>
              TruthfulQA
            </th>
            <th className={styles.th}>Earnings</th>
          </tr>
        </thead>
        <motion.tbody
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {fakeData.map((row, index) => (
            <motion.tr
              key={row.model}
              variants={rowVariants}
              className={`${styles.tbodyRow} ${
                index % 2 === 1 ? styles.oddRow : ""
              }`}
            >
              <td className={styles.arrowCell}>{renderArrow(row.trend)}</td>
              <td className={styles.numberCell}>{index + 1}</td>
              <td>{row.model}</td>
              <td>{row.average}</td>
              <td className={styles.hideOnMobile}>{row.truthfulQA}</td>
              <td>{row.earnings}</td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
      {/* <div className={styles.rocketContainer}>
        <motion.div
          className={styles.rocket}
          animate={rocketControls}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className={styles.fireTrail} />
          <img
            src="/images/rocket.png"
            alt="Rocket"
            className={styles.rocketImg}
          />
        </motion.div>
      </div> */}
    </section>
  );
};

export default LeaderBoard;
