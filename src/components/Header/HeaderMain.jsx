import React from "react";
import styles from "./header.module.css";
import logo from "../../../public/icons/logo.webp";
import Image from "next/image";

export default function HeaderMain() {
  return (
    <header className={styles.headerMain}>
      <Image alt="logo" src={logo} className={styles.imgLogo} />
      <p className={styles.title}>
        <span>online</span>-кошик
      </p>
    </header>
  );
}
