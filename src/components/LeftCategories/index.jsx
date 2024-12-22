import React from 'react';
import { Link } from '@/lib/i18n';
import categories from '@/data/categories.json';
import styles from './LeftCategories.module.scss';
import * as m from '@/paraglide/messages';
import { languageTag } from '@/paraglide/runtime';

const renderSubcategories = (subcategories) => {
  return (
    <ul>
      {Object.values(subcategories).map((subcategory) => (
        <li key={subcategory.id}>
          <p href={`/catalogue?category=${subcategory.id}`} className={styles.subcategory}>
            {languageTag() == 'en' ? subcategory.name_en : subcategory.name_ru}
          </p>
          {subcategory.subcategories && renderSubcategories(subcategory.subcategories)}
        </li>
      ))}
    </ul>
  );
};

const LeftCategories = ({ categoryId }) => {
  const currentCategory = Object.values(categories).find(
    (category) => category.id === categoryId
  );

  return (
    <div className={styles.leftCategories}>
      {currentCategory ? (
        Object.entries(currentCategory.subcategories).map(([key, subcategory]) => (
          <div key={subcategory.id}>
            <h3 className={styles.categoryTitle}>{languageTag() == 'en' ? subcategory.name_en : subcategory.name_ru}</h3>
            {subcategory.subcategories && renderSubcategories(subcategory.subcategories)}
          </div>
        ))
      ) : (
        <p>{m.category_not_found()}</p>
      )}
    </div>
  );
};

export default LeftCategories;
