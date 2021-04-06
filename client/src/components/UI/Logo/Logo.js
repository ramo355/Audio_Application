import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={process.env.PUBLIC_URL + "/images/Logo.png"} alt=" " />
    </div>
  );
};

export default Logo;
