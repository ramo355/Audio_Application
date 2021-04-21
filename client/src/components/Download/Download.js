import React from "react";
import classes from "./Download.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Buton/Button";

const inputs = [
  { type: "file", name: "audio", label: "Загрузить аудио" },
  { type: "text", name: "name", label: "Название файлы" },
  { type: "text", name: "title", label: "Описание файла" },
  { type: "file", name: "picture", label: "Картинка для файла" },
  { type: "text", name: "genre", label: "Жанр" },
];

const Download = (props) => {
  const fileHandler = (event) => {
    console.log(event.target.value);
  };
  const renderInputs = () => {
    return inputs.map((item, idx) => {
      return (
        <Input
          name={item.name}
          type={item.type}
          label={item.label}
          key={item + idx}
        />
      );
    });
  };

  return (
    <div className={classes.Download}>
      <form
      method="post"
        action="/download"
        className={classes.Upload}
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Загрузка файлов</h1>
        {renderInputs()}
        <Button onClick={fileHandler}>Отправить</Button>
      </form>
    </div>
  );
};

export default Download;
