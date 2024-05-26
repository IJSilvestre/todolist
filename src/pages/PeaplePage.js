import { Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import React from "react";

import PeopleList from "../components/PeopleList";

export default class PeaplePage extends React.Component {
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
        <View>
          <PeopleList pessoas={this.state.pessoas} />
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      marginTop: 15,
      borderRadius: 15,
      padding:10
    },
  });
}
