"use client";

import React from "react";
import styles from "./BigButton.module.scss";
import Link from "next/link";

const BigButton = ({children, onClick, href = "#"}) => {
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

export default BigButton;
