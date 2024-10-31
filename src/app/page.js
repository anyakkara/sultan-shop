import React from 'react';
import styles from "./page.module.css";
import Header from "@/components/Header";

import 'typeface-inter';

import PromoSlider from './PromoSlider';
import CategoriesList from './Categories';

export default function Home() {
    return (
        <div className={styles.page}>
            <Header/> {}
            <main className={styles.main}>
                <p>Main body</p>
                {Array.from({ length: 100 }, (_, i) => (
                    <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor sit amet, consectetur adipiscing elit.
                    Ipsum dolor sit amet, consectetur adipiscing elit</p>
                ))}
                  <CategoriesList />
                  <PromoSlider />
            </main>
            <footer className={styles.footer}>
                <p>Footer</p>
            </footer>
        </div>
    );
}
