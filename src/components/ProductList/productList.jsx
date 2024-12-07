'use client';

import salestyle from './productList.module.scss';
import products from '../../data/data.json';
import ProductCard from './productCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import * as m from '@/paraglide/messages.js';
import { languageTag } from "@/paraglide/runtime";

const ProductList = () => {
  return (
    <div>
      <h1 className={salestyle.sale}>
        {m.sale()}
        <span className={salestyle.pr}>{m.product()}</span>
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
              size={product.size + ' ' + [languageTag() === 'en' ? product.unitEn : product.unitRu]}
              descript={languageTag() === 'en' ? product.nameEn : product.nameRu}
              barcode={product.barcode}
              nameRu={product.nameRu}
              brand={product.brand}
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
              size={product.size + ' ' + [languageTag() === 'en' ? product.unitEn : product.unitRu]}
              descript={languageTag() === 'en' ? product.nameEn : product.nameRu}
              barcode={product.barcode}
              nameRu={product.nameRu}
              brand={product.brand}
              price={product.price}
            />
          ))}
      </div>

      <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Navigation, Pagination]}
      className={salestyle.product_conteiner_mobile}
      >
        <div>
          {products
          .slice(0, 8)
          .filter((product) => product.status.includes('popular'))
          .map((product, id) => (
            <SwiperSlide key={id}>
              <ProductCard
                className={salestyle.product_card}
                key={product.id}
                id={product.id}
                status={product.status}
                image={product.image}
                size={product.size + ' ' + [languageTag() === 'en' ? product.unitEn : product.unitRu]}
                descript={languageTag() === 'en' ? product.nameEn : product.nameRu}
                barcode={product.barcode}
                nameRu={product.nameRu}
                brand={product.brand}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper> 
    </div>
  );
};

export default ProductList;
