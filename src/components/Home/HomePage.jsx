import React from "react";
import styles from "./goods.module.css";
import { allProducts } from "@/data/products";
import CurrentProduct from "./CurrentProduct";

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
        <h2>Актуальний товар</h2>
      </div>
      <CurrentProduct item={item} />
    </div>
  );
}
