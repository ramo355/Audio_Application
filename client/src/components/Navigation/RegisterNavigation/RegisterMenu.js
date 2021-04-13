import React, { useEffect } from "react";
import classes from "./RegisterMenu.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../../UI/Buton/Button";
import AuthForm from "../../AuthForm/AuthForm";
import RegisterForm from "../../RegisterForm/RegisterForm";
import { connect } from "react-redux";
import { authHandler, registerHandler } from "../../../store/Actions/header";

export const RegisterMenu = (props) => {
  useEffect(() => {
    props.registerHandler();
  }, []);
  const cls = [classes.Menu];
  if (!props.isOpen) {
    cls.push(classes.close);
  }

  return (
    <React.Fragment>
      <div className={cls.join(" ")}>
        {props.isOpen && !props.isAuth ? (
          <AuthForm title="Авторизация" name="Вход" />
        ) : (
          <RegisterForm title="Регистрация" name="Зарегистрироваться" />
        )}
        <p>{props.subtitle}</p>
        <Button
          type="primary"
          onClick={!props.isAuth ? props.authHandler : props.registerHandler}
        >
          {props.auth}
        </Button>
      </div>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    isAuth: state.header.isAuth,
    title: state.header.title,
    placeholder: state.header.placeholder,
    name: state.header.name,
    subtitle: state.header.subtitle,
    auth: state.header.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    registerHandler: () => dispatch(registerHandler()),
    authHandler: () => dispatch(authHandler()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterMenu);
