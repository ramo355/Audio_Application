import React, { useState } from "react";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import { auth, fetchImage } from "../../store/Actions/auth";
import Input from "../UI/Input/Input";
import Button from "../UI/Buton/Button";
import { NavLink } from "react-router-dom";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Auth = (props) => {
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [auth, setAuth] = useState({
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
    const formControls = { ...auth };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    setAuth(formControls);
    setIsFormValid(isFormValid);
  };

  const renderInputs = () => {
    return Object.keys(auth).map((item, idx) => {
      const field = auth[item];
      return (
        <div key={field + idx} className={classes.Auth}>
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

  const loginHandler = async () => {
    try {
      await props.auth(auth.email.value, auth.password.value, true);
    } catch (e) {
      const error = e.response;
      setError(error.data['message']);
    }
    let userId = localStorage.getItem('userId')
    props.createAvatar(userId, true, null)
  };

  return (
    <>
      <form className={classes.Form} onSubmit={(e) => e.preventDefault()}>
        <h1>Авторизация</h1>
        <div className={classes.error}>{error}</div>
        {renderInputs()}
        <div>
          У вас еще нет аккаунта?{" "}
          <NavLink to="/register">Зарегистрироваться</NavLink>
        </div>
        <Button
          disabled={!isFormValid}
          onClick={loginHandler}
          className={classes.Button}
        >
          Войти
        </Button>
      </form>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password, isLogin) =>
      dispatch(auth(email, password, isLogin)),
      createAvatar: (userId,req, img) => dispatch(fetchImage(userId,req, img)),
  };
}
export default connect(null, mapDispatchToProps)(Auth);
