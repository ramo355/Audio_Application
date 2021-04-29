import React, { useState } from "react";
import classes from "./Profile.module.css";
import { connect } from "react-redux";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Buton/Button";
import axios from "axios";

const Profile = (props) => {
  const [valid, setValid] = useState(false)
  const [file, setFile] = useState({
    img: {
      value: null,
      type: "file",
      name: "file",
      label: "Загрузить картинку",
    },
    name: {
      value: "",
      type: "text",
      name: "name",
      label: "Ваше имя",
    },
  });

console.log(file)

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...file };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    formControls[controlName] = control;
    setFile(formControls);
    setValid(!valid)
  };

  const fileHandler = async () => {
const data = {
  img: file.img.value,
  name: file.name.value,
  userId: localStorage.getItem('userId')
}
const response = await axios.post('http://localhost:5000/profile', data)
  };

  const renderInputs = () => {
    return Object.keys(file).map((item, idx) => {
      const field = file[item];
      return (
        <Input
          type={field.type}
          name={field.name}
          label={field.label}
          key={field + idx}
          onChange={(event) => onChangeHandler(event, item)}
        />
      );
    });
  };

  return (
    <div className={classes.Download}>
      <form
        className={classes.Upload}
        encType="multipart/form-data"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Профиль</h1>
        <p>Ваш email: {props.email} </p>
        {renderInputs()}
        <Button disabled={valid} onClick={fileHandler}>Изменить</Button>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    email: state.auth.email,
  };
}

export default connect(mapStateToProps, null)(Profile);
