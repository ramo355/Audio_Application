import React, { useEffect } from "react";
import classes from "./RegisterMenu.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Form from "../../Form/Form";

export const RegisterMenu = (props) => {
  useEffect(() => {
    props.registerHandler();
  }, []);

  // const loginHandler = () => {};

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
          isAuth={props.isAuth}
          authHandler={props.authHandler}
          registerHandler = {props.registerHandler}
          onSubmit={submitHandler}
          title={props.title}
          placeholder={props.placeholder}
          name={props.name}
          subtitle={props.subtitle}
          auth={props.auth}
        />
      </div>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </React.Fragment>
  );
};

export default RegisterMenu;
