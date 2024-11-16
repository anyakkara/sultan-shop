import styles from '@/components/BreadCrumbs/BreadCrumbs.module.scss';
import Link from "next/link";
import * as m from "@/paraglide/messages.js";

export default function BreadCrumbs() {
    return (
        <div className={styles.BreadCrumbs}>
            <Link href={"/"}>{m.home()}</Link>
            <Link href={'/catalogue'}>{m.catalogue()}</Link>
            <Link href={'/product'}>НАЗВАНИЕ ТОВАРА</Link>
        </div>
    );
}