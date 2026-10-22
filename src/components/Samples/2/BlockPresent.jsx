import React from "react";
import Image from "next/image";
import styles from "./sample_2.module.css";
import { FaPaw } from "react-icons/fa6";

export default function BlockPresent({ item, onChangePresent, selectedValue }) {
  return (
    <div className={styles.wrapSelect}>
      <h4 style={{ color: `${item.secondary}` }}>
        Один подарунок на твій вибір
      </h4>
      <ul className={styles.listPresent}>
        {item.presents.map((el) => {
          const isChecked = selectedValue === String(el.id);
          return (
            <li key={el.id} className={styles.wrapPresent}>
              <label
                className={styles.selectPresent}
                style={{
                  backgroundColor: `${item.secondary}`,
                  color: `${item.main}`,
                }}
              >
                <FaPaw />
                <input
                  type="radio"
                  name="present"
                  value={el.id}
                  checked={isChecked}
                  onChange={onChangePresent}
                  className={styles.inputPresent}
                />
              </label>
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
