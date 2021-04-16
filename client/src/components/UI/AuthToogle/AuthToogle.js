import React from "react";
import classes from "./AuthToogle.module.css";
import { NavLink } from "react-router-dom";

const AuthToogle = () => {
  return (
    <>
      <div className={classes.AuthToogle}>
        <NavLink to="/auth">Войти</NavLink>
      </div>
    </>
  );
};

export default AuthToogle;
