import React from "react";
import styles from "./1_samples.module.css";

export default function BlockDescription({ item }) {
  return (
    <article className={styles.wrapDescript}>
      <ul className={styles.noteList}>
        {item.description.map((el) => (
          <li key={el.idd} className={styles.wrapNote}>
            <p className={styles.note} style={{ color: `${item.secondary}` }}>
              {el.text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
