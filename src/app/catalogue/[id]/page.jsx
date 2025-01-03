'use client';

import styles from '@/app/catalogue/[id]/Product.module.scss';
import DownloadLogoDark from '@/assets/images/download_dark.svg';
import ShareLogo from '@/assets/images/share.svg';
import CartLogo from '@/assets/images/small_cart.svg';
import WeightLogo from '@/assets/images/weight.svg';
import BigButton from '@/components/BigButton';
import BreadCrumbs from '@/components/BreadCrumbs';
import FoldingBlock from '@/components/FoldingBlock';
import categories from '@/data/categories.json';
import products from '@/data/data.json';
import * as m from '@/paraglide/messages.js';
import { languageTag } from "@/paraglide/runtime";
import { downloadFile } from '@/utils/download';
import Image from 'next/image';
import React from 'react';

const handleDownload = () => {
  downloadFile('Прайс-лист.pdf');
};

export default function ProductPage({ params }) {
  const { id } = React.use(params);

  const product = products.find((product) => product.id === parseInt(id));

  const ProductDetailedInfo = () => {
    const productInfo = {
      [m.brand()]: product.brand,
      [m.article()]: product.article,
      [m.quantity()]: product.amount,
      [m.barcode()]: product.barcode,
      [m.weight()]: product.size + ' ' + [languageTag() === 'en' ? product.unitEn : product.unitRu],
    };

    return (
      <ul className={styles.productDetailedInfo}>
        {Object.entries(productInfo).map(([key, value]) => (
          <li key={key}>
            {key}: <strong>{value}</strong>
          </li>
        ))}
      </ul>
    );
  };

  if (!product) {
    return (
      <div className={styles.container}>
        <BreadCrumbs
          paths={{
            [m.home()]: '/',
            [m.catalogue()]: '/catalogue',
            [m.not_found()]: `/catalogue/${parseInt(id)}`,
          }}
        />
        <div className={styles.card}>
          <h1>Product not found</h1>
        </div>
      </div>
    );
  }

  const getCategoryNameById = (categoryId) => {
    const language = languageTag();
    for (const categoryKey in categories) {
      const category = categories[categoryKey];
      if (category.id == categoryId) {
        return language === 'en' ? category.name_en : category.name_ru;
      }
    }
  };

  return (
    <div className={styles.container}>
      <BreadCrumbs
        paths={{
          [m.home()]: '/',
          [m.catalogue()]: '/catalogue',
          [getCategoryNameById(product?.cat_id)]: `/catalogue?category=${product?.cat_id}`,
          [languageTag() === 'en' ? product.shortNameEn : product.shortNameRu]: `/catalogue/${parseInt(id)}`,
        }}
      />

      <div className={styles.card}>
        <div className={styles.image}>
          <Image src={product.image} alt={'Product image'} width={500} height={500} />
        </div>
        <div className={styles.info}>
          <span className={styles.isAvailable}>{m.in_stock()}</span>

          <h1 className={styles.title}>
            {/*<span className={styles.titleHighlight}>BioMio BIO-SOAP</span>{' '}*/}
            {/*Экологичное туалетное мыло. Литсея и бергамот*/}
            {languageTag() === 'en' ? product.nameEn : product.nameRu}
          </h1>

          <span className={styles.weight}>
            <Image src={WeightLogo} alt={'Weight'} />
            <span>{product.size + ' ' + [languageTag() === 'en' ? product.unitEn : product.unitRu]}</span>
          </span>

          <div className={styles.priceCartContainer}>
            <div className={styles.priceQuantity}>
              <span className={styles.price}>{product.price} ₸</span>
              <div className={styles.quantity}>
                <span className={styles.minusplus}>-</span>
                <span className={styles.count}>1</span>
                <span className={styles.minusplus}>+</span>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <BigButton href={'#'}>
                <span>{m.add_to_cart()}</span>
                <Image src={CartLogo} alt={'Cart Logo'} />
              </BigButton>
            </div>
          </div>

          <div className={styles.outlines}>
            <div className={styles.shareButton}>
              <Image src={ShareLogo} alt={'Share logo'} />
            </div>
            <div>{m.product_page_advert()}</div>
            <div className={styles.priceList} onClick={handleDownload}>
              <span>{m.price_list()}</span>
              <Image src={DownloadLogoDark} alt={'Download logo'} />
            </div>
          </div>

          <div className={styles.detailedInfo}>
            <ProductDetailedInfo />
          </div>

          <FoldingBlock title={m.description()}>
            <p>
              {languageTag() === 'en' ? product.descriptionEn : product.descriptionRu}
            </p>
          </FoldingBlock>

          <div className={styles.separator}></div>

          <FoldingBlock title={m.specifications()}>
            <ProductDetailedInfo />
          </FoldingBlock>
        </div>
      </div>
    </div>
  );
}
