import React from "react";
import styles from "./1_samples.module.css";

export default function BlockOrder({ item, openForm }) {
  return (
    <>
      <a
        href="#order-form"
        onClick={openForm}
        className={styles.btnOrder}
        style={{ color: `${item.primary}` }}
      >
        Замовити
      </a>
      <p className={styles.note} style={{ color: `${item.secondary}` }}>
        Пропозиція обмежена <span>*</span>
      </p>
    </>
  );
}
