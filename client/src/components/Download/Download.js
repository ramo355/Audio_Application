import React, { useState } from "react";
import classes from "./Download.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Buton/Button";

const inputs = [
  { type: "file", label: "Выберите файл" },
  { type: "text", label: "Название файлы" },
  { type: "text", label: "Описание файла" },
  { type: "text", label: "Картинка для файла"},
  { type: "text", label: "Жанр"},
];

const Download = (props) => {
  const fileHandler = (event) => {
    console.log(event.target.value)
  }
  const renderInputs = () => {
    return inputs.map((item, idx) => {
      return <Input type={item.type} label={item.label} key={item + idx} />;
    });
  };

  return (
    <div className={classes.Download}>
      <form className={classes.Upload} onSubmit={e => e.preventDefault()}>
        <h1>Загрузка файлов</h1>
        {renderInputs()}
        <Button onClick={fileHandler}>
        Отправить
        </Button>
      </form>
    </div>
  );
};

export default Download;
