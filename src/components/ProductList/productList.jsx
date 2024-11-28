'use client';

import salestyle from './productList.module.scss';
import products from '../../data/data.json';
import ProductCard from './productCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ProductList = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
  };

  return (
    <div>
      <h1 className={salestyle.sale}>
        АКЦИОННЫЕ
        <span className={salestyle.pr}> ТОВАРЫ</span>
      </h1>

      <div className={salestyle.product_conteiner_l}>
        {products
          .slice(0, 8)
          .filter((product) => product.status.includes('popular'))
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              status={product.status}
              image={product.image}
              size={product.size}
              descript={product.descript}
              barcode={product.barcode}
              nameRu={product.nameRu}
              brand={product.brand.name}
              price={product.price}
            />
          ))}
      </div>

      <div className={salestyle.product_conteiner_m}>
        {products
          .slice(0, 6)
          .filter((product) => product.status.includes('popular'))
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              status={product.status}
              image={product.image}
              size={product.size}
              descript={product.descript}
              barcode={product.barcode}
              nameRu={product.nameRu}
              brand={product.brand.name}
              price={product.price}
            />
          ))}
      </div>

      <div className={salestyle.product_conteiner_mobile}>
        <Slider {...sliderSettings}>
          {products
            .slice(0, 8)
            .filter((product) => product.status.includes('popular'))
            .map((product) => (
              <ProductCard
                className={salestyle.product_card}
                key={product.id}
                id={product.id}
                status={product.status}
                image={product.image}
                size={product.size}
                descript={product.descript}
                barcode={product.barcode}
                nameRu={product.nameRu}
                brand={product.brand.name}
                price={product.price}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductList;
