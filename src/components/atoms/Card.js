import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    height: 200,
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
  },
});

const Card = ({ children, rootStyle }) => {
  return <View style={[styles.root, rootStyle]}>{children}</View>;
};

export default Card;
