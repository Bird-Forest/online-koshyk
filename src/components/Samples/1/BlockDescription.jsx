import React from "react";
import styles from "./sample_1.module.css";
import Image from "next/image";

export default function BlockDescription({ item }) {
  const styleBox = {
    color: `${item.secondary}`,
    backgroundColor: `${item.primary}`,
  };
  return (
    <ul className={styles.wrapDescriptions}>
      {item.description.map((el) => (
        <li key={el.idd} className={styles.wrapDescription}>
          <div className={styles.boxDescription}>
            <Image
              alt={item.name}
              src={el.img_d}
              width={280}
              height={280}
              loading="eager"
              className={styles.imgDescription}
            />
            <span className={styles.iconDescription} style={styleBox}>
              {el.iconDescript}
            </span>
          </div>
          <p
            className={styles.description}
            style={{ color: `${item.secondary}` }}
          >
            {el.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
