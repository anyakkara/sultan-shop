import styles from '@/components/BreadCrumbs/BreadCrumbs.module.scss';
import Link from "next/link";
export default function BreadCrumbs() {
    return (
        <div className={styles.BreadCrumbs}>
            <Link href={"/"}>Главная</Link>
            <Link href={'/catalogue'}>Каталог</Link>
            <Link href={'/product'}>НАЗВАНИЕ ТОВАРА</Link>
        </div>
    );
}