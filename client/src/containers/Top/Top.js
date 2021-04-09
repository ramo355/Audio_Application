import React, { useState } from "react";
import classes from "./Top.module.css";
import Song from "../../components/Song/Song";
import Button from '../../components/UI/Buton/Button';

// const audio = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Top = (props) => {
  return (
    <div className={classes.Top}>
      <Song />
      <Button type='primary' className={classes.Button}>Показать всё</Button>
    </div>
  );
};

export default Top;
