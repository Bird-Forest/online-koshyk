"use client";
import React from "react";
import styles from "./order.module.css";

export default function InputRadio({
  type,
  name,
  arr,
  register,
  errors,
  item,
}) {
  return (
    <div className={styles.boxInput}>
      <p className={styles.titleBox} style={{ color: `${item.primary}` }}>
        оберіть спосіб звʼязку{" "}
      </p>
      <ul className={styles.listRadio}>
        {arr.map((el, i) => (
          <li key={i} className={styles.itemRadio}>
            <input
              type={type}
              {...register(name)}
              value={el.value}
              className={`${styles.inputRadio} ${el.bgClass}`}
            />
          </li>
        ))}
      </ul>
      <p className={styles.error}>{errors?.[name]?.message}</p>
    </div>
  );
}
