import React, { useEffect } from "react";
import UseRoutes from "./routes";
import Layout from "./hoc/Layout/Layout";
import {autoLogin} from './store/Actions/auth';
import {connect} from 'react-redux';

function App(props) {
  useEffect(() => {
    props.autoLogin()
  })
  return (
    <Layout>
      <UseRoutes />
    </Layout>
  );
}

function mapDispatchToProps(dispatch) {
  return  {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(null, mapDispatchToProps)(App);
