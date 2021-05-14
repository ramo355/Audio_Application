import React, { useEffect } from "react";
import UseRoutes from "./routes";
import Layout from "./hoc/Layout/Layout";
import { autoLogin, fetchImage } from "./store/Actions/auth";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function App(props) {
  let userId = localStorage.getItem("userId");
  useEffect(() => {
    props.autoLogin();
    props.createAvatar(userId, true, null);
  }, []);
  return (
    <Layout>
      <UseRoutes isAuthenticated={props.isAuthenticated} />
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
    createAvatar: (userId, req, img) => dispatch(fetchImage(userId, req, img)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
