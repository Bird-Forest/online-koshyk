"use client";
import React from "react";
// import { useState } from "react";
import styles from "./order.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { scheme } from "@/constants/schemeUser";
import InputText from "./InputText";
import InputRadio from "./InputRadio";
import Spinner from "../Helper/Spinner";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";

const messengers = [
  { id: 1, value: "Viber", bgClass: styles.viber },
  { id: 2, value: "Telegram", bgClass: styles.telegram },
  { id: 1, value: " Whatsapp", bgClass: styles.whatsapp },
];

export default function UserForm({ item, property }) {
  const router = useRouter();
  // const id = crypto.randomUUID();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(scheme),
  });

  // const colorProduct = item.select ? selectedColor : "";
  // console.log("propertyForm", property);
  const parentId = item.category?.parent_id;
  const product = {
    category_id: parentId,
    productId: item.id,
    name: item.name,
    purchased_price: item.price_new,
    quantity: 1,
    properties: [
      {
        name: property.name,
        value: property.value,
      },
    ],
  };

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const order = {
          source_id: 1,
          source_uuid: nanoid(8),
          buyer_comment: data.messenger,
          buyer: {
            full_name: `${data.name + " " + data.surname}`,

            phone: `${"+38" + data.phone}`,
          },
          marketing: {
            utm_term: "landing page",
          },
          products: [product],
        };
        console.log("USER", order);
        router.replace(`${item.slug}/thanks`);
      })}
      id="order-form"
      className={styles.form}
    >
      <InputRadio
        type="radio"
        name="messenger"
        arr={messengers}
        register={register}
        errors={errors}
      />
      <InputText
        name="name"
        placeholder="Ваше ім'я"
        register={register}
        errors={errors}
      />
      <InputText
        name="surname"
        placeholder="Ваше прізвище"
        register={register}
        errors={errors}
      />
      <InputText
        name="phone"
        placeholder="Ваш номер телефону"
        register={register}
        errors={errors}
      />
      <button
        type="submit"
        // isSubmitting={isSubmitting}
        // disabled={isSubmitting}
        className={styles.btnSubmit}
        style={{ color: `${item.primary}` }}
      >
        {isSubmitting ? <Spinner /> : "Я це хочу"}
      </button>
    </form>
  );
}
