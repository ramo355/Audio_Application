import React from "react";
import { useRoutes } from "./routes";
import Layout from "./hoc/Layout/Layout";

function App() {
  const routes = useRoutes(false);
  return <Layout>{routes}</Layout>;
}

export default App;
