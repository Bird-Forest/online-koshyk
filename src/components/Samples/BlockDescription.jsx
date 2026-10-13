import React from "react";
import styles from "./samples.module.css";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function BlockDescription({ item }) {
  return (
    <article className={styles.wrapDescript}>
      <ul className={styles.noteList}>
        {item.description.map((el) => (
          <li key={el.idd} className={styles.descript}>
            <span className={styles.iconWrap}>
              <BsFillHandThumbsUpFill className={styles.iconThumb} />
            </span>
            <p className={styles.note} style={{ color: `${item.secondary}` }}>
              {el.text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
