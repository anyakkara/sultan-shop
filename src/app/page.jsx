"use client";

import Banner from "@/components/Banner";
import ProductList from '@/components/ProductList';
import products from '@/data/data.json';
import CategoriesList from '../components/Categories';
import PromoSlider from '../components/PromoSlider';
import styles from "./page.module.scss";

export default function Home() {
    return (
        <div className={styles.page}>
            <Banner />
            <main className={styles.main}>
                <ProductList products={products.slice(0, 5)} />
                <CategoriesList />
                <PromoSlider />
            </main>
        </div>
    );
};
