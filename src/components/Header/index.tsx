import React from "react";
import Button from "../ui/Button";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Button borderless onClick={() => ""}>
          How It Works
        </Button>
        <Button onClick={() => ""}>Buy Salt AI</Button>
      </div>
    </header>
  );
};

export default Header;
