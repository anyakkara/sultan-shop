"use client";
import Image from 'next/image';
import salestyle from "./productList.module.scss"

function ProductCard(props) {
    return(
      <div className={salestyle.conteinerCard}>
        <div className={salestyle.img_product}>
          <Image  className={salestyle.image} src={props.image} alt = {props.image} />
        </div>
  
        <div className={salestyle.info_product}>
          <p className={salestyle.size}>{props.size}</p>
          <p className={salestyle.descript}>
            <span className={salestyle.nameRu}>{props.nameRu} </span>
            {props.descript}
          </p>
          <p className={salestyle.word_barcode}>Штрихкод: 
             <span className={salestyle.barcode}> {props.barcode}</span>
          </p>
          <p className={salestyle.word_brand}>Бренд:
             <span className={salestyle.brand}> {props.brand}</span>
          </p>

          <div className={salestyle.floor_product}>
            <p className={salestyle.price}>{props.price}</p>
            <button className={salestyle.button}>в корзину</button>
          </div>
        </div>
  
      </div>
      
  
    );
};

export default ProductCard;