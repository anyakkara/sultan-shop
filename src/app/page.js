"use client";
import React from 'react';
import {productModel} from './data.js';
import Image from 'next/image';
import salestyle from './page.module.css';


function ProductCard(props){

  return(
    <div className={salestyle.conteinerCard}>
      <Image
      className={salestyle.image}
      src={props.image}
      alt = {props.image}
      />

      <div>
        <p className={salestyle.sizeType}>{props.sizeType}</p>
        <p className={salestyle.nameRu}>{props.nameRu}</p>
        <p className={salestyle.barcode}>Штрихкод: {props.barcode}</p>
        <p className={salestyle.brand}>Бренд: {props.brand}</p>
        <p className={salestyle.price}>{props.price}</p>
        <button className={salestyle.button} onClick={() => props.addToCart(props)}>в корзину</button>
      </div>

    </div>
    

  );
};


export const ProductList =({productList, addToCart})=>
{
  return(
    <div className={salestyle.product_conteiner}>
      {productList.map((product)=>
        (<ProductCard
          key ={product.id}
          image={product.image}
          sizeType = {product.sizeType}
          barcode = {product.barcode}
          nameRu = {product.nameRu}
          brand = {product.brand.name}
          price = {product.price}
          addToCart={addToCart}/>
        ))}
    </div>
  )
}

export default function Home() {
  const addToCart = (product) => {
    console.log('Добавлен в корзину:', product);
  };
  return(
    <ProductList productList={productModel} addToCart={addToCart}/>
  );
}