import React, { useState } from "react";
import classes from "./Auth.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Buton/Button";
import { NavLink } from "react-router-dom";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Auth = (props) => {
  const [auth, setAuth] = useState({
    email: {
      value: "",
      type: "email",
      label: "Email",
      name: "email",
      errorMessage: '"Введите корректный email"',
      placeholder: "Email",
      required: true,
    },
    password: {
      value: "",
      type: "password",
      label: "Пароль",
      errorMessage: "Введите корректный пароль",
      name: "password",
      placeholder: "Password",
      required: true,
    },
  });

  const [isInvalid, setIsInvalid] = useState(false);

  const onChangeHandler = (e, item) => {
    const authControl = {...auth};
    const control = authControl[item]
  };

  const renderInputs = () => {
    return Object.keys(auth).map((item, idx) => {
      const field = auth[item];
      return (
        <div key={field + idx} className={classes.Auth}>
          <Input
            name={field.name}
            type={field.type}
            label={field.label}
            required={field.required}
            errorMessage={field.errorMessage}
            placeholder={field.placeholder}
            isInvalid={isInvalid}
            onChange={e => onChangeHandler(e, item)}
          />
        </div>
      );
    });
  };

  return (
    <>
      <form className={classes.Form} onSubmit={(e) => e.preventDefault()}>
        <h1>Авторизация</h1>
        {renderInputs()}
        <div>
          У вас еще нет аккаунта?{" "}
          <NavLink to="/register">Зарегистрироваться</NavLink>
        </div>
        <Button onClick={onChangeHandler} className={classes.Button}>
          Войти
        </Button>
      </form>
    </>
  );
};

export default Auth;
