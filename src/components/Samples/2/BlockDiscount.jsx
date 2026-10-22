import React from "react";
import styles from "./sample_2.module.css";
import Image from "next/image";

export default function BlockDiscount({ item }) {
  return (
    <div className={styles.wrapHero}>
      <Image
        alt={item.name}
        src={item.image_notes}
        width={480}
        height={480}
        loading="eager"
        className={styles.imgBasic}
      />
    </div>
  );
}
