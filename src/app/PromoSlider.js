"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import promoslide1 from './images/promoslide1.jpg';
import styles from './PromoSlider.module.css'; // Импортируем стили

// Компонент промо-слайдера
const PromoSlider = () => {
    const slides = [
        {
            title: 'Название акции',
            description: 'Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк',
            uptodate: '*Акция действует до 04/09/22',
            pic: promoslide1,
            link: '/promo',
        },
        {
            title: 'Название акции2',
            description: 'Условия акции2 в пару строк, Условия акции2 в пару строк, Условия акции2 в пару строк',
            uptodate: '*Акция действует до 05/10/23',
            pic: promoslide1,
            link: '/promo',
        },
    ];

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Navigation, Pagination]}
            style={{ width: '100%', height: '100%' }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.sliderContainer}>
                        <Image src={slide.pic} alt={slide.title} className={styles.slideImage} />
                        <h2>{slide.title}</h2>
                        <p>{slide.description}</p>
                        <small>{slide.uptodate}</small>
                        <a href={slide.link} className={styles.link}>Узнать больше</a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PromoSlider;
