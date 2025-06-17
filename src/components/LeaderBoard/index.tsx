import React, { useRef, useEffect, useState } from "react";
import styles from "./index.module.css";
import {
  FiArrowUp,
  FiArrowDown,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import Button from "../ui/Button";
import { fakeData, RowData } from "@/utils/fakeData";
import Rocket from "./Rocket";

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
};

const LeaderBoard = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    margin: "-200px 0px -200px 0px",
  });

  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [expanded, setExpanded] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const halfLength = Math.ceil(fakeData.length / 2);

  return (
    <section className={styles.leaderBoardSection} ref={ref}>
      <div className={styles.leaderBoardHeader}>
        <p>LLM Leaderboard</p>
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
        <tbody>
          {fakeData.map((row, index) => {
            const isExtraRow = index >= halfLength;
            const shouldRender = expanded || !isExtraRow;

            return (
              <AnimatePresence key={`${row.model}-${index}`}>
                {shouldRender && (
                  <motion.tr
                    key={`${row.model}-${index}`}
                    className={`${styles.tbodyRow} ${
                      index % 2 === 1 ? styles.oddRow : ""
                    }`}
                    initial={isExtraRow ? "hidden" : false}
                    animate="visible"
                    exit={isExtraRow ? "exit" : {}}
                    variants={rowVariants}
                  >
                    <td className={styles.arrowCell}>
                      {renderArrow(row.trend)}
                    </td>
                    <td className={styles.numberCell}>{index + 1}</td>
                    <td>{row.model}</td>
                    <td>{row.average}</td>
                    <td className={styles.hideOnMobile}>{row.truthfulQA}</td>
                    <td>{row.earnings}</td>
                  </motion.tr>
                )}
              </AnimatePresence>
            );
          })}
        </tbody>
      </table>

      <div className={styles.expandButton}>
        <Button borderless onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide full leaderboard" : "View full leaderboard"}
          <span className={styles.arrowCircle}>
            {expanded ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        </Button>
      </div>

      <Rocket scrollDirection={scrollDirection} isVisible={isInView} />
    </section>
  );
};

export default LeaderBoard;
