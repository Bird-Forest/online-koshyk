"use client";

import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import styles from "./sample_2.module.css";

export default function BlockPhoto({ item }) {
  const [index, setIndex] = useState(1);

  const btnBox = {
    color: `${item.secondary}`,
    backgroundColor: `${item.bg_color}`,
    border: `2px solid ${item.bg_color}`,
  };

  const onChangeValue = (value) => {
    setIndex((prevIndex) => prevIndex + value);
  };

  const total = item.arrImg.length;

  return (
    <div className={styles.wrapPhoto}>
      <Image
        alt={item.name}
        src={item.arrImg[index - 1]}
        width={480}
        height={480}
        loading="eager"
        className={styles.imgBasic}
      />
      <div className={styles.caseBtn}>
        <button
          className={styles.btnIcon}
          style={btnBox}
          disabled={index === 1}
          onClick={() => onChangeValue(-1)}
        >
          <FaArrowLeftLong />
        </button>
        <button
          className={styles.btnIcon}
          style={btnBox}
          disabled={index === total}
          onClick={() => onChangeValue(+1)}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}
