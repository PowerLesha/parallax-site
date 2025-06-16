import React from "react";
import styles from "./index.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  borderless?: boolean;
};

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  borderless = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${
        borderless ? styles.borderless : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
