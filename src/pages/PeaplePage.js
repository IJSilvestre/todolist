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
    axios.get("https://randomuser.me/api/?nat=br&results=10").then((res) => {
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
          <PeopleList
            pessoas={this.state.pessoas}
            onPressItem={(pageParams) =>
              this.props.navigation.navigate("PeapleDetails", pageParams)
            }
          />
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: "#ffffff",
    },
  });
}
