"use client";

import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { scheme } from "@/constants/schemeProduct";
import InputText from "../Order/InputText";
import Spinner from "../Helper/Spinner";
import styles from "./admin.module.css";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(scheme),
  });

  const propertes = [
    {
      name: "",
      value: "",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        console.log("PRODUCT", data);
        const newProduct = {
          // id: crypto.randomUUID(),
          id: nanoid(8),
          category_id: data.category_id,
          name: data.name,
          currency_code: data.currency_code,
          price: data.price,
          unit_type: data.unit_type,
          picture: data.picture,
        };
        console.log(newProduct);
      })}
      className={styles.form}
    >
      <InputText
        name="category_id"
        placeholder="номер категорї"
        register={register}
        errors={errors}
      />
      <InputText
        name="name"
        placeholder="назва товару"
        register={register}
        errors={errors}
      />
      <InputText
        name="currency_code"
        placeholder="валюта"
        register={register}
        errors={errors}
      />
      <InputText
        name="price"
        placeholder="ціна"
        register={register}
        errors={errors}
      />
      <InputText
        name="unit_type"
        placeholder="одиниці виміру"
        register={register}
        errors={errors}
      />
      <InputText
        name="picture"
        placeholder="посилання на картинку"
        register={register}
        errors={errors}
      />
      <button
        type="submit"
        // isSubmitting={isSubmitting}
        // disabled={isSubmitting}
        className={styles.btnSubmit}
      >
        {isSubmitting ? <Spinner /> : "відправити"}
      </button>
    </form>
  );
}
