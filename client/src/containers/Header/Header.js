import React from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import {
  toogleMenuHandler,
  toogleAuthHandler,
  registerHandler,
  authHandler,
} from "../../store/Actions/header";
import MenuToggle from "../../components/UI/MenuToggle/MenuToggle";
import AuthToogle from "../../components/UI/AuthToogle/AuthToogle";
import Menu from "../../components/Navigation/UserNavigation/Menu";
import RegisterMenu from "../../components/Navigation/RegisterNavigation/RegisterMenu";
import Search from "../../components/UI/Search/Search";
import Logo from "../../components/UI/Logo/Logo";

const Header = (props) => {
  return (
    <div>
      <div className={classes.Header}>
        <Menu isOpen={props.burgerMenu} onClose={props.toogleMenuHandler} />
        <MenuToggle
          onToogle={props.toogleMenuHandler}
          isOpen={props.burgerMenu}
        />
        <Logo />
        <Search />
        <AuthToogle
          onToogle={props.toogleAuthHandler}
          isOpen={props.authMenu}
        />
        <RegisterMenu
          isOpen={props.authMenu}
          onClose={props.toogleAuthHandler}
          isAuth={props.isAuth}
          title={props.title}
          placeholder={props.placeholder}
          name={props.name}
          subtitle={props.subtitle}
          auth={props.auth}
          registerHandler={props.registerHandler}
          authHandler={props.authHandler}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    burgerMenu: state.header.burgerMenu,
    authMenu: state.header.authMenu,
    isAuth: state.header.isAuth,
    title: state.header.title,
    placeholder: state.header.placeholder,
    name: state.header.name,
    subtitle: state.header.subtitle,
    auth: state.header.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toogleMenuHandler: () => dispatch(toogleMenuHandler()),
    toogleAuthHandler: () => dispatch(toogleAuthHandler()),
    registerHandler: () => dispatch(registerHandler()),
    authHandler: () => dispatch(authHandler()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
