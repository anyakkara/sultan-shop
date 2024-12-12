'use client';

import React, { useState } from 'react';
import { Link } from '@/lib/i18n';
import BigYellowButton from '@/components/BigButton';
import * as m from '@/paraglide/messages';
import BreadCrumbs from '@/components/BreadCrumbs';
import FoldingBlock from '@/components/FoldingBlock';
import SearchField from '@/components/SearchField';
import LeftCategories from '@/components/LeftCategories';
import styles from './Catalogue.module.scss';
import ProductList from '@/components/ProductList';
import products from '@/data/data.json';

const Catalogue = () => {
  const uniqueBrands = [...new Set(products.map((product) => product.brand))];
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBrands, setFilteredBrands] = useState(uniqueBrands);
  const [sortType, setSortType] = useState('default');

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((b) => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = uniqueBrands.filter((brand) =>
      brand.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredBrands(filtered);
  };

  const renderBrandCheckboxes = (brands) => {
    return brands.map((brand) => (
      <li key={brand}>
        <label>
          <input
            type="checkbox"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => handleBrandChange(brand)}
          />{' '}
          {brand}
        </label>
      </li>
    ));
  };

  return (
    <div className={styles.categoriesPage}>
      <BreadCrumbs
        paths={{
          [m.home()]: '/',
          [m.catalogue()]: '/catalogue',
          [m.cosmetics_and_hygiene()]:
            '/catalogue?category=cosmetics_and_hygiene',
        }}
      />
      <div className={styles.headlineCategories}>
        <div className={styles.leftPart}>{m.cosmetics_and_hygiene()}</div>
        <div className={styles.rightPart}>
          <div className={styles.sortdropdown}>
            <label className={styles.sorting}>{m.sorting()}</label>
            <select
              id="sort"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="default">{m.sort_default()}</option>
              <option value="nameasc">{m.name_ascending()}</option>
              <option value="namedesc">{m.name_descending()}</option>
              <option value="priceasc">{m.price_ascending()}</option>
              <option value="pricedesc">{m.price_descending()}</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.topCategories}>
        {[
          m.body_care(),
          m.hand_care(),
          m.foot_care(),
          m.face_care(),
          m.hair_care(),
          m.suncare(),
          m.shaving(),
          m.gift_sets(),
          m.hygiene_products(),
          m.oral_hygiene(),
          m.paper_products(),
        ].map((category, index) => (
          <div key={index} className={styles.topCategoryItem}>
            {category}
          </div>
        ))}
      </div>

      <div className={styles.catalogueInnerContainer}>
        <div className={styles.filtercontainer}>
          <div className={styles.pricerange}>
            <h2 className={styles.selection}>{m.selection_by_parameters()}</h2>
            <h3 className={styles.priceint}>{m.price_t()}</h3>
            <div className={styles.priceinputs}>
              <input type="text" value="0" readOnly /> -{' '}
              <input type="text" value="10 000" readOnly />
            </div>
          </div>

          <div className={styles.filterBlock}>
            <h3 className={styles.filterHeading}>{m.brand()}</h3>
            <div className={styles.searchContainer}>
              <SearchField
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onClick={handleSearch}
              >
                {m.search()}
              </SearchField>
            </div>
            <ul>{renderBrandCheckboxes(filteredBrands.slice(0, 3))}</ul>

            <div className={styles.showAll}>
              <FoldingBlock title={m.show_all()}>
                <ul>{renderBrandCheckboxes(filteredBrands.slice(3))}</ul>
              </FoldingBlock>
            </div>
          </div>

          <div className={styles.showButton}>
            <BigYellowButton>
              <span>{m.show_filters()}</span>
            </BigYellowButton>
          </div>
          <div className={styles.leftCategories}>
            {/* eslint-disable-next-line react/jsx-key */}
            <LeftCategories title={m.body_care()} items={[<p>Hello</p>]} />
          </div>
        </div>

        <div className={styles.productsContainer}>
          <ProductList brands={selectedBrands} sortType={sortType} />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
