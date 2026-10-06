import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import styles from "./samples.module.css";

export default function BlockWarning({ item }) {
  return (
    <div className={styles.descript}>
      <span className={styles.iconWarn}>
        <FaExclamationCircle />
      </span>
      <p className={styles.note} style={{ color: `${item.secondary}` }}>
        {item.warning}
      </p>
    </div>
  );
}
