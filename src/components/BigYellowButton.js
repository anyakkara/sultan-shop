"use client";

import React from "react";
import styles from "./BigYellowButton.module.css";

const BigYellowButton = ({ children, onClick, width = 200, height = 60 }) => {
  return (
      <button
          className={styles.BigYellowButton}
          onClick={onClick}
          style={{ width: `${width}px`, height: `${height}px` }}
      >
        {children}
      </button>
  );
};

export default BigYellowButton;
