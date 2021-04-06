import React from "react";
import classes from "./Search.module.css";
import Input from "../Input/Input";

const Search = () => (
  <div className={classes.Search}>
    <i className="fa fa-search" aria-hidden="true"></i>
    <Input placeholder="Трек, артист" />
  </div>
);

export default Search;
