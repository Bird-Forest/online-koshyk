import React from "react";
import styles from "./samples.module.css";
import Image from "next/image";

export default function BlockImgArr({ item }) {
  const imgArr = item.image_arr;
  return (
    <ul className={styles.imgList}>
      {imgArr.map((el, i) => (
        <li key={i} className={styles.wrapImg}>
          <Image
            alt={item.name}
            src={imgArr[i]}
            width={480}
            height={480}
            loading="eager"
            className={styles.imgBasic}
          />
        </li>
      ))}
    </ul>
  );
}
