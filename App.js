import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./Components/HomePage/index";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends React.Component {
  state = {
    loading: true
  };
  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}
