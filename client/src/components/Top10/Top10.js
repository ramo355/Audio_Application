import React, { useEffect, useRef, useState } from "react";
import classes from "./Top10.module.css";
import { NavLink } from "react-router-dom";
import Button from "../../components/UI/Buton/Button";
import Icon from "../UI/Icon/Icon";
import Loader from "../UI/Loader/Loader";
import axios from "axios";

const Top10 = (props) => {
  const [audio, setAudio] = useState();
  const [track, setTrack] = useState(null);
  const [element, setElemenet] = useState("");
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const audioRequest = async () => {
      const response = await axios.get("http://localhost:5000/track");
      setAudio(response.data);
    };
    audioRequest();
  }, []);

  const playMusic = (e, song) => {
    setElemenet(e.target);
    if (track) {
      if (track.id !== song.id && element !== e.target) {
        setElemenet(e.target);
        setTrack(song);
        setPlay(false);
        let newStr = e.target.className.replace(/fa-pause/gi, "fa-play");
        let str = e.target.className.replace(/fa-play/gi, "fa-pause");
        if (!element) {
          let newStr = e.target.className.replace(/fa-pause/gi, "fa-play");
          e.target.className = newStr;
          setPlay(true);
        }
        track.pause();
        song.play();
        element.className = newStr;
        e.target.className = str;
        return false;
      }
      let newStr = e.target.className.replace(/fa-play/gi, "fa-pause");
      e.target.className = newStr;
      track.play();
      setPlay(false);
    } else {
      setTrack(song);
      song.play();
      let newStr = e.target.className.replace(/fa-play/gi, "fa-pause");
      e.target.className = newStr;
      setPlay(false);
    }
  };

  const stopMusic = (e, song) => {
    if (track) {
      let newStr = e.target.className.replace(/fa-pause/gi, "fa-play");
      let str = e.target.className.replace(/fa-play/gi, "fa-pause");
      element.className = str;
      e.target.className = newStr;
      track.pause();
      // song.play();
      setPlay(!play);
    } else {
      let newStr = e.target.className.replace(/fa-pause/gi, "fa-play");
      let str = e.target.className.replace(/fa-play/gi, "fa-pause");
      e.target.className = str;
      // element.className = newStr;
      // track.pause();
      song.pause();
      setPlay(!play);
    }
  };

  const mouse = (e) => {
    console.log(e.target);
    if (e.target === element) {
      setPlay(false);
      if (play) {
        setPlay(play);
      }
    } else {
      setPlay(true);
    }
  };

  const renderSongs = (audio) => {
    return audio.map((item, idx) => {
      let song = new Audio();
      song.autoplay = false;
      song.loop = true;
      song.volume = 0.5;
      song.controls = true;
      song.id = item._id;
      song.src = `http://localhost:5000/` + `${item.audio}`;
      return (
        <div key={item._id} className={classes.Row}>
          <Icon
            id={item._id}
            onMouseOver={(e) => mouse(e)}
            onClick={
              play ? (e) => playMusic(e, song) : (e) => stopMusic(e, song)
            }
            class="fa-play"
          ></Icon>
          <div id={item._id} className={classes.Name}>
            {item.name}
          </div>
          <Icon class="fa-heart" />
          <Icon class="fa-plus" />
          <Icon class="fa-comment" />
        </div>
      );
    });
  };
  return (
    <div className={classes.Top}>
      <h1>Popular</h1>
      <div className={classes.Audio_row}>
        {!audio ? <Loader /> : renderSongs(audio)}
      </div>
      <Button type="primary" className={classes.Button}>
        <NavLink to="/top">Показать всё</NavLink>
      </Button>
    </div>
  );
};

export default Top10;
