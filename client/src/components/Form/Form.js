import React, { useState } from "react";
import classes from "./Form.module.css";
import { connect} from 'react-redux';
import Button from "../UI/Buton/Button";
import Input from "../UI/Input/Input";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Auth = (props) => {
  const [formControl, setFormControl] = useState({
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
      errorMessage: "Введите корректный пароль",
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6,
      },
    },
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const loginHandler = () => {
  };

  const registerHandler = () => {
    props.auth(
      formControl.email.value,
      formControl.password.value,
      false
    )
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

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
    const formControls = { ...formControl };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    setFormControl(formControls);
    setIsFormValid(isFormValid);
  };

  const renderInputs = () => {
    return Object.keys(formControl).map((controlName, index) => {
      const control = formControl[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => onChangeHandler(event, controlName)}
        />
      );
    });
  };

  return (
    <div className={classes.Auth}>
      <div>
        <h1>Авторизация</h1>

        <form onSubmit={submitHandler} className={classes.AuthForm}>
          {renderInputs()}

          <Button type="success" onClick={loginHandler} disabled={isFormValid}>
            Войти
          </Button>

          <Button
            type="primary"
            onClick={registerHandler}
            disabled={isFormValid}
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
};


export default Auth;
