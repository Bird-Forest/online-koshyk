import React from "react";
import styles from "./sample_2.module.css";
import Image from "next/image";

export default function BlockHero({ item }) {
  const styleBox = {
    color: `${item.main}`,
    backgroundColor: `${item.secondary}`,
  };
  return (
    <div className={styles.wrapHero}>
      <Image
        alt={item.name}
        src={item.image_tag}
        width={480}
        height={480}
        loading="eager"
        className={styles.imgBasic}
      />
      <p className={styles.tagPrice} style={styleBox}>
        {item.price} грн
      </p>
    </div>
  );
}
