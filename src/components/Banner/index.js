'use client';

import React from 'react';
import BigYellowButton from '@/components/BigButton';
import * as m from '@/paraglide/messages.js';
import styles from './Banner.module.scss';

const Insight = ({ text1, text2, isBold = false }) => {
  return (
    <div className={styles.insight}>
      <div className={styles.insightCircle}>+</div>
      <div className={styles.insightText}>
        <p>
          {text1}
          <br />
          {isBold ? <b>{text2}</b> : text2}
        </p>
      </div>
    </div>
  );
};

const Insights = ({ selectedInsight }) => {
  const insightsData = [
    {
      id: 1,
      text1: m.banner_insight1_1(),
      text2: m.banner_insight1_2(),
      isBold: false,
    },
    {
      id: 2,
      text1: m.banner_insight2_1(),
      text2: m.banner_insight2_2(),
      isBold: true,
    },
  ];

  const filteredInsights = selectedInsight
    ? insightsData.filter((insight) => insight.id === selectedInsight)
    : insightsData;

  return (
    <>
      {filteredInsights.map(({ id, text1, text2, isBold }) => (
        <Insight key={id} text1={text1} text2={text2} isBold={isBold} />
      ))}
    </>
  );
};

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerText}>
            <h1 className={styles.bannerHeading}>{m.banner_heading()}</h1>
            <p className={styles.bannerSubheading}>{m.banner_subheading()}</p>
            <div className={styles.buttonParent}>
              <BigYellowButton href="/catalogue">
                {m.banner_button()}
              </BigYellowButton>
            </div>
            <div className={styles.insightsBox}>
              <Insights selectedInsight={1} />
              <Insights selectedInsight={2} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileInsightsBox}>
        <Insights selectedInsight={1} />
        <Insights selectedInsight={2} />
      </div>
    </>
  );
};

export default Banner;
