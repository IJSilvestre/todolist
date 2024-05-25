import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PeapleListItem from "./PeapleListItem";

const PeopleList = (props) => {
  const { pessoas } = props;

  const items = pessoas.map((pessoa) => {
    return (
      <View style={style.itemsWrap}>
        <View style={style.itemsList}>
          <PeapleListItem key={pessoa.name.first} pessoa={pessoa} />
        </View>
      </View>
    );
  });

  return <View style={style.container}>{items}</View>;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  itemsWrap: {
    marginTop: 10,
    borderRadius: 15,
  },
  itemsList: {
    backgroundColor: "#8bd2e0",
    borderRadius: 25,
  },
});

export default PeopleList;
