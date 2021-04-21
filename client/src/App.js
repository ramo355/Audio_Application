import React from "react";
import { useRoutes } from "./routes";
import {connect} from 'react-redux';
import Layout from "./hoc/Layout/Layout";

function App(props) {
  const routes = useRoutes(props.isAuthenticated);
  return <Layout>{routes}</Layout>;
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.header.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(App);
