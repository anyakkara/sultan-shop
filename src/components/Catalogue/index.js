'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '@/lib/i18n';
import { useSearchParams } from 'next/navigation'
import BigYellowButton from '@/components/BigButton';
import * as m from '@/paraglide/messages';
import BreadCrumbs from '@/components/BreadCrumbs';
import FoldingBlock from '@/components/FoldingBlock';
import SearchField from '@/components/SearchField';
import styles from './Catalogue.module.scss';
import ProductList from '@/components/ProductList';
import products from '@/data/data.json';
import categories from '@/data/categories.json';
import Pagination from '@/components/Pagination';
import { languageTag } from "@/paraglide/runtime";
import LeftCategories from '@/components/LeftCategories';

const Catalogue = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');

  const uniqueBrands = [...new Set(products.map((product) => product.brand))];
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBrands, setFilteredBrands] = useState(uniqueBrands);
  const [sortType, setSortType] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId]);

  const getCategoryNameById = (categoryId) => {
    const language = languageTag();
    for (const categoryKey in categories) {
      const category = categories[categoryKey];
      if (category.id == categoryId) {
        return language === 'en' ? category.name_en : category.name_ru;
      }
    }
    return m.catalogue();
  };


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

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
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

  const filteredProducts = products.filter((product) => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesSearch = product.nameRu.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice =
      (minPrice === '' || product.price >= minPrice) && (maxPrice === '' || product.price <= maxPrice);
    const matchesCategory = !categoryId || product.cat_id === parseInt(categoryId);

    return matchesBrand && matchesSearch && matchesPrice && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortType) {
      case 'nameasc':
        return a.nameRu.localeCompare(b.nameRu);
      case 'namedesc':
        return b.nameRu.localeCompare(a.nameRu);
      case 'priceasc':
        return a.price - b.price;
      case 'pricedesc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleItemsPerPageChange = (e) => {
    const value = Math.max(1, e.target.value);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.categoriesPage}>
      <BreadCrumbs
        paths={{
          [m.home()]: '/',
          [m.catalogue()]: '/catalogue',
          [getCategoryNameById(categoryId)]: categoryId == null || categoryId.includes('.') ? '/catalogue' : `/catalogue?category=${categoryId}`,
        }}
      />
      <div className={styles.headlineCategories}>
        <div className={styles.leftPart}>{getCategoryNameById(categoryId)}</div>
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
          <div className={styles.itemsPerPage}>
            <label htmlFor="itemsPerPage">{m.items_per_page()}</label>
            <input
              type="number"
              id="itemsPerPage"
              min="1"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className={styles.itemsPerPageInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.topCategories}>
        {categoryId ? (
          Object.values(categories)
            .filter((category) => category.id === categoryId)
            .map((category) => (
              category.subcategories && (
                Object.values(category.subcategories).map((subcategory) => (
                  <div key={subcategory.id} className={styles.topCategoryItem}>
                    <Link href={`/catalogue?category=${subcategory.id}`} className={styles.subcategoryLink}>
                      {languageTag() === 'en' ? subcategory.name_en : subcategory.name_ru}
                    </Link>
                  </div>
                ))
              )
            ))
        ) : (
          Object.values(categories).map((category) => (
            <div key={category.id} className={styles.topCategoryItem}>
              <Link href={`/catalogue?category=${category.id}`} className={styles.categoryLink}>
                {languageTag() === 'en' ? category.name_en : category.name_ru}
              </Link>
            </div>
          ))
        )}
      </div>




      <div className={styles.catalogueInnerContainer}>
        <div className={styles.filtercontainer}>
          <div className={styles.pricerange}>
            <h2 className={styles.selection}>{m.selection_by_parameters()}</h2>
            <h3 className={styles.priceint}>{m.price_t()}</h3>
            <div className={styles.priceinputs}>
              <input
                type="number"
                value={minPrice}
                onChange={handleMinPriceChange}
                placeholder={m.min_price()}
                className={styles.priceInput}
              />
              <span> - </span>
              <input
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                placeholder={m.max_price()}
                className={styles.priceInput}
              />
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

          {/*           <div className={styles.showButton}>
            <BigYellowButton>
              <span>{m.show_filters()}</span>
            </BigYellowButton>
          </div> */}

          <div className={styles.leftCategories}>
            <LeftCategories categoryId={categoryId} />
          </div>
        </div>

        <div className={styles.productsAndPagination}>
          <div className={styles.productsContainer}>
            <ProductList products={currentProducts} />
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
