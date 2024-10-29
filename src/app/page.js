import React from 'react';
import style from './Categories.module.css';
import Link from 'next/link';
import Image from 'next/image';
import housechems from './/images/housechems.png';
import hygiene from './/images/hygiene.png';
import housegoods from './/images/housegoods.png';
import childmom from './/images/childmom.png';
import dishes from './/images/dishes.png';
import 'typeface-inter';


const CategoriesList = () => {

  const categories = [
    { title: 'Бытовая химия', pic: housechems, link: '/catalogue', },
    { title: 'Косметика и гигиена', pic: hygiene, link: '/catalogue', },
    { title: 'Товары для дома', pic: housegoods, link: '/catalogue', },
    { title: 'Товары для детей и мам', pic: childmom, link: '/catalogue', },
    { title: 'Посуда', pic: dishes, link: '/catalogue', },
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
          <div className={style.categoryImage}>
          <Image
                src={cat.pic}
                alt={cat.title}
            />
            </div>
            <p className={style.categoryLabel}>{cat.title}</p>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <CategoriesList />
  );  
}
