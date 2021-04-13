import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import Top from "./containers/Top/Top";
import New from "./containers/New/New";
import Genres from "./containers/Genres/Genres";
import Playlist from "./containers/Playlist/Playlist";
import RegisterMenu from "./components/Navigation/RegisterNavigation/RegisterMenu";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/playlist" exact>
          <Playlist />
        </Route>
        <Route path="/top" exact>
          <Top />
        </Route>
        <Route path="/new" exact>
          <New />
        </Route>
        <Route path="/genres" exact>
          <Genres />
        </Route>
        <Route path="/auth" exact>
          <RegisterMenu />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/top" exact>
        <Top />
      </Route>
      <Route path="/new" exact>
        <New />
      </Route>
      <Route path="/genres" exact>
        <Genres />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
