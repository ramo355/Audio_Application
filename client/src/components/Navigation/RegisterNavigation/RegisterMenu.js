import React, { useEffect, useState } from "react";
import classes from "./RegisterMenu.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Form from "../../Form/Form";

export function RegisterMenu(props) {
  const [isAuth, setIsAuth] = useState(true);
  const [title, setTitle] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [auth, setAuth] = useState("");

  function registerHandler() {
    setIsAuth(!isAuth);
    if (isAuth) {
      setTitle("Войти");
      setPlaceholder("Пароль");
      setName("Вход");
      setSubtitle("У вас еще нет аккаунта?");
      setAuth("Зарегистрироваться");
    } else {
      setTitle("Регистрация");
      setPlaceholder("Создать пароль");
      setName("Зарегистрироваться");
      setSubtitle("У вас уже есть аккаунт?");
      setAuth("Войти");
    }
  }

  useEffect(() => {
    registerHandler();
  }, []);

  const loginHandler = () => {};

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const cls = [classes.Menu];
  if (!props.isOpen) {
    cls.push(classes.close);
  }
  return (
    <React.Fragment>
      <div className={cls.join(" ")}>
        <Form
          onClick={registerHandler}
          onSubmit={submitHandler}
          title={title}
          placeholder={placeholder}
          name={name}
          subtitle={subtitle}
          auth={auth}
        />
      </div>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </React.Fragment>
  );
}

export default RegisterMenu;
