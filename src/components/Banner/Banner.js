"use client";

import React from "react";
import styles from "./Banner.module.scss";
import BigYellowButton from "@/components/BigButton/BigButton";
import * as m from "@/paraglide/messages.js";

const Insight = ({ children }) => {
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
                {m.banner_insight1_1()}<br/>{m.banner_insight1_2()}
            </p>
        </Insight>
    );
}

const Insight2 = () => {
    return (
        <Insight>
            <p>
                {m.banner_insight2_1()}<br/><b>{m.banner_insight2_2()}</b>
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
                        <h1 className={styles.bannerHeading}>{m.banner_heading()}</h1>
                        <p className={styles.bannerSubheading}>{m.banner_subheading()}</p>
                        <div className={styles.buttonParent}>
                            <BigYellowButton href="/catalogue">{m.banner_button()}</BigYellowButton>
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
