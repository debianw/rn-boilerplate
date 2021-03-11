import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "../atoms/Icon";
import { useAuth } from "../../context/auth-context";
import { SIZE } from "../../constants";

const styles = StyleSheet.create({
  root: {
    height: 250,
    padding: SIZE.spacing(2),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Toolbar = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="list" size={32} color="white" />
      </TouchableOpacity>

      <TouchableOpacity onPress={signOut}>
        <Icon name="exit" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Toolbar;
