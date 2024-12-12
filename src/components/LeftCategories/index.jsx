import React from 'react';
import styles from './LeftCategories.module.scss';

const LeftCategories = ({ title, items = []  }) => (
  <div>
    <h2 className={styles.heading}>{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default LeftCategories;
