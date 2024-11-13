"use client";

import Footer from '@/components/Footer/Footer.js'
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";

import 'typeface-inter';

import PromoSlider from '../components/PromoSlider/PromoSlider';
import CategoriesList from '../components/Categories/Categories';

import {productModel} from './data.js';
import {ProductList} from '@/components/ProductList/productList.js';

export default function Home() {
    const addToCart = (product) => {
        console.log('Добавлен в корзину:', product);
    };

    return (
        <div className={styles.page}>
            <Banner/>
            <main className={styles.main}>
                <ProductList productList={productModel} addToCart={addToCart}/>
                <CategoriesList />
                <PromoSlider />
            </main>
        </div>
    );
}

