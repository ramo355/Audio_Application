import React from "react";
import classes from "./AuthToogle.module.css";

const AuthToogle = (props) => {
  const cls = [classes.AuthToogle, "fa"];

  if (props.isOpen) {
    cls.push("fa-times");
  }
  return (
    <>
      {props.isOpen ? (
        <i className={cls.join(" ")} onClick={props.onToogle} />
      ) : (
        <div to='/auth' className={classes.AuthToogle} onClick={props.onToogle}>
          Войти
        </div>
      )}
    </>
  );
};

export default AuthToogle;
