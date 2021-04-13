import React from "react";
import classes from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <NavLink to='/'>
      <img src={process.env.PUBLIC_URL + "/images/Logo.png"} alt=" " />
      </NavLink>
      
    </div>
  );
};

export default Logo;
