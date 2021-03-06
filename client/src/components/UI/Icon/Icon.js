import React from "react";
import classes from "./Icon.module.css";

const Icon = (props) => {
const cls = [classes.Icon,'fa']
cls.push(props.class)
  return (
  
<i id={props.id} onMouseOver={props.onMouseOver} onClick={props.onClick} className={cls.join(' ')} aria-hidden="true"></i>


  )};

export default Icon;
