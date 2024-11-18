"use client";
import salestyle from './productList.module.scss';
import products from '../../data/data.json';
import ProductCard from './productCard';


const ProductList =()=>
  {
      return(
       <div>
          <div className={salestyle.desktop}>
            <h1 className={salestyle.sale}>АКЦИОННЫЕ
                <span className={salestyle.pr}> ТОВАРЫ</span>
            </h1>

            <div className={salestyle.product_conteiner_l}>
                {products
                .slice(0,8)
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
                ))
                }
           </div>

           <div className={salestyle.product_conteiner_m}>
                {products
                .slice(0,6)
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
                ))
                }
           </div>





          </div>
            

       </div>
      )
  };

export default ProductList;
    