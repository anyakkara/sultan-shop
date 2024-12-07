'use client';

import React from 'react';
import style from './Categories.module.css';
import { Link } from '@/lib/i18n';
import Image from 'next/image';
import housechems from '../../app/images/housechems.png';
import hygiene from '../../app/images/hygiene.png';
import housegoods from '../../app/images/housegoods.png';
import childmom from '../../app/images/childmom.png';
import dishes from '../../app/images/dishes.png';

// компонента категорий
const CategoriesList = () => {
  const categories = [
    { title: 'Бытовая химия', pic: housechems, link: '/catalogue' },
    { title: 'Косметика и гигиена', pic: hygiene, link: '/catalogue' },
    { title: 'Товары для дома', pic: housegoods, link: '/catalogue' },
    { title: 'Товары для детей и мам', pic: childmom, link: '/catalogue' },
    { title: 'Посуда', pic: dishes, link: '/catalogue' },
  ];

  return (
    <div className={style.main}>
      <h2 className={style.title}>
        <span className={style.category}>КАТЕГОРИИ</span> ТОВАРОВ
      </h2>
      <p className={style.description}>
        10 000+ ходовых позиций по специальным ценам
      </p>
      <div className={style.categoriesList}>
        {categories.map((cat, index) => (
          <Link href={cat.link} key={index} className={style.categoryCard}>
            <div className={style.categoryPic}>
              <Image src={cat.pic} alt={cat.title} />
            </div>
            <p className={style.categoryTitle}>{cat.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
