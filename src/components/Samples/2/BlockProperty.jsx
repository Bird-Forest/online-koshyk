"use client";
import React, { useState } from "react";
import styles from "./sample_2.module.css";

export default function BlockProperty({ item, arr, title }) {
  const [menu, setMenu] = useState(false);

  const buttonMenu = () => {
    setMenu(!menu);
  };
  const btnBox = {
    color: `${item.main}`,
    backgroundColor: `${item.secondary}`,
    border: `1px solid ${item.secondary}`,
  };
  const propBox = {
    color: `${item.primary}`,
    backgroundColor: `${item.main}`,
  };

  return (
    <div className={styles.wrapProperty}>
      <button
        type="button"
        onClick={buttonMenu}
        className={styles.btnProp}
        style={btnBox}
      >
        {title} {item.icon}
      </button>
      <div className={!menu ? `${styles.off}` : `${styles.on}`}>
        <ul className={styles.listProp}>
          {arr.map((el, i) => (
            <li key={i} className={styles.itemProp} style={propBox}>
              {el.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
