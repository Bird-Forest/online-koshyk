import React from "react";
import Image from "next/image";
import styles from "./sample_2.module.css";
import { FaPaw } from "react-icons/fa6";

export default function BlockSelect({ item, onChangeColor, selectedColor }) {
  return (
    <div className={styles.wrapSelect}>
      <h4 style={{ color: `${item.secondary}` }}>{item.titleSelect}</h4>
      <ul className={styles.listRadio}>
        {item.select.map((el) => {
          const isSelected = selectedColor === el.value;
          return (
            <li
              key={el.fill}
              className={styles.wrapInput}
              style={{
                backgroundColor: `${item.secondary}`,
                color: `${el.fill}`,
              }}
            >
              <FaPaw />
              <input
                type="radio"
                name="slider"
                value={el.value}
                checked={isSelected}
                onChange={onChangeColor}
                className={styles.input}
              />
            </li>
          );
        })}
      </ul>
      <ul className={styles.listImg}>
        {item.select.map((el) => {
          const isSelected = selectedColor === el.value;
          return (
            <li
              key={el.fill}
              className={isSelected ? `${styles.on}` : `${styles.off}`}
            >
              <Image
                alt={el.name}
                src={el.img}
                width={280}
                height={280}
                loading="eager"
                className={styles.imgBasic}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
