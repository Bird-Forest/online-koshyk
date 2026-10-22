import React from "react";
import styles from "./sample_1.module.css";
import Image from "next/image";

export default function BlockMain({ item }) {
  return (
    <div className={styles.wrapMain}>
      <Image
        alt={item.name}
        src={item.image_tag}
        width={480}
        height={480}
        loading="eager"
        className={styles.imgBasic}
      />
      <div
        className={styles.boxPrice}
        style={{ backgroundColor: `${item.main}` }}
      >
        <h3>{item.price} грн</h3>
      </div>
    </div>
  );
}
