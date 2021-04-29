import React from "react";
import classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import Icon from "../../UI/Icon/Icon";

export function Menu(props) {
  const links = [
    { to: "/", label: "Главная", exact: true, class: "fa-home" },
    { to: "/top", label: "Топ-100", exact: false, class: "fa-star" },
    { to: "/new", label: "Новинки", exact: true, class: "fa-fire" },
    { to: "/genres", label: "Жанры", exact: false, class: "fa-th-large" },
  ];

  if (props.isAuthenticated) {
    links.push(
      {
        to: "/playlist",
        label: "Мой плейлист",
        exact: true,
        class: "fa-music",
      },
      {
        to: "/downloads",
        label: "Загрузить файлы",
        exact: true,
        class: "fa-download",
      }
    );
  }
  // if(props.isAdmin) {
  //   links.push({
  //     to: "/downloads",
  //     label: "Загрузить файлы",
  //     exact: true,
  //     class: "fa-download",
  //   });
  // }
  const handleClick = () => {
    props.onClose();
  };

  const renderLinks = (links) => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={handleClick}
          >
            <Icon class={link.class} />{" "}
            <div className={classes.Label}>{link.label}</div>
          </NavLink>
        </li>
      );
    });
  };
  const cls = [classes.Menu];
  if (!props.isOpen) {
    cls.push(classes.close);
  }

  return (
    <React.Fragment>
      <nav className={cls.join(" ")}>
        {props.isAuthenticated ? (
          <>
            {" "}
            <div className={classes.Profile}>
              <NavLink to="profile" onClick={handleClick}>
                <img src="https://www.meme-arsenal.com/memes/8b6f5f94a53dbc3c8240347693830120.jpg" />
              </NavLink>
            </div>
            <NavLink to="profile" onClick={handleClick}>
              <div className={classes.Change_Profile}>Изменить профиль</div>
            </NavLink>
          </>
        ) : null}

        <ul>{renderLinks(links)}</ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </React.Fragment>
  );
}

export default Menu;
