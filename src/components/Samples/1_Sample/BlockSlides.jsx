import React from "react";
import styles from "./1_samples.module.css";
import Image from "next/image";

export default function BlockSlides({ item, onChangeColor, selectedColor }) {
  return (
    <div className={styles.slidesBox}>
      <h4 className={styles.noteTitle} style={{ color: `${item.secondary}` }}>
        Обери колір
      </h4>
      <ul className={styles.selectList}>
        {item.select.map((el) => {
          const isSelected = selectedColor === el.value;
          return (
            <li key={el.fill} className={styles.selectWrap}>
              <input
                type="radio"
                name="slider"
                value={el.value}
                checked={isSelected}
                onChange={onChangeColor}
                className={styles.selectInput}
                style={{ backgroundColor: `${el.fill}` }}
              />
            </li>
          );
        })}
      </ul>
      <ul className={styles.slidesWrap}>
        {item.select.map((el) => {
          const isSelected = selectedColor === el.value;
          return (
            <li
              key={el.fill}
              className={
                isSelected ? `${styles.wrapper}` : `${styles.wrapperNone}`
              }
            >
              <Image
                alt={el.name}
                src={el.img}
                width={280}
                height={280}
                loading="eager"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
