"use client";

import styles from "./page.module.css";
import Button from "../components/ui/Button/";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Test task
        <Button onClick={() => alert("Clicked!")}>Click Me</Button>
        <Button borderless onClick={() => alert("Clicked!")}>
          Click on borderless button
        </Button>
      </main>
    </div>
  );
}
