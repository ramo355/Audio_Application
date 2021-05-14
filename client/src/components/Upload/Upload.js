import React, { isValidElement, useRef, useState } from "react";
import classes from "./Upload.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Buton/Button";
import axios from "axios";

const Upload = (props) => {
  const ref = useRef();

  const [isValid, setValid] = useState(false);
  const [inputs, setInputs] = useState({
    audio: {
      type: "file",
      name: "avatar",
      label: "Загрузить аудио",
      value: null,
      touched: false,
      valid: false,
    },
    name: {
      type: "text",
      name: "name",
      label: "Название файла",
      value: "",
      touched: false,
      valid: false,
    },
    description: {
      type: "text",
      name: "description",
      label: "Описание файла",
      value: "",
      touched: false,
    },
    img: {
      type: "file",
      name: "picture",
      label: "Картинка для файла",
      value: null,
      touched: false,
      valid: false,
    },
    genre: {
      type: "text",
      name: "genre",
      label: "Жанр",
      value: "",
      touched: false,
      valid: false,
    },
  });

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...inputs };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    if (control.type === "file") {
      control.value = event.target.files[0];
    }
    control.touched = true;
    control.valid = true;

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    setInputs(formControls);
    setValid(isFormValid);
  };
console.log(inputs)
  const fileHandler = async () => {
    const formData = new FormData();
    formData.append("audio", inputs.audio.value);
    formData.append("name", inputs.name.value);
    formData.append("picture", inputs.img.value);
    formData.append("description", inputs.description.value);
    formData.append("genre", inputs.genre.value);
    const responce = await axios.post("http://localhost:5000/track", formData);
    console.log(responce.data);
    for (let input of ref.current) {
      input.value = null;
    }
  Object.keys(inputs).map(item => {
    inputs[item].value = null
    inputs[item].touched = false
    inputs[item].valid = false
  })
    setValid(!isValid);
  };

  const renderInputs = () => {
    return Object.keys(inputs).map((item, idx) => {
      const field = inputs[item];
      return (
        <Input
          name={field.name}
          type={field.type}
          label={field.label}
          key={field + idx}
          onChange={(e) => onChangeHandler(e, item)}
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
        <Button disabled={!isValid} onClick={fileHandler}>
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default Upload;
