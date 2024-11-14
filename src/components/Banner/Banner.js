"use client";

import React from "react";
import styles from "./Banner.module.scss";
import BigYellowButton from "@/components/BigButton/BigButton";

const Insight = ({children}) => {
    return (
        <div className={styles.insight}>
            <div className={styles.insightCircle}>
                +
            </div>
            <div className={styles.insightText}>
                {children}
            </div>
        </div>
    );
}

const Insight1 = () => {
    return (
        <Insight>
            <p>
                Только самые
                <br/>
                выгодные предложения
            </p>
        </Insight>
    );
}

const Insight2 = () => {
    return (
        <Insight>
            <p>
                <p>
                    Бесплатная доставка
                    <br/>
                    по <b>Кокчетаву от 10 тыс ₸</b>
                </p>
            </p>
        </Insight>
    );
}

const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerText}>
                        <h1 className={styles.bannerHeading}>Бытовая химия, косметика и хозтовары</h1>
                        <p className={styles.bannerSubheading}>Оптом по Кокчетаву и области</p>
                        <div className={styles.buttonParent}>
                            <BigYellowButton href="/catalogue">В КАТАЛОГ</BigYellowButton>
                        </div>
                        <div className={styles.insightsBox}>
                            <Insight1/>
                            <Insight2/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mobileInsightsBox}>
                <Insight1/>
                <Insight2/>
            </div>
        </>
    )
        ;
};

export default Banner;
