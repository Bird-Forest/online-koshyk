import React from "react";
import styles from "./goods.module.css";
import { allProducts } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function HomePage() {
  const item = allProducts.find((item) => item.current === true);
  // console.log(item);
  return (
    <div className={styles.goodsWrap}>
      <div className={styles.goodsTitle}>
        <h1>ВІТАЄМО НА НАШОМУ САЙТІ</h1>
        <h2>Наша мета</h2>
        <p>
          запропонувати Вам корисні речі для вас, для вашого дому, затишку та
          життя.
        </p>
        <p>
          Ми постійно шукаємо практичні новинки та перевірені тренди й
          пропонуємо їх у нашому каталозі. Вам залишається лише найприємніше —
          обрати найкраще для себе!
        </p>
        <h3>Актуальний товар</h3>
      </div>

      <div className={styles.goodsItem}>
        <p className={styles.titleItem}>{item.name}</p>
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
    </div>
  );
}
