import React from "react";
import classes from "./Layout.module.css";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
