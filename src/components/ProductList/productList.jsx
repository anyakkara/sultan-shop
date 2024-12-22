'use client';

import salestyle from './productList.module.scss';
import ProductCard from './productCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ProductList = ({ products = [], isSlider = false }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
  };

  const renderProductCards = (productList, isSlider = false) => {
    if (isSlider) {
      return (
        <Slider {...sliderSettings}>
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              status={product.status}
              image={product.image}
              size={product.size}
              descript={product.descript}
              barcode={product.barcode}
              nameRu={product.nameRu}
              brand={product.brand}
              price={product.price}
            />
          ))}
        </Slider>
      );
    }
    
    return (
      <>
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            status={product.status}
            image={product.image}
            size={product.size}
            descript={product.descript}
            barcode={product.barcode}
            nameRu={product.nameRu}
            brand={product.brand}
            price={product.price}
          />
        ))}
      </>
    );
  };

  return (
    <div>
      <div className={salestyle.product_container_l}>
        {renderProductCards(products, false)}
      </div>
      
      <div className={salestyle.product_container_m}>
        {renderProductCards(products, false)}
      </div>
      
      <div className={salestyle.product_container_mobile}>
        {renderProductCards(products, true)}
      </div>
    </div>
  );
};

export default ProductList;
