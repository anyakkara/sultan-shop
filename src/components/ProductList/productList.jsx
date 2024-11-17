"use client";
import salestyle from './productList.module.scss';
import productModel from '../../data/data';
import ProductCard from './productCard';

const ProductList =()=>
  {
      return(
       <div>
            <h1 className={salestyle.sale}>АКЦИОННЫЕ
                <span className={salestyle.pr}> ТОВАРЫ</span>
            </h1>

            <div className={salestyle.product_conteiner}>
                {productModel
                
                
                .map((product)=>
                (<ProductCard  
                  key ={product.id}
                  status = {product.status}
                  image={product.image}
                  size = {product.size}
                  descript = {product.descript}
                  barcode = {product.barcode}
                  nameRu = {product.nameRu}
                  brand = {product.brand.name}
                  price = {product.price}
                  />
                ))}
           </div>

       </div>
      )
  };

export default ProductList;
    