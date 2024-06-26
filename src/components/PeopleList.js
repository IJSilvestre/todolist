import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import PeapleListItem from "./PeapleListItem";

const PeopleList = (props) => {
  const { pessoas, onPressItem } = props;

  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={pessoas}
        renderItem={({ item }) => <PeapleListItem pessoa={item} navigateToPeapleDatail={onPressItem} />}
        keyExtractor={(item) => item.name.first}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginTop: 5,
  },
});

export default PeopleList;
