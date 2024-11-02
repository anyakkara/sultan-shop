"use client";

import Footer from '@/components/Footer.js'
import styles from "./page.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

import 'typeface-inter';

import PromoSlider from './PromoSlider';
import CategoriesList from './Categories';

import {productModel} from './data.js';
import {ProductList} from './ProductList/productList.js';

export default function Home() {
    const addToCart = (product) => {
        console.log('Добавлен в корзину:', product);
    };

    return (
        <div className={styles.page}>
            <Header/>
            <Banner/>
            <main className={styles.main}>
                <ProductList productList={productModel} addToCart={addToCart}/>
                <CategoriesList />
                <PromoSlider />
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
}

