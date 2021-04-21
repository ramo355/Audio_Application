import React, { useRef } from "react";
import classes from "./Top10.module.css";
import { NavLink } from "react-router-dom";
import Song from "../../components/Song/Song";
import Button from "../../components/UI/Buton/Button";

const Top10 = (props) => {
  const audioRef = useRef();
  const playA = () => {
    const audio = audioRef.current;
    audio.play();
  };
  return (
    <div className={classes.Top}>
      <h1>Top 100</h1>
      <Song />
      <audio ref={audioRef} controls onPlay={playA}>
        <source src={process.env.PUBLIC_URL + "/music/music.mp3.mp3"} />
      </audio>
      <Button type="primary" className={classes.Button}>
        <NavLink to="/top">Показать всё</NavLink>
      </Button>
    </div>
  );
};

export default Top10;
