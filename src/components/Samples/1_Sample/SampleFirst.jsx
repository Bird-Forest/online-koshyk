"use client";
import React from "react";
import styles from "./1_samples.module.css";
import { useState } from "react";
import UserForm from "../../Order/UserForm";
import BlockTag from "./BlockTag";
import BlockNotes from "./BlockNotes";
import BlockSlides from "./BlockSlides";
import BlockPrice from "./BlockPrice";
import BlockOrder from "./BlockOrder";
import BlockImg from "./BlockImg";
import BlockDescription from "./BlockDescription";

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
      style={{ backgroundColor: `${item.primary}` }}
    >
      <BlockTag item={item} />
      {item.image_2 && <BlockImg item={item} />}
      <BlockNotes item={item} />
      {item.description.length > 0 && <BlockDescription item={item} />}
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
