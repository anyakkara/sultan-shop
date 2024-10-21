import React from 'react';

function ProductCard(props){

  return(
    //<img src={props.image}></img>
    <div>
      <p>{props.sizetype}</p>
      <p>Штрихкод:{props.barcode}</p>
      <p>Производитель:{props.nameRu}</p>
      <p>Бренд:{props.brend}</p>
      <p>{props.price}</p>
      <button>в корзину</button>
    </div>

  );
};


export const ProductList =({productList})=>
{
  return(
    <div>
      {productList.map((product)=>
        (<ProductCard
          key ={product.id}
          sizetype = {product.sizetype}
          barcode = {product.barcode}
          nameRu = {product.nameRu}
          brend = {product.brend}
          price = {product.price}/>
        ))}


    </div>
  )
}

export default function Home() {
  return(
    <ProductList/>

  );
}