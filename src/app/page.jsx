"use client";

import styles from "./page.module.scss";
import Banner from "@/components/Banner/Banner";
import PromoSlider from '../components/PromoSlider/PromoSlider';
import CategoriesList from '../components/Categories/Categories';

import ProductList from '@/components/ProductList';
// import * as m from "@/paraglide/messages.js"
// import { languageTag } from "@/paraglide/runtime"

export default function Home() {
    return (
        <div className={styles.page}>
            <Banner/>
            <div>
                {/*<p>{languageTag()}</p>*/}
                {/*<p>{m.hello_world()}</p>*/}
            </div>
            <main className={styles.main}>
                <ProductList />
                <CategoriesList />
                <PromoSlider />
            </main>
        </div>
    );
};


