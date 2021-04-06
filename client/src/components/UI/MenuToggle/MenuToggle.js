import React from "react";
import classes from "./MenuToogle.module.css";

const MenuToogle = (props) => {
  const cls = [classes.MenuToggle, "fa"];
  if (props.isOpen) {
    cls.push("fa-times");
  } else {
    cls.push("fa-bars");
  }
  return <i className={cls.join(" ")} onClick={props.onToogle} />;
};

export default MenuToogle;
