import React from "react";
import classes from "./Song.module.css";

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
            //   justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
            }}
          >
            <div className={classes.place}>{item.place}</div>
            <div className={classes.Name_Song}>
              <div >{item.name}</div>
              <div>{item.singer}</div>
            </div>
          </div>
          <div>+</div>
          <div>_</div>
        </div>
      );
    });
  };

  return <div className={classes.Song}>{renderSongs(song)}</div>;
};

export default Song;
