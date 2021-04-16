import React from "react";
import classes from "./Top10.module.css";
import { NavLink } from "react-router-dom";
import Song from "../../components/Song/Song";
import Button from "../../components/UI/Buton/Button";

const Top10 = (props) => {
  return (
    <div className={classes.Top}>
      <h1>Top 100</h1>
      <Song />
      <Button type="primary" className={classes.Button}>
        <NavLink to="/top">Показать всё</NavLink>
      </Button>
    </div>
  );
};

export default Top10;
