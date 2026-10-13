import React from "react";
import styles from "./samples.module.css";
import { TbClockExclamation } from "react-icons/tb";

export default function BlockOrder({ item, openForm }) {
  return (
    <div className={styles.wrapOrder}>
      <a
        href="#order-form"
        onClick={openForm}
        className={styles.btnOrder}
        style={{ color: `${item.primary}` }}
      >
        Замовити зі знижкою
      </a>
      <p className={styles.orderNotice} style={{ color: `${item.secondary}` }}>
        <TbClockExclamation />
        Пропозиція обмежена <span>*</span>
      </p>
    </div>
  );
}
