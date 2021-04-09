import React from "react";
import classes from "./Cards.module.css";



const Cards = () => {
    return (
<div className={classes.Cards}>
    <div className={classes.Card_img}>
    <img src={process.env.PUBLIC_URL + "/images/images.jpg"} alt=" " />
    </div>
    <div className={classes.Card_title}>Rock</div>
</div>
    )
};

export default Cards;