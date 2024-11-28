'use client';
import Image from 'next/image';
import salecard from './productCard.module.scss';
import { Link } from '@/lib/i18n';
import popular_img from '../../app/images/popular.png';

function ProductCard(props) {
  return (
    <div className={salecard.conteiner}>
      <Image
        className={salecard.popular}
        src={popular_img}
        alt={'PopularProduct'}
        width={84}
        height={20}
      />

      <Link
        className={salecard.img_product}
        href={`/catalogue/${props.id}`}
        passHref
      >
        <Image
          className={salecard.image}
          src={props.image}
          alt={props.nameRu}
          width={300}
          height={300}
        />
      </Link>

      <div className={salecard.information}>
        <p className={salecard.size}>{props.size}</p>
        <p className={salecard.descript}>
          <span className={salecard.nameRu}>{props.nameRu} </span>
          {props.descript}
        </p>
        <p className={salecard.word_barcode}>
          Штрихкод:
          <span className={salecard.barcode}> {props.barcode}</span>
        </p>
        <p className={salecard.word_brand}>
          Бренд:
          <span className={salecard.brand}> {props.brand}</span>
        </p>

        <div className={salecard.floor_product}>
          <p className={salecard.price}>{props.price}</p>
          <button className={salecard.button}>в корзину</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
