import React from 'react';
import style from './Categories.module.css';
import { Link } from '@/lib/i18n';
import Image from 'next/image';
import categories_raw from '@/data/categories.json';

const CategoriesList = () => {
  const categories = Object.keys(categories_raw).map(key => {
    const { subcategories, ...category } = categories_raw[key];
    return category;
  });

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
          <Link href={`/catalogue?category=${cat.id}`} key={index} className={style.categoryCard}>
            <div className={style.categoryPic}>
              <Image src={cat.image} alt={cat.name_ru} width={300} height={200} />
            </div>
            <p className={style.categoryTitle}>{cat.name_ru}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
