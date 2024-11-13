"use client";

import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import styles from "@/app/product/Product.module.scss"
import Image from "next/image";
import SampleProduct from '@/assets/images/sample_product.png';
import WeightLogo from '@/assets/images/weight.svg';
import BigYellowButton from "@/components/BigYellowButton/BigYellowButton";
import CartLogo from '@/assets/images/small_cart.svg';
import ShareLogo from '@/assets/images/share.svg';
import DownloadLogoDark from '@/assets/images/download_dark.svg';

const downloadPriceList = () => {
    const link = document.createElement('a');
    link.href = 'Прайс-лист.pdf';
    link.download = 'Прайс-лист.pdf';
    link.click();
};

const ProductDetailedInfo = () => {
    const productInfo = {
        'Производитель': 'BioMio',
        'Бренд': 'BioMio',
        'Артикул': '460404',
        'Кол-во в коробке': 2,
        'Штрихкод': '4604049097548',
        'Размеры коробки (Д*Ш*В)': '10х10х10',
        'Вес коробки': '1020 г'
    };

    return (
        <ul className={styles.ProductDetailedInfo}>
            {Object.entries(productInfo).map(([key, value]) => (
                <li key={key}>
                    {key}: <strong>{value}</strong>
                </li>
            ))}
        </ul>
    );
}

export default function ProductCard() {
    return (
        <div className={styles.container}>
            <BreadCrumbs/>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={SampleProduct} alt={"Product"}/>
                </div>
                <div className={styles.info}>
                    <span className={styles.isAvailable}>В наличии</span>
                    <h1 className={styles.title}><span
                        className={styles.titleHighlight}>BioMio BIO-SOAP</span> Экологичное туалетное мыло. Литсея и
                        бергамот</h1>
                    <span className={styles.weight}>
                        <Image src={WeightLogo} alt={"Weight"}/>
                        <span>90 г</span>
                    </span>
                    <div className={styles.PriceCartContainer}>
                        <span className={styles.price}>48,76 ₸</span>
                        <div className={styles.quantity}>
                            <span className={styles.minusplus}>-</span>
                            <span className={styles.count}>1</span>
                            <span className={styles.minusplus}>+</span>
                        </div>
                        <div className={styles.buttonContainer}>
                            <BigYellowButton href={'#'}>
                                <span>В корзину</span>
                                <Image src={CartLogo} alt={"Cart Logo"}/>
                            </BigYellowButton>
                        </div>

                    </div>
                    <div className={styles.outlines}>
                        <div className={styles.ShareButton}><Image src={ShareLogo} alt={'Share logo'}/></div>
                        <div>При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области</div>
                        <div className={styles.PriceList} onClick={() => downloadPriceList()}>
                            <span>Прайс-лист</span>
                            <Image src={DownloadLogoDark} alt={'Download logo'}/>
                        </div>
                    </div>
                    <div className={styles.DetailedInfo}>
                        <ProductDetailedInfo/>
                    </div>

                </div>
            </div>
        </div>
    );
}