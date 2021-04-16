import React from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import {
  toogleMenuHandler
} from "../../store/Actions/header";
import MenuToggle from "../../components/UI/MenuToggle/MenuToggle";
import AuthToogle from "../../components/UI/AuthToogle/AuthToogle";
import Menu from "../../components/Navigation/UserNavigation/Menu";
import Search from "../../components/UI/Search/Search";
import Logo from "../../components/UI/Logo/Logo";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <Menu
        isAuthenticated={props.isAuthenticated}
        isOpen={props.burgerMenu}
        onClose={props.toogleMenuHandler}
      />
      <MenuToggle
        onToogle={props.toogleMenuHandler}
        isOpen={props.burgerMenu}
      />
      <Logo />
      <Search />
      <AuthToogle />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    burgerMenu: state.header.burgerMenu
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toogleMenuHandler: () => dispatch(toogleMenuHandler())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
