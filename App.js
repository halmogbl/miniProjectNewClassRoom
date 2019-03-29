import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./Components/HomePage";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

//git push --forcetrying to fix thank you you
// trying git stash
// yes
