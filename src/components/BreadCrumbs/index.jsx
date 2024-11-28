'use client';

import { Link } from "@/lib/i18n"
import styles from './BreadCrumbs.module.scss';

export default function BreadCrumbs({ paths }) {
  return (
    <div className={styles.BreadCrumbs}>
      {Object.entries(paths).map(([name, url], index, array) => (
          <Link key={url} href={url}>{name}</Link>
      ))}
    </div>
  );
}
