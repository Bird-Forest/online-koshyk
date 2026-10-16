"use client";
import React, { useState } from "react";
import styles from "./samples.module.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function BlockQuantity({ initialValue, onChange }) {
  const [count, setCount] = useState(initialValue);
  const min = 1;
  const max = 10;

  const handleDecrement = () => {
    if (count > min) {
      const newValue = count - 1;
      setCount(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const handleIncrement = () => {
    if (count < max) {
      const newValue = count + 1;
      setCount(newValue);
      if (onChange) onChange(newValue);
    }
  };
  return (
    <div className={styles.wrapCounter}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={count <= min}
        className={styles.btnCounter}
      >
        <FaMinus />
      </button>

      <input
        type="number"
        value={count}
        min={min}
        max={max}
        readOnly
        className={styles.counter}
      />
      <button
        type="button"
        onClick={handleIncrement}
        disabled={count >= max}
        className={styles.btnCounter}
      >
        <FaPlus />
      </button>
    </div>
  );
}
