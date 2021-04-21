import React from "react";
import classes from "./Search.module.css";
import Input from "../Input/Input";
import Button from "../Buton/Button";
import Icon from "../Icon/Icon";

const Search = () => (
    <form className={classes.Search} onSubmit={(e) => e.preventDefault()}>
    <Input placeholder="Трек, артист" />
    <Button>
      <Icon class='fa-search'></Icon>
    </Button>
    </form>
  
);

export default Search;
