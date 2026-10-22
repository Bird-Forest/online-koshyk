"use client";

import React, { useState } from "react";
import styles from "./sample_2.module.css";
import BlockHero from "./BlockHero";
import BlockProperty from "./BlockProperty";
import BlockPhoto from "./BlockPhoto";
import BlockDiscount from "./BlockDiscount";
import BlockPrice from "./BlockPrice";
import UserForm from "@/components/Order/UserForm";
import BlockSelect from "./BlockSelect";
import BlockPresent from "./BlockPresent";
import BlockUserOrder from "./BlockUserOrder";

export default function SampleSecond({ item }) {
  const props = item.select ? item.select[0].value : null;
  const [selectedColor, setSelectedColor] = useState(props);
  const [presentId, setPresentId] = useState(null);
  const [open, setOpen] = useState(false);

  const nameProperty = (arr) => {
    let property = arr.find((el) => el.value === selectedColor);

    return property ? property.name : null;
  };
  const currentName = nameProperty(item.select);

  const property = {
    name: currentName,
    value: selectedColor,
  };

  const onChangeColor = (e) => {
    setSelectedColor(e.target.value);
  };
  // Находим выбранный объект подарка по его id
  const selectedPresent = item.presents.find((el) => el.id === presentId);
  // Можешь проверить в консоли, что объект находится
  // console.log("Выбранный подарок:", selectedPresent);

  const onChangePresent = (e) => {
    setPresentId(e.target.value);
  };

  const openForm = () => {
    setOpen(true);
  };

  const notes = item.notes;
  const titleNotes = item.titleNotes;
  const descriptions = item.description;
  const titleDescriptions = item.titleDescriptions;

  return (
    <div
      className={styles.wrapItem}
      style={{ backgroundColor: `${item.bg_color}` }}
    >
      <BlockHero item={item} />
      <BlockProperty item={item} arr={notes} title={titleNotes} />
      {item.arrImg.length > 0 && <BlockPhoto item={item} />}
      <BlockProperty item={item} arr={descriptions} title={titleDescriptions} />
      <BlockDiscount item={item} />
      <BlockPrice item={item} />
      <BlockSelect
        item={item}
        onChangeColor={onChangeColor}
        selectedColor={selectedColor}
      />
      <BlockPresent
        item={item}
        onChangePresent={onChangePresent}
        selectedValue={presentId}
      />
      <BlockUserOrder
        item={item}
        present={selectedPresent}
        openForm={openForm}
      />
      {open && (
        <UserForm
          item={item}
          selectedColor={selectedColor}
          property={property}
          present={selectedPresent}
        />
      )}
    </div>
  );
}
