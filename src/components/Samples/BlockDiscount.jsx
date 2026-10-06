import React from "react";
import styles from "./samples.module.css";
import { TbShoppingBagDiscount } from "react-icons/tb";

export default function BlockDiscount({ item }) {
  return (
    <div className={styles.blockDiscont}>
      <TbShoppingBagDiscount />
      <p>ЗНИЖКА</p>
      <p>{item.discount}</p>
    </div>
  );
}
