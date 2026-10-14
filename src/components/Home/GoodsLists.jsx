import React from "react";
import styles from "./goods.module.css";
import { allProducts } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { FaEllipsisH } from "react-icons/fa";

export default function GoodsLists() {
  const filteProducts = allProducts.filter((item) => item.variant === 1);
  return (
    <ul className={styles.wrapList}>
      {filteProducts.map((item) => (
        <li key={item.id} className={styles.goodsItem}>
          <Image
            alt={item.name}
            src={item.image_tag}
            width={480}
            height={480}
            loading="eager"
            className={styles.img}
          />
          <Link href={`/${item.slug}`} className={styles.more}>
            <FaEllipsisH />
          </Link>
        </li>
      ))}
    </ul>
  );
}
