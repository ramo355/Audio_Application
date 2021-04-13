import React from "react";
import classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import Icon from "../../UI/Icon/Icon";

const links = [
  { to: "/", label: "Главная", exact: true, class: "fa-home" },
  { to: "/top", label: "Топ-100", exact: false, class: "fa-star" },
  { to: "/new", label: "Новинки", exact: true, class: "fa-fire" },
  { to: "/genres", label: "Жанры", exact: false, class: "fa-th-large" },
];

export function Menu(props) {
  if (props.isAuthenticated) {
    links.push({
      to: "/playlist",
      label: "Мой плейлист",
      exact: true,
      class: "fa-music",
    });
  };
  // if(props.isAdmin) {

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
        <ul>{renderLinks(links)}</ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </React.Fragment>
  );
}

export default Menu;
