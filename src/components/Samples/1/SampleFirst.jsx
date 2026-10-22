"use client";
import React from "react";
import styles from "./sample_1.module.css";
import { useState } from "react";
import BlockSlides from "./BlockSlides";
import BlockPrice from "./BlockPrice";
import BlockOrder from "./BlockOrder";
import BlockDescription from "./BlockDescription";
import BlockMain from "./BlockMain";
import BlockFeatures from "./BlockFeatures";
import BlockDiscountImg from "./BlockDiscountImg";
import UserForm from "@/components/Order/UserForm";

export default function SampleFirst({ item }) {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("білий");

  const nameProperty = (arr) => {
    let property = arr.find((el) => el.value === selectedColor);
    // console.log("PROPERTY", property);
    return property ? property.name : null;
  };
  const currentName = nameProperty(item.select);
  // console.log(currentName);

  const property = {
    name: currentName,
    value: selectedColor,
  };

  const onChangeColor = (e) => {
    setSelectedColor(e.target.value);
  };

  const openForm = () => {
    setOpen(true);
  };
  // const closeForm = () => {
  //   setOpen(false);
  // };
  // const isArray = Array.isArray(arr) && arr.length > 0;
  return (
    <div
      className={styles.wrapItem}
      style={{ backgroundColor: `${item.main}` }}
    >
      <BlockMain item={item} />
      <BlockFeatures item={item} />
      {item.description.length > 0 && <BlockDescription item={item} />}
      <BlockDiscountImg item={item} />
      {item.select.length > 0 && (
        <BlockSlides
          item={item}
          onChangeColor={onChangeColor}
          selectedColor={selectedColor}
        />
      )}
      <BlockPrice item={item} />
      <BlockOrder openForm={openForm} item={item} />
      {open && (
        <UserForm
          item={item}
          selectedColor={selectedColor}
          property={property}
        />
      )}
    </div>
  );
}
