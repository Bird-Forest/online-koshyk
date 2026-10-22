import React from "react";
import styles from "./sample_2.module.css";
import { BsBox2HeartFill } from "react-icons/bs";

export default function BlockUserOrder({ item, present, openForm }) {
  const btnBox = {
    color: `${item.main}`,
    backgroundColor: `${item.secondary}`,
  };
  const propBox = {
    color: `${item.primary}`,
    backgroundColor: `${item.main}`,
  };
  return (
    <div className={styles.wrapUserOrder}>
      <div className={styles.titleUserOrder} style={btnBox}>
        <h4>Ваше замовлення</h4>
        <BsBox2HeartFill />
      </div>
      <article className={styles.textUserOrder} style={propBox}>
        <h6>Основний товар:</h6>
        <p>{item.name}</p>
        <h6>Подарунок:</h6>
        <p>
          {present
            ? present.name
            : "Обери подарунок - тапай верхній правий кут"}
        </p>
        <h6>Сума до сплати {item.price_new}грн</h6>
      </article>
      <div className={styles.wrapCall} style={{ color: `${item.secondary}` }}>
        <span className={styles.iconCall}>{item.icon}</span>
        <h4 className={styles.textCall}>{item.call}</h4>
      </div>
      <a
        href="#order-form"
        onClick={openForm}
        className={styles.btnOrder}
        style={btnBox}
      >
        замовити зі знижкою
      </a>
    </div>
  );
}
