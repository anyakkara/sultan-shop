'use client';

import { useState } from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';
import styles from '@/app/catalogue/product/Product.module.scss';
import Image from 'next/image';
import SampleProduct from '@/assets/images/sample_product.png';
import WeightLogo from '@/assets/images/weight.svg';
import BigButton from '@/components/BigButton';
import CartLogo from '@/assets/images/small_cart.svg';
import ShareLogo from '@/assets/images/share.svg';
import DownloadLogoDark from '@/assets/images/download_dark.svg';
import * as m from '@/paraglide/messages.js';
import { downloadFile } from '@/utils/download';
import FoldingBlock from '@/components/FoldingBlock';

const handleDownload = () => {
  downloadFile('Прайс-лист.pdf');
};

const ProductDetailedInfo = () => {
  const productInfo = {
    [m.manufacturer()]: 'BioMio',
    [m.brand()]: 'BioMio',
    [m.article()]: '460404',
    [m.quantity()]: 2,
    [m.barcode()]: '4604049097548',
    [m.box_dimensions()]: '10х10х10',
    [m.weight()]: '1020 г',
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

export default function ProductPage() {
  return (
    <div className={styles.container}>
      <BreadCrumbs />
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src={SampleProduct} alt={'Product'} />
        </div>
        <div className={styles.info}>
          <span className={styles.isAvailable}>{m.in_stock()}</span>

          <h1 className={styles.title}>
            <span className={styles.titleHighlight}>BioMio BIO-SOAP</span>{' '}
            Экологичное туалетное мыло. Литсея и бергамот
          </h1>

          <span className={styles.weight}>
            <Image src={WeightLogo} alt={'Weight'} />
            <span>90 {m.gram()}</span>
          </span>

          <div className={styles.priceCartContainer}>
            <div className={styles.priceQuantity}>
              <span className={styles.price}>48,76 ₸</span>
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
            <div
              className={styles.priceList}
              onClick={handleDownload}
            >
              <span>{m.price_list()}</span>
              <Image src={DownloadLogoDark} alt={'Download logo'} />
            </div>
          </div>

          <div className={styles.detailedInfo}>
            <ProductDetailedInfo />
          </div>

          <FoldingBlock title={m.description()}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              interdum ut justo, vestibulum sagittis iaculis iaculis. Quis
              mattis vulputate feugiat massa vestibulum duis. Faucibus
              consectetur aliquet sed pellentesque consequat consectetur congue
              mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
              malesuada.
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
