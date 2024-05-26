import React from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
const PeapleListItem = (props) => {
  const { pessoa } = props;

  return (
    <TouchableOpacity onPress={() => alert(`Ola ${pessoa.name.first}`)}>
      <View style={style.line}>
        <Image
          style={style.avatar}
          source={{ uri: pessoa.picture.thumbnail }}
        />
        <Text style={style.lineText}>
          {`${capitalizeFirstLetter(pessoa.name.title)} ${capitalizeFirstLetter(
            pessoa.name.first
          )}  ${capitalizeFirstLetter(pessoa.name.last)}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  line: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  lineText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f2f2f2",
    paddingLeft: 15,
    flex: 7,
    textAlign: "right",
    marginEnd: 15,
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50,
  },
});
export default PeapleListItem;
