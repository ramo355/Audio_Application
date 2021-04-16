import React from "react";
import classes from "./RegisterMenu.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Auth from '../../Auth/Auth';

export const RegisterMenu = (props) => {

  const cls = [classes.Menu];
  if (!props.isOpen) {
    cls.push(classes.close);
  }

  return (
    <React.Fragment>
      <div className={cls.join(" ")}>
       <Auth />
      </div>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </React.Fragment>
  );
};


export default RegisterMenu;
