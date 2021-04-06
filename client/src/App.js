import React from "react";
// import { useRoutes } from "./routes";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Top from "./containers/Top/Top";
import New from "./containers/New/New";
import Genres from "./containers/Genres/Genres";
import Auth from "./containers/Auth/Auth";
import Playlist from "./containers/Playlist/Playlist";

function App() {
  // const routes = useRoutes(false);
  return (
    <Layout>
      <Switch>
        {/* <Route path='/' component={Layout} /> */}
        <Route path="/top" component={Top} />
        <Route path="/new" component={New} />
        <Route path="/genres" component={Genres} />
        <Route path="/auth" component={Auth} />
        <Route path="/playlist" component={Playlist} />
      </Switch>
    </Layout>
  );
}

export default App;
