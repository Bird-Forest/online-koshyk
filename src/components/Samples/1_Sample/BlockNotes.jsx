import React from "react";
import styles from "./1_samples.module.css";
import Image from "next/image";

export default function BlockNotes({ item }) {
  return (
    <div className={styles.wrapNotes}>
      <Image
        alt={item.name}
        src={item.image_2}
        width={480}
        height={480}
        loading="eager"
        className={styles.imgBasic}
      />
      <div className={styles.notes}>
        <div className={styles.discount}>
          <h3>ЗНИЖКА</h3>
          <p>{item.discount}</p>
        </div>
        {item.notes.length > 0 && (
          <ul className={styles.noteList}>
            {item.notes.map((el) => (
              <li
                key={el.idn}
                className={styles.wrapNote}
                style={{ backgroundColor: `${item.primary}` }}
              >
                <p
                  className={styles.note}
                  style={{ color: `${item.secondary}` }}
                >
                  {el.text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
