import React, { useState } from "react";
import classes from "./Registration.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Buton/Button";
import { NavLink } from "react-router-dom";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Registration = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [register, setRegister] = useState({
    email: {
      value: "",
      type: "email",
      label: "Email",
      errorMessage: "Введите корректный email",
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true,
      },
    },
    password: {
      value: "",
      type: "password",
      label: "Пароль",
      errorMessage: "Пароль должен содержать минимум 6 символов",
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6,
      },
    },
  });

  const validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  };


  const onChangeHandler = (event, controlName) => {
    const formControls = { ...register };
    const control = { ...formControls[controlName] };
   
    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    setRegister(formControls);
    setIsFormValid(isFormValid);
  };


  const renderInputs = () => {
    return Object.keys(register).map((item, idx) => {
      const field = register[item];
      return (
        <div key={field + idx} className={classes.Auth}>
          <Input
            key={item + idx}
            type={field.type}
            value={field.value}
            valid={field.valid}
            touched={field.touched}
            label={field.label}
            shouldValidate={!!field.validation}
            errorMessage={field.errorMessage}
            onChange={(event) => onChangeHandler(event, item)}
          />
        </div>
      );
    });
  };

  return (
    <>
      <form className={classes.Form} onSubmit={(e) => e.preventDefault()}>
        <h1>Регистрация</h1>
        {renderInputs()}
        <div>
          У вас уже есть аккаунта? <NavLink to="/auth">Авторизоваться</NavLink>
        </div>
        <Button disabled={!isFormValid} className={classes.Button} onClick={() => {
          console.log(register.email.value) //localstorage
        }}>Регистрация</Button>
      </form>
    </>
  );
};

export default Registration;
