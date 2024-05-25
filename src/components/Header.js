import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#8bd2e0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#f2f2f2",
  },
});

export default Header;
