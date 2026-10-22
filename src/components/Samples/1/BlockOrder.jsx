import React from "react";
import styles from "./sample_1.module.css";
import { TbClockExclamation } from "react-icons/tb";

export default function BlockOrder({ item, openForm }) {
  const styleBox = {
    color: `${item.secondary}`,
    backgroundColor: `${item.primary}`,
  };
  return (
    <div className={styles.wrapOrder}>
      <div className={styles.wrapCall} style={{ color: `${item.secondary}` }}>
        <span className={styles.icon}>{item.icon}</span>
        <h4 className={styles.call}>{item.call}</h4>
      </div>
      <a
        href="#order-form"
        onClick={openForm}
        className={styles.btnOrder}
        style={styleBox}
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
