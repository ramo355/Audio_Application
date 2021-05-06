import React, { useRef, useState } from "react";
import classes from "./Upload.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Buton/Button";
import axios from "axios";

const Upload = (props) => {
  const ref = useRef();

  const inputs = [
    { type: "file", name: "avatar", label: "Загрузить аудио" },
    { type: "text", name: "name", label: "Название файла" },
    { type: "text", name: "description", label: "Описание файла" },
    { type: "file", name: "picture", label: "Картинка для файла" },
    { type: "text", name: "genre", label: "Жанр" },
  ];

  const [audio, setAudio] = useState(null);
  const [img, setImg] = useState(null);
  const [description, setDecription] = useState("");
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [isValid, setValid] = useState(false);

  const onChangeHandler = (e) => {
    console.log(ref);
    if (e.target.name === "avatar") {
      setAudio(e.target.files[0]);
    }
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "picture") {
      setImg(e.target.files[0]);
    }
    if (e.target.name === "description") {
      setDecription(e.target.value);
    }
    if (e.target.name === "genre") {
      setGenre(e.target.value);
    }
  };

  const fileHandler = async (event) => {
    const formData = new FormData();
    formData.append("avatar", audio);
    formData.append("name", name);
    formData.append("picture", img);
    formData.append("description", description);
    formData.append("genre", genre);
    const responce = await axios.post("http://localhost:5000/track", formData);
    console.log(responce.data);
    for (let a of ref.current) {
      a.value = null;
    }
  };

  const renderInputs = () => {
    return inputs.map((item, idx) => {
      return (
        <Input
          required
          name={item.name}
          type={item.type}
          label={item.label}
          key={item + idx}
          onChange={onChangeHandler}
        />
      );
    });
  };

  return (
    <div className={classes.Download}>
      <form
        ref={ref}
        className={classes.Upload}
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Загрузка файлов</h1>
        {renderInputs()}
        <Button disabled={isValid} onClick={fileHandler}>
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default Upload;
