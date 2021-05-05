import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { autoLogin } from "./store/Actions/auth";
import Home from "./containers/Home/Home";
import Top from "./containers/Top/Top";
import New from "./containers/New/New";
import Genres from "./containers/Genres/Genres";
import Playlist from "./containers/Playlist/Playlist";
import Download from "./components/Download/Download";
import Rock from "./containers/Rock/Rock";
import Jazz from "./containers/Jazz/Jazz";
import Trance from "./containers/Trance/Trance";
import Pop from "./containers/Pop/Pop";
import Rap from "./containers/Rap/Rap";
import HipHop from "./containers/HipHop/HipHop";
import Electro from "./containers/Electro/Electro";
import Auth from "./components/Auth/Auth";
import Registration from "./components/Registration/Registration";
import Profile from "./containers/Profile/Profile";
import Logout from "./components/Logout/Logout";

const useRoutes = (props) => {
  // useEffect(() => {
  //   props.autoLogin();
  // });

  if (props.isAuthenticated) {
    return (
      <Switch>
        <Route path="/top" exact>
          <Top />
        </Route>
        <Route path="/new" exact>
          <New />
        </Route>
        <Route path="/genres" exact>
          <Genres />
        </Route>
        <Route path="/rock">
          <Rock />
        </Route>
        <Route path="/jazz">
          <Jazz />
        </Route>
        <Route path="/trance">
          <Trance />
        </Route>
        <Route path="/pop">
          <Pop />
        </Route>
        <Route path="/rap">
          <Rap />
        </Route>
        <Route path="/hiphop">
          <HipHop />
        </Route>
        <Route path="/electro">
          <Electro />
        </Route>
        <Route path="/downloads" exact>
          <Download />
        </Route>
        <Route path="/playlist" exact>
          <Playlist />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
console.log(props.isAuthenticated)
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
      <Route path="/rock">
        <Rock />
      </Route>
      <Route path="/jazz">
        <Jazz />
      </Route>
      <Route path="/trance">
        <Trance />
      </Route>
      <Route path="/pop">
        <Pop />
      </Route>
      <Route path="/rap">
        <Rap />
      </Route>
      <Route path="/hiphop">
        <HipHop />
      </Route>
      <Route path="/electro">
        <Electro />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/register">
        <Registration />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};



function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default 
  connect(null, mapDispatchToProps)(useRoutes)
