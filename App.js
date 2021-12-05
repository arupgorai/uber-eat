import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";

import Home from "./src/screens/home/index";

export default function App() {
  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        translucent={false}
        backgroundColor="white"
      />
      <Home />
    </Fragment>
  );
}
