import React from "react";
import styles from "./sample_1.module.css";

export default function BlockFeatures({ item }) {
  return (
    <ul className={styles.wrapFeatures}>
      {item.notes.map((el) => (
        <li key={el.idn} className={styles.wrapFeature}>
          <span
            className={styles.iconWrap}
            style={{ color: `${item.primary}` }}
          >
            {el.iconNote}
          </span>
          <p className={styles.note} style={{ color: `${item.primary}` }}>
            {el.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
