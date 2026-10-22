import React from "react";
import styles from "./sample_1.module.css";
// import Arrow from "../Helper/Arrow";
import { FaPiggyBank } from "react-icons/fa6";
import Arrow from "@/components/Helper/Arrow";

export default function BlockPrice({ item }) {
  const saving = item.price - item.price_new;
  return (
    <div className={styles.wrapPrice}>
      <ul className={styles.casePrice}>
        <h4
          className={styles.priceTitle}
          style={{ color: `${item.secondary}` }}
        >
          НЕ ПОДОБАЄТЬСЯ
        </h4>
        {item.reasons.map((el) => (
          <li
            key={el.idr}
            className={styles.reason}
            style={{ color: `${item.secondary}` }}
          >
            {`${el.text}\u00A0`}
            {el.iconReason}
          </li>
        ))}
      </ul>
      <div className={styles.wrapArrow}>
        <Arrow />
      </div>
      <div className={styles.casePrice}>
        <h4
          className={styles.priceTitle}
          style={{ color: `${item.secondary}` }}
        >
          ВСТИГНИ ПРИДБАТИ ЗА ЦІНОЮ
        </h4>
        <p className={styles.value}>{item.price_new} грн</p>
      </div>
      <div className={styles.casePrice} style={{ color: `${item.secondary}` }}>
        <p className={styles.reason} style={{ color: `${item.secondary}` }}>
          <FaPiggyBank /> {`\u00A0економія ${saving} грн`}
        </p>
        <p className={styles.reason}>більше 500 задоволених власників</p>
      </div>
    </div>
  );
}
