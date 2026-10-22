import React from "react";
import styles from "./sample_2.module.css";

export default function BlockPrice({ item }) {
  const styleBox = {
    color: `${item.main}`,
    backgroundColor: `${item.secondary}`,
  };
  return (
    <div className={styles.casePrice}>
      <div className={styles.wrapPrice} style={styleBox}>
        <h4 className={styles.title}>{item.price_new} грн</h4>
        <h5 className={styles.subTitle}>ВСТИГНИ ПРИДБАТИ ЗІ ЗНИЖКОЮ</h5>
      </div>
      <p>
        <span style={{ color: `${item.secondary}` }}>*</span>Пропозиція обмежена
      </p>
    </div>
  );
}
