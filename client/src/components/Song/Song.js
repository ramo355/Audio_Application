import React, { useState } from "react";
import classes from "./Song.module.css";
import Icon from "../UI/Icon/Icon";

const song = [
  {
    place: 1,
    name: "Zivert",
    singer: "Zivert",
  },
  {
    place: 2,
    name: "Zivert",
    singer: "Zivert",
  },
  {
    place: 3,
    name: "Zivert",
    singer: "Zivert",
  },
  {
    place: 4,
    name: "Zivert",
    singer: "Zivert",
  },
  {
    place: 5,
    name: "Zivert",
    singer: "Zivert",
  },
  {
    place: 6,
    name: "Zivert",
    singer: "Zivert",
  },
  {
    place: 7,
    name: "Zivert",
    singer: "Zivert",
  },
  {
    place: 8,
    name: "Zivert",
    singer: "Zivert",
  },
  {
    place: 9,
    name: "Zivert",
    singer: "Zivert",
  },
  {
    place: 10,
    name: "Zivert",
    singer: "Zivert",
  },
];

const Song = (props) => {
  const renderSongs = (song) => {
    return song.map((item, idx) => {
      return (
        <div className={classes.Song_row}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "80%",
            }}
          >
            <div className={classes.place}>{item.place}</div>

            <div className={classes.Name_Song}>
              <div>{item.name}</div>
              <div>{item.singer}</div>
            </div>
          </div>
          <div style={{ color: "#921414" }}>
            <Icon class="fa-heart" />
          </div>
          <div style={{ color: "rgb(22 20 148 / 66%)" }}>
            <Icon class="fa-plus" />
          </div>
          <div style={{ color: "#14922f" }}>
            <Icon class="fa-comments" />
          </div>
        </div>
      );
    });
  };

  return <div className={classes.Song}>{renderSongs(song)}</div>;
};

export default Song;
