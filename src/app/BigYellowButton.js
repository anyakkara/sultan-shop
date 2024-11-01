"use client";

import React from "react";
import styles from "./BigYellowButton.module.css";
import Link from "next/link";

const BigYellowButton = ({children, onClick, href = "#"}) => {
    return (
        <button
            className={styles.BigYellowButton}
            onClick={onClick}
        >
            <Link href={href}>
                {children}
            </Link>
        </button>
    );
};

export default BigYellowButton;