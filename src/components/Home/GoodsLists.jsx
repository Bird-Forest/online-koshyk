import React from "react";
import styles from "./goods.module.css";
import { allProducts } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function GoodsLists() {
  return (
    <ul className={styles.wrapList}>
      {allProducts.map((item) => (
        <li key={item.id} className={styles.goodsItem}>
          <Link href={`/${item.slug}`} className={styles.goodsItem}>
            <Image
              alt={item.name}
              src={item.image_tag}
              width={480}
              height={480}
              loading="eager"
              className={styles.img}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
