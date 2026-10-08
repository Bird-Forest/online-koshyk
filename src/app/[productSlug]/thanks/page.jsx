"use client";

import Gratitude from "@/components/Helper/Gratitude";
import React from "react";
import styles from "../../page.module.css";
import { useEffect } from "react";

export default function ThanksPage({ params }) {
  const { productSlag } = params;

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Проверяем, отправляли ли мы уже событие в этой сессии
    const storageKey = `lead_tracked_${productSlag}`;
    const isAlreadyTracked = sessionStorage.getItem(storageKey);

    if (!isAlreadyTracked && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: productSlag,
      });

      // Отмечаем, что событие отправлено
      sessionStorage.setItem(storageKey, "true");
    }
  }, [productSlag]);
  return (
    <section className={styles.landing}>
      <Gratitude />
    </section>
  );
}
