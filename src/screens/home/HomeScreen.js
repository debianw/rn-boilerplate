import React from "react";
import { ScrollView, SafeAreaView, View, Text, StyleSheet } from "react-native";
import Card from "../../components/atoms/Card";
import Toolbar from "../../components/molecules/Toolbar";
import { COLORS, SIZE } from "../../constants";

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: COLORS.primary.main },
});

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      <Toolbar />

      <View
        style={{
          borderTopRightRadius: SIZE.spacing(1),
          borderTopLeftRadius: SIZE.spacing(1),
          backgroundColor: "transparent",
          position: "absolute",
          top: 120,
          right: SIZE.spacing(2),
          bottom: 0,
          left: SIZE.spacing(2),
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          <Card>
            <Text>Box 1 ...</Text>
          </Card>

          <Card>
            <Text>Box 2 ...</Text>
          </Card>

          <Card>
            <Text>Box 3 ...</Text>
          </Card>
          <Card>
            <Text>Box 4 ...</Text>
          </Card>
          <Card>
            <Text>Box 5 ...</Text>
          </Card>
          <Card>
            <Text>Box 6 ...</Text>
          </Card>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export const ScreenOptions = {
  headerShown: false,
};

export default HomeScreen;
