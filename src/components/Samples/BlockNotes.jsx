import React from "react";
import styles from "./samples.module.css";
import { BsCheckCircleFill } from "react-icons/bs";

export default function BlockNotes({ item }) {
  return (
    <div className={styles.wrapDescript}>
      {item.notes.length > 0 && (
        <ul className={styles.noteList}>
          {item.notes.map((el) => (
            <li key={el.idn} className={styles.descript}>
              <span className={styles.iconWrap}>
                <BsCheckCircleFill className={styles.iconMark} />
              </span>
              <p className={styles.note} style={{ color: `${item.secondary}` }}>
                {el.text}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
