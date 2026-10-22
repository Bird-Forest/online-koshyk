import React from "react";
import styles from "./sample_1.module.css";
import Image from "next/image";

export default function BlockDiscountImg({ item }) {
  return (
    <div className={styles.wrapDiscount}>
      <Image
        alt={item.name}
        src={item.image_notes}
        width={480}
        height={480}
        loading="eager"
        className={styles.imgBasic}
      />
      <div className={styles.discount}>
        <h3>ЗНИЖКА</h3>
        <p>{`${item.discount}%`}</p>
      </div>
    </div>
  );
}
