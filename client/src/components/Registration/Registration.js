import React, { useState } from "react";
import classes from "./Registration.module.css";
import { connect } from "react-redux";
import Input from "../UI/Input/Input";
import Button from "../UI/Buton/Button";
import { NavLink } from "react-router-dom";
import { auth } from "../../store/Actions/auth";

function validateEmail(email) {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}

const Registration = (props) => {
  const [error, setError] = useState('')
  const [isFormValid, setIsFormValid] = useState(false);
  const [register, setRegister] = useState({
    email: {
      value: "",
      type: "email",
      name: "email",
      label: "Email",
      errorMessage: "Введите корректный email",
      valid: false,
      placeholder: "Email",
      touched: false,
      validation: {
        required: true,
        email: true,
      },
    },
    password: {
      value: "",
      type: "password",
      name: "password",
      label: "Пароль",
      errorMessage: "Пароль должен содержать минимум 6 символов",
      valid: false,
      placeholder: "Password",
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
        <div key={field + idx} className={classes.Registration}>
          <Input
            name={field.name}
            id={field.name}
            key={item + idx}
            placeholder={field.placeholder}
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

  const registerHandler = async () => {
    try {
      await props.register(
        register.email.value,
        register.password.value,
        false
      );
    } catch (e) {
      const error = e.response
      setError(error.data['message'])
    }
  };

  return (
    <>
      <form className={classes.Form} onSubmit={(e) => e.preventDefault()}>
        <h1>Регистрация</h1>
        <div className={classes.error}>
        {error}
        </div>
       
        {renderInputs()}
        <div>
          У вас уже есть аккаунта? <NavLink to="/auth">Авторизоваться</NavLink>
        </div>
        <Button
          disabled={!isFormValid}
          className={classes.Button}
          onClick={registerHandler}
        >
          Регистрация
        </Button>
      </form>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    register: (email, password, isLogin) =>
      dispatch(auth(email, password, isLogin)),
     
  };
}
export default connect(null, mapDispatchToProps)(Registration);
