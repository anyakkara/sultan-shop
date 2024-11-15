"use client";

import React from "react";
import styles from "./SmallRoundButton.module.scss";

const SmallRoundButton = ({ children, onClick }) => {
    return (
        <button
            className={styles.SmallRoundButton}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default SmallRoundButton;
