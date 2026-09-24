import React from "react";
import Image from "next/image";
import notFound from "../../../public/icons/not-found.webp";
import styles from "./helper.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.notFoundBox}>
      <div className={styles.thankBox}>
        <Image
          src={notFound}
          alt="Емодзі злий, розчарований"
          width={280}
          height={280}
          loading="eager"
          className={styles.emojiImg}
        />
      </div>
      <h4>Сторінку не знайдено</h4>
    </div>
  );
}
