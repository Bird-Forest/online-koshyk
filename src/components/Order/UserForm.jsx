"use client";
import React, { useState } from "react";
import styles from "./order.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { scheme } from "@/constants/schemeUser";
import InputText from "./InputText";
import InputRadio from "./InputRadio";
import Spinner from "../Helper/Spinner";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
// import BlockQuantity from "../Samples/1/BlockQuantity";

const messengers = [
  { id: 1, value: "Viber", bgClass: styles.viber },
  { id: 2, value: "Telegram", bgClass: styles.telegram },
  { id: 1, value: " Whatsapp", bgClass: styles.whatsapp },
];

export default function UserForm({ item, property, present }) {
  // const [quantity, setQuantity] = useState(item.quantity);
  const router = useRouter();

  const btnBox = {
    color: `${item.main}`,
    backgroundColor: `${item.secondary}`,
    border: `1px solid ${item.secondary}`,
  };
  // const handleQuantityChange = (newCount) => {
  //   setQuantity(newCount);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(scheme),
  });

  const parentId = item.category?.parent_id;
  const product = {
    category_id: parentId,
    productId: item.id,
    name: item.name,
    purchased_price: item.purchased,
    discount_percent: item.discount,
    price: item.price,
    quantity: item.quantity,
    properties: [
      {
        name: property.name,
        value: property.value,
      },
    ],
  };

  const onSubmit = async (data) => {
    // 1. Собираем объект заказа для KeyCRM
    const orderPayload = {
      source_id: 1,
      source_uuid: nanoid(8),
      buyer_comment: data.messenger,
      buyer: {
        full_name: `${data.name} ${data.surname}`.trim(),
        phone: `+38${data.phone}`,
      },
      marketing: {
        utm_term: "landing page",
      },
      products: [product, present],
    };
    // console.log(orderPayload);

    try {
      // 2. Вызываем наш Route Handler (/api/crm/route.js)
      const response = await fetch("/api/crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const result = await response.json();
      // console.log(result);

      if (!response.ok) {
        throw new Error(result.error || "Ошибка при отправке");
      }
      // alert("Заказ успешно создан!");
      router.replace(`${item.slug}/thanks`);
    } catch (error) {
      alert(`Не удалось отправить заказ: ${error.message}`);
    }
    // console.log(orderPayload);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="order-form"
      className={styles.form}
    >
      <InputRadio
        type="radio"
        name="messenger"
        arr={messengers}
        item={item}
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
      <button type="submit" className={styles.btnSubmit} style={btnBox}>
        {isSubmitting ? <Spinner /> : "Я це хочу"}
      </button>
    </form>
  );
}
