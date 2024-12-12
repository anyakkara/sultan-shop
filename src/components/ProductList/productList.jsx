'use client';

import salestyle from './productList.module.scss';
import products from '../../data/data.json';
import ProductCard from './productCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ProductList = ({ brands = [], sortType = 'nameasc' }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
  };
  
  const filteredProducts = products.filter((product) => {
    const matchesBrand = brands.length === 0 || brands.includes(product.brand);
    const isPopular = product.status.includes('popular');
    return isPopular && matchesBrand;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortType) {
      case 'nameasc':
        return a.nameRu.localeCompare(b.nameRu);
      case 'namedesc':
        return b.nameRu.localeCompare(a.nameRu);
      case 'priceasc':
        return a.price - b.price;
      case 'pricedesc':
        return b.price - a.price;
      default:
        return 0;
    }
  });
  
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
        {renderProductCards(sortedProducts, false)}
      </div>
      
      <div className={salestyle.product_container_m}>
        {renderProductCards(sortedProducts, false)}
      </div>
      
      <div className={salestyle.product_container_mobile}>
        {renderProductCards(sortedProducts, true)}
      </div>
    </div>
  );
};

export default ProductList;