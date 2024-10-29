"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchField.module.css";
import Image from "next/image";
import SearchIcon from "@/assets/images/search.svg";

const SearchField = ({ placeholder, onClick }) => {
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
                        src={SearchIcon}
                        alt="Search"
                        width={15}
                        height={15}
                    />
                </button>
            </div>
        </div>
    );
};

SearchField.propTypes = {
    placeholder: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

SearchField.defaultProps = {
    placeholder: "Поиск...",
};

export default SearchField;
