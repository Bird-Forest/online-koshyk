import React from "react";
import styles from "../page.module.css";
import ControlProduct from "@/components/Admin/ControlProduct";
import GoodsLists from "@/components/Home/GoodsLists";

export default function MakePage() {
  return (
    <section className={styles.landing}>
      <h3 className={styles.title}>Сторінка товару</h3>
      <GoodsLists />
      <ControlProduct />
    </section>
  );
}
