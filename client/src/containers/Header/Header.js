import React, { useState } from "react";
import classes from "./Header.module.css";
import MenuToggle from "../../components/UI/MenuToggle/MenuToggle";
import AuthToogle from "../../components/UI/AuthToogle/AuthToogle";
import Menu from "../../components/Navigation/UserNavigation/Menu";
import RegisterMenu from "../../components/Navigation/RegisterNavigation/RegisterMenu";
import Search from "../../components/UI/Search/Search";
import Logo from "../../components/UI/Logo/Logo";

const Header = () => {
  const [burgerMenu, setMenu] = useState(false);
  const [authMenu, setAuthMenu] = useState(false);
  const toogleMenuHandler = () => {
    setMenu(!burgerMenu);
  };
  const toogleAuthHandler = () => {
    setAuthMenu(!authMenu);
  };

  return (
    <div>
      <div className={classes.Header}>
        <Menu isOpen={burgerMenu} onClose={toogleMenuHandler} />
        <MenuToggle onToogle={toogleMenuHandler} isOpen={burgerMenu} />
        <Logo />
        <Search />
        <AuthToogle onToogle={toogleAuthHandler} isOpen={authMenu} />
        <RegisterMenu isOpen={authMenu} onClose={toogleAuthHandler} />
      </div>
    </div>
  );
};

export default Header;
