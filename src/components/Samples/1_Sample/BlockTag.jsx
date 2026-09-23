import React from "react";
import styles from "./1_samples.module.css";
import Image from "next/image";

export default function BlockTag({ item }) {
  return (
    <div className={styles.wrapImg}>
      <Image
        alt={item.name}
        src={item.image_1}
        width={480}
        height={480}
        loading="eager"
        className={styles.imgBasic}
      />
      <div
        className={styles.boxPrice}
        style={{ backgroundColor: `${item.primary}` }}
      >
        <h3>{item.price}</h3>
      </div>
    </div>
  );
}
