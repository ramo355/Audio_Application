import React from "react";
import classes from "./Cards.module.css";
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  return (
    <div className={classes.Cards}>
      <div className={classes.Cards_row}>
        <NavLink to={props.to}>
          <img src={props.src} alt={props.src} />
        </NavLink>
        <div className={classes.Card_title}>{props.title}</div>
      </div>
    </div>
  );
};

export default Cards;
