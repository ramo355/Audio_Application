import React, { useEffect } from "react";
import classes from "./Logout.module.css";
import { connect } from "react-redux";
import { logout } from "../../store/Actions/auth";
import { NavLink } from "react-router-dom";

const Logout = (props) => {
  // useEffect(() => {
  //   props.logout();
  // });

  return (
    <div onClick={props.logout} className={classes.Logout}>
      <NavLink to="/">Выйти</NavLink>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
