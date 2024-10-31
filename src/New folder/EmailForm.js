"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./EmailForm.module.css";
import Image from "next/image";
import EnterIcon from "@/assets/images/enter.svg";

const EmailForm = ({ placeholder, onSubmit }) => {
    const [emailValue, setEmailValue] = useState("");

    const handleChange = (e) => {
        setEmailValue(e.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputWrapper}>
                <input
                    type="email"
                    className={styles.inputField}
                    placeholder={placeholder}
                    value={emailValue}
                    onChange={handleChange}
                />
                <button
                    className={styles.submitButton}
                    onClick={() => onSubmit(emailValue)}
                >
                     <Image
                        src={EnterIcon}
                        alt="Enter"
                        width={39}
                        height={39}
                    />
                </button>
            </div>
        </div>
    );
};

EmailForm.propTypes = {
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};

EmailForm.defaultProps = {
    placeholder: "Введите ваш E-mail...",
};

export default EmailForm;