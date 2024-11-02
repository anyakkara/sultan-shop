"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import style from './BrandSlider.module.css';

// Компонент промо-слайдера
const BrandSlider = () => {

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Navigation, Pagination]}
            className={style.sliderContainer}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={style.slide}>
                        <div className={style.imageContainer}>
                            <Image src={slide.pic} alt={slide.title} layout="fill" objectFit="cover" className={style.slideImage} />
                        </div>
                        <div className={style.textContainer}>
                            <small className={style.uptodate}>{slide.uptodate}</small>
                            <h2 className={style.title}>{slide.title}</h2>
                            <p className={style.description}>{slide.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BrandSlider;