"use client";
import {productModel} from './data.js';
import {ProductList} from './ProductList/productList.js';

export default function Home() {

  const addToCart = (product) => {
    console.log('Добавлен в корзину:', product);
  };

  return(
    <ProductList productList={productModel} addToCart={addToCart}/>
  );
}