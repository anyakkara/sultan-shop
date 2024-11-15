"use client";



import Footer from '@/components/Footer/Footer.js'
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";

import 'typeface-inter';

import PromoSlider from '../components/PromoSlider/PromoSlider';
import CategoriesList from '../components/Categories/Categories';



import productModel from './data.js';
import {ProductList} from '@/components/ProductList/productList';

export default function Home() {
    return (
        <div className={styles.page}>
            <Header/>
            <Banner/>
            <main className={styles.main}>
                <ProductList productList={productModel}/>
                <CategoriesList />
                <PromoSlider />
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </div>
    );
};


