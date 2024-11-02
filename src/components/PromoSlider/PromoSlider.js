"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import promoslide1 from '../../app/images/promoslide1.jpg';
import style from './PromoSlider.module.css'; // Импортируем стили
import BigYellowButton from "@/components/BigYellowButton/BigYellowButton";

// Компонент промо-слайдера
const PromoSlider = () => {
    const slides = [
        {
            title: 'Название Акции',
            description: 'Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк',
            uptodate: '*Акция действует до 04/09/22',
            pic: promoslide1,
            link: '/promo',
        },
        {
            title: 'Название Акции2',
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
                            <BigYellowButton href={slide.link}>
                            <span>Принять участие</span>
                        </BigYellowButton>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PromoSlider;
