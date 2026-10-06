"use client";
import React, { useState } from "react";
import styles from "./samples.module.css";
import BlockTag from "./BlockTag";
import BlockImgArr from "./BlockImgArr";
import BlockDescription from "./BlockDescription";
import BlockSlides from "./BlockSlides";
import BlockPrice from "./BlockPrice";
import BlockOrder from "./BlockOrder";
import UserForm from "../Order/UserForm";
import BlockDiscount from "./BlockDiscount";
import BlockWarning from "./BlockWarning";

export default function SampleSecond({ item }) {
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
  return (
    <div
      className={styles.wrapItem}
      style={{ backgroundColor: `${item.primary}` }}
    >
      <BlockTag item={item} />
      {item.image_arr.length > 0 && <BlockImgArr item={item} />}
      <BlockDiscount item={item} />
      {item.description.length > 0 && <BlockDescription item={item} />}
      {item.warning && <BlockWarning item={item} />}
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
