import React from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import {
  toogleMenuHandler,
} from "../../store/Actions/header";
import {
  fetchImage
} from "../../store/Actions/auth";
import MenuToggle from "../../components/UI/MenuToggle/MenuToggle";
import AuthToogle from "../../components/UI/AuthToogle/AuthToogle";
import Menu from "../../components/Navigation/UserNavigation/Menu";
import Search from "../../components/UI/Search/Search";
import Logo from "../../components/UI/Logo/Logo";
import Logout from "../../components/Logout/Logout";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <Menu
        isAuthenticated={props.isAuthenticated}
        isOpen={props.burgerMenu}
        onClose={props.toogleMenuHandler}
        avatar={props.avatar}
      />
      <MenuToggle
        onToogle={props.toogleMenuHandler}
        isOpen={props.burgerMenu}
      />
      <Logo />
      <Search />
      {!props.isAuthenticated ? <AuthToogle /> : <Logout />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    burgerMenu: state.header.burgerMenu,
    isAuthenticated: state.auth.token,
    avatar: state.auth.avatar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toogleMenuHandler: () => dispatch(toogleMenuHandler())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
