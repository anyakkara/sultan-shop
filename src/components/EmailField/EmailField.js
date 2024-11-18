"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./EmailField.module.scss";
import Image from "next/image";
import EmailIcon from "@/assets/images/emailicon.svg";

const EmailField = ({ placeholder, onClick }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleChange}
                />
                <button
                    className={styles.submitButton}
                    onClick={() => onClick(inputValue)}
                >
                    <Image
                        src={EmailIcon}
                        alt="Search"
                        width={15}
                        height={15}
                    />
                </button>
            </div>
        </div>
    );
};

EmailField.propTypes = {
    placeholder: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

EmailField.defaultProps = {
    placeholder: "Введите ваш E-mail...",
};

export default EmailField;