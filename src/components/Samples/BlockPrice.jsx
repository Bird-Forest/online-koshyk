import React from "react";
import styles from "./samples.module.css";
import { BsFire } from "react-icons/bs";

export default function BlockPrice({ item }) {
  return (
    <>
      <div className={styles.wrapNotes}>
        <h4 className={styles.noteTitle} style={{ color: `${item.secondary}` }}>
          <BsFire />
          Встигни придбати за ціною
          <BsFire />
        </h4>
        <p className={styles.value}>{item.price_new} грн</p>
      </div>
      <div className={styles.wrapCall} style={{ color: `${item.secondary}` }}>
        <span className={styles.icon}>{item.icon}</span>
        <h4 className={styles.call}>{item.call}</h4>
      </div>
    </>
  );
}
