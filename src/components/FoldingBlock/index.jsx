'use client';

import styles from '@/components/FoldingBlock/FoldingBlock.module.scss';
import Triangle from '@/assets/images/triangle.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function FoldingBlock({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.foldingBlock}>
      <div className={styles.foldingHeading} onClick={toggleOpen}>
        <h4>{title}</h4>
        <Image
          src={Triangle}
          alt="Triangle"
          className={isOpen ? styles.rotatedTriangle : ''}
        />
      </div>
      <div className={`${styles.foldingContent} ${isOpen ? styles.open : ''}`}>
        {children}
      </div>
    </div>
  );
}
