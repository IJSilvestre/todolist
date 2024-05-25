import { Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import React from "react";

import Header from "./src/components/Header";
import PeopleList from "./src/components/PeopleList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pessoas: [],
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?nat=br&results=5").then((res) => {
      const { results } = res.data;
      this.setState({
        pessoas: results,
      });
    });
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Header title="Pessoas" />
        <View>
          <PeopleList pessoas={this.state.pessoas} />
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      padding: 5,
      margin: 5,
      marginTop: 15,
    },
  });
}
