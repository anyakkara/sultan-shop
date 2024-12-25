'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.scss';
import Image from 'next/image';
import SearchIcon from '@/assets/images/search.svg';
import * as m from '@/paraglide/messages.js';

const SearchField = ({ children, onClick }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.inputField}
        placeholder={children}
        value={inputValue}
        onChange={handleChange}
      />
      <button
        className={styles.submitButton}
        onClick={() => onClick(inputValue)}
      >
        <Image src={SearchIcon} alt="Search" width={15} height={15} />
      </button>
    </div>
  );
};

SearchField.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchField;
