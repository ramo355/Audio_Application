import React from "react";
import classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";

const links = [
  { to: "/", label: "Главная", exact: true },
  { to: "/top", label: "Топ-100", exact: false },
  { to: "/new", label: "Новинки", exact: true },
  { to: "/genres", label: "Жанры", exact: false },
  { to: "/playlist", label: "Мой плейлист", exact: false },
];

export function Menu(props) {
  const handleClick = () => {
    props.onClose();
  };

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={handleClick}
          >
            {link.label}
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
        <ul>{renderLinks()}</ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </React.Fragment>
  );
}

export default Menu;
