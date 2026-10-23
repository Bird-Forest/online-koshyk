"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./goods.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";

export default function CurrentProduct({ item }) {
  return (
    <div className={styles.goodsItem}>
      <p className={styles.titleItem}>
        <FaCartArrowDown />
        {item.name}
      </p>
      <Image
        alt={item.name}
        src={item.image_tag}
        width={480}
        height={480}
        loading="eager"
        className={styles.img}
      />
      <Link href={`/${item.slug}`} className={styles.more}>
        Переглянути товар
        <FaArrowRight />
      </Link>
    </div>
  );
}
